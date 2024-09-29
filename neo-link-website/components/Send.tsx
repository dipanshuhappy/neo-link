'use client'

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { waitForTransactionReceipt } from "@wagmi/core"
import {
  Zap,
  ArrowLeft,
  Moon,
  Sun,
  ChevronDown,
  Copy,
  Check,
  Mail,
  Send,
  Github,
  Download,
} from "lucide-react"
import { ConnectWalletButton } from "./NavBar"
import { useAccount, useChainId, useWriteContract } from "wagmi"
import { Case, Default, Else, If, Switch, Then } from "react-if"
import { writeContract, readContract } from "@wagmi/core"
import {
  generateKeyFromString,
  getChain,
  getLinkForNativeToken,
  getRandomString,
  ValidChainId,
} from "@/lib/utils"
import {
  neoLinkAddress,
  useWriteNeoLinkMakeCustomDeposit,
} from "@/lib/smart-contract"
import { NULL_ADDRESS } from "@/lib/constants"
import { TailSpin } from "react-loader-spinner"
import dynamic from "next/dynamic"
import { QRCodeSVG } from "qrcode.react"
import { config } from "@/lib/config"
import { erc20Abi } from "viem"

const Confetti = dynamic(() => import("react-confetti"), { ssr: false })

type AssetType = "Token" | "NFT" | string

function SendAmount({
  amount,
  setAmount,
  selectedAsset,
  setSelectedAsset,
  setTokenAddress,
  tokenAddress,
  tokenAmount,
  setTokenAmount,
}: {
  amount: string
  setAmount: React.Dispatch<React.SetStateAction<string>>
  selectedAsset: AssetType
  setSelectedAsset: React.Dispatch<React.SetStateAction<AssetType>>
  tokenAddress: string
  setTokenAddress: React.Dispatch<React.SetStateAction<string>>
  tokenAmount: string
  setTokenAmount: React.Dispatch<React.SetStateAction<string>>
}) {
  const chainId = useChainId()

  const symbol = getChain(chainId as ValidChainId).nativeCurrency.symbol
  return (
    <>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Asset Type
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <select
              value={selectedAsset}
              onChange={(e) => setSelectedAsset(e.target.value as AssetType)}
              className="w-full appearance-none bg-white dark:bg-gray-700 border-2 border-[#00E676] text-gray-700 dark:text-gray-200 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300"
            >
              {([symbol, "Token"] as AssetType[]).map((token) => (
                <option key={token} value={token}>
                  {token}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Case condition={selectedAsset === "Token"}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Token Address
            </label>
            <div className="relative">
              <input
                type="text"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                placeholder="0x..."
                className="w-full px-4 py-2 rounded-lg border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Zap className="h-5 w-5 text-[#00E676]" />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Tokens
            </label>
            <div className="relative">
              <input
                type="number"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                placeholder="0"
                className="w-full px-4 py-2 rounded-lg border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Zap className="h-5 w-5 text-[#00E676]" />
              </div>
            </div>
          </div>
        </Case>
        <Default>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-2 rounded-lg border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Zap className="h-5 w-5 text-[#00E676]" />
              </div>
            </div>
          </div>
        </Default>
      </Switch>
    </>
  )
}

export default function SendPage() {
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const [tokenAmount, setTokenAmount] = useState("")
  const chainId = useChainId()
  const chain = getChain(chainId as ValidChainId)

  const symbol = getChain(chainId as ValidChainId).nativeCurrency.symbol
  const [selectedAsset, setSelectedAsset] = useState<AssetType>(symbol)
  const [tokenAddress, setTokenAddress] = useState<string>("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { writeContractAsync: deposit } = useWriteNeoLinkMakeCustomDeposit()

  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [generatedLink, setGeneratedLink] = useState<string | null>(null)
  const [isCopied, setIsCopied] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const { writeContractAsync } = useWriteContract()

  const { address } = useAccount()
  const qrRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      console.log(
        "Sending",
        selectedAsset === "Token" ? tokenAmount : amount,
        selectedAsset,
        "on",
        chain.name
      )
      if (!address) {
        throw new Error("Please connect your wallet")
      }

      if (selectedAsset === "Token" && (parseFloat(tokenAmount) <= 0 || !tokenAddress)) {
        throw new Error("Please enter a valid token amount and address")
      } else if (selectedAsset !== "Token" && parseFloat(amount) <= 0) {
        throw new Error("Please enter a valid amount")
      }

      let finalAmount: bigint
      const vaultAddress =
        neoLinkAddress[chainId as keyof typeof neoLinkAddress]
      const seed = await getRandomString(16)
      let txHash = ""
      if (!vaultAddress) {
        throw new Error("Vault address not found")
      }
      if (selectedAsset === symbol) {
        finalAmount = BigInt(parseFloat(amount) * 10 ** chain.nativeCurrency.decimals)
        txHash = await deposit({
          args: [
            NULL_ADDRESS,
            0,
            finalAmount,
            BigInt(0),
            generateKeyFromString(seed).address,
            address,
            false,
            NULL_ADDRESS,
            0,
            false,
            NULL_ADDRESS,
          ],
          value: finalAmount,
        })
      } else if (selectedAsset === "Token") {
        let decimals = await readContract(config, {
          abi: erc20Abi,
          functionName: "decimals",
          address: tokenAddress as `0x${string}`,
        })
        finalAmount = BigInt(parseFloat(tokenAmount) * 10 ** decimals)

        const approveTx = await writeContractAsync({
          abi: erc20Abi,
          address: tokenAddress as `0x${string}`,
          functionName: "approve",
          args: [vaultAddress, finalAmount],
        })

        await waitForTransactionReceipt(config, {
          hash: approveTx,
        })

        txHash = await deposit({
          args: [
            tokenAddress as `0x${string}`,
            1,
            finalAmount,
            BigInt(0),
            generateKeyFromString(seed).address,
            address,
            false,
            NULL_ADDRESS,
            0,
            false,
            NULL_ADDRESS,
          ],
        })
      }

      const url = await getLinkForNativeToken({
        address: address,
        txHash: txHash,
        url: `${window.location.origin}/claim`,
        seed: seed,
        chainId: chainId.toString(),
      })
      setGeneratedLink(url)

      setShowConfetti(true)
      setShowAlert(true)
      setTimeout(() => setShowConfetti(false), 5000) // Hide confetti after 5 seconds
    } catch (error: any) {
      console.error("Error sending tokens:", error)
      setShowAlert(true)
      setGeneratedLink(null)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const handleBackClick = () => {
    router.push("/")
  }

  const copyToClipboard = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent("Claim your tokens")
    const body = encodeURIComponent(`Here's your link to claim tokens: ${generatedLink}`)
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const shareViaTelegram = () => {
    const text = encodeURIComponent(`Here's your link to claim tokens: ${generatedLink}`)
    window.open(`https://t.me/share/url?url=${text}`)
  }

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(`Here's your link to claim tokens: ${generatedLink}`)
    window.open(`https://wa.me/?text=${text}`)
  }

  const shareViaGitHub = () => {
    const text = encodeURIComponent(`Here's your link to claim tokens: ${generatedLink}`)
    window.open(`https://github.com/login?return_to=${encodeURIComponent(`https://github.com/share?text=${text}`)}`)
  }

  const downloadQR = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas")
      if (canvas) {
        const image = canvas.toDataURL("image/png")
        const link = document.createElement("a")
        link.href = image
        link.download = "qr-code.png"
        link.click()
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4">
      {showConfetti && <Confetti />}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <If condition={!!address}>
          <Then>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <button
                    onClick={handleBackClick}
                    className="mr-2 text-gray-600 dark:text-gray-300 hover:text-[#00E676] transition-colors duration-300"
                    aria-label="Go back to home page"
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </button>
                  <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] via-[#1DE9B6] to-[#00BFA5]">
                    Send Tokens
                  </h1>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  aria-label={
                    isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transfer tokens via a generated link.
              </p>

              <form onSubmit={handleSend}>
                <SendAmount
                  selectedAsset={selectedAsset}
                  setSelectedAsset={setSelectedAsset}
                  setTokenAddress={setTokenAddress}
                  amount={amount}
                  setAmount={setAmount}
                  tokenAddress={tokenAddress}
                  tokenAmount={tokenAmount}
                  setTokenAmount={setTokenAmount}
                />

                <motion.button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <TailSpin
                      height="24"
                      width="24"
                      color="white"
                      ariaLabel="loading"
                    />
                  ) : (
                    "Create Link"
                  )}
                </motion.button>
              </form>

              <AnimatePresence>
                {showAlert && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-6 p-4 bg-grey-500 dark:bg-grey-700 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                      {generatedLink
                        ? "Transaction Successful!"
                        : "Transaction Failed"}
                    </h3>
                    {generatedLink ? (
                      <>
                        <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                          Your link has been generated:
                        </p>
                        <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-2 rounded mb-4">
                          <p className="text-sm text-gray-600 dark:text-gray-300 truncate mr-2">
                            {generatedLink}
                          </p>
                          <button
                            onClick={copyToClipboard}
                            className="p-2 bg-[#00E676] rounded-full text-white hover:bg-[#00BFA5] transition-colors duration-300"
                            aria-label="Copy link"
                          >
                            {isCopied ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <div className="flex justify-center mb-4" ref={qrRef}>
                          <QRCodeSVG value={generatedLink} size={128} />
                        </div>
                        <div className="flex justify-center space-x-4 mb-4">
                          <button
                            onClick={shareViaEmail}
                            className="p-2 bg-[#00E676] rounded-full text-white hover:bg-[#00BFA5] transition-colors duration-300"
                            aria-label="Share via Email"
                          >
                            <Mail className="h-5 w-5" />
                          </button>
                          <button
                            onClick={shareViaTelegram}
                            className="p-2 bg-[#00E676] rounded-full text-white hover:bg-[#00BFA5] transition-colors duration-300"
                            aria-label="Share via Telegram"
                          >
                            <Send className="h-5 w-5" />
                          </button>
                          <button
                            onClick={shareViaWhatsApp}
                            className="p-2 bg-[#00E676] rounded-full text-white hover:bg-[#00BFA5] transition-colors duration-300"
                            aria-label="Share via WhatsApp"
                          >
                            <Send className="h-5 w-5" />
                          </button>
                          <button
                            onClick={shareViaGitHub}
                            className="p-2 bg-[#00E676] rounded-full text-white hover:bg-[#00BFA5] transition-colors duration-300"
                            aria-label="Share via GitHub"
                          >
                            <Github className="h-5 w-5" />
                          </button>
                        </div>
                        <button
                          onClick={downloadQR}
                          className="w-full py-2 px-4 bg-[#00E676] text-white rounded-lg font-semibold hover:bg-[#00BFA5] transition-colors duration-300 flex items-center justify-center"
                        >
                          <Download className="h-5 w-5 mr-2" />
                          Download QR Code
                        </button>
                      </>
                    ) : (
                      <p className="text-sm text-red-700 dark:text-red-300 mb-2">
                        An error occurred while sending tokens. Please try
                        again.
                      </p>
                    )}
                    <button
                      onClick={() => setShowAlert(false)}
                      className="mt-4 w-full py-2 px-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                    >
                      OK
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Then>
          <Else>
            <div className="my-6 text-center">
              <ConnectWalletButton />
            </div>
          </Else>
        </If>
      </div>
    </div>
  )
}