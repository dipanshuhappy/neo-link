'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
  Zap,
  Link,
  Mail,
  Phone,
  User,
  Wallet,
  ArrowLeft,
  Upload,
  Plus,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react"
import { ConnectWalletButton } from "./NavBar"
import { useAccount, useChainId } from "wagmi"
import { Case, Default, Else, If, Switch, Then } from "react-if"
import {
  generateKeyFromString,
  getChain,
  getLinkForNativeToken,
  getRandomString,
  ValidChainId,
} from "@/lib/utils"
import { useWriteNeoLinkMakeCustomDeposit } from "@/lib/smart-contract"
import { NULL_ADDRESS } from "@/lib/constants"
import { TailSpin } from "react-loader-spinner"
import dynamic from 'next/dynamic'

const Confetti = dynamic(() => import('react-confetti'), { ssr: false })

type Token = "NEO" | "GAS" | "ETH" | "USDC"

type AssetType = "Token" | "NFT" | string

function SendAmount({
  amount,
  setAmount,
  nftAddress,
  selectedAsset,
  setNftAddress,
  setSelectedAsset,
  setTokenAddress,
  tokenAddress,
  setNftId,
  nftId,
}: {
  amount: string
  setAmount: React.Dispatch<React.SetStateAction<string>>
  selectedAsset: AssetType
  setSelectedAsset: React.Dispatch<React.SetStateAction<AssetType>>
  tokenAddress: string
  setTokenAddress: React.Dispatch<React.SetStateAction<string>>
  nftAddress: string
  setNftAddress: React.Dispatch<React.SetStateAction<string>>
  nftId: string
  setNftId: React.Dispatch<React.SetStateAction<string>>
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
              {([symbol, "Token", "NFT"] as AssetType[]).map((token) => (
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
        </Case>
        <Case condition={selectedAsset === "NFT"}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              NFT Address
            </label>
            <div className="relative">
              <input
                type="text"
                value={nftAddress}
                onChange={(e) => setNftAddress(e.target.value)}
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
              NFT Id
            </label>
            <div className="relative">
              <input
                type="text"
                value={nftId}
                onChange={(e) => setNftId(e.target.value)}
                placeholder="1"
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
  const [sendMethod, setSendMethod] = useState<"link" | "direct">("link")
  const [recipientType, setRecipientType] = useState<
    "email" | "phone" | "ens" | "wallet"
  >("email")
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const chainId = useChainId()
  const chain = getChain(chainId as ValidChainId)

  const symbol = getChain(chainId as ValidChainId).nativeCurrency.symbol
  const [selectedAsset, setSelectedAsset] = useState<AssetType>(symbol)
  const [tokenAddress, setTokenAddress] = useState<string>("")
  const [nftAddress, setNftAddress] = useState<string>("")
  const [nftId, setNftId] = useState<string>("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { writeContractAsync: deposit } = useWriteNeoLinkMakeCustomDeposit()

  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const { address } = useAccount()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      console.log(
        "Sending",
        amount,
        selectedAsset,
        "on",
        chain.name,
        "to",
        recipient,
        "via",
        sendMethod
      )
      if (!address) {
        alert("Please connect your wallet")
        return
      }

      if (parseFloat(amount) < 0) {
        alert("Please enter a valid amount")
        return
      }

      const finalAmount = parseInt(
        (parseFloat(amount) * 10 ** chain.nativeCurrency.decimals).toString()
      )
      const seed = await getRandomString(16)
      let txHash = ""

      if (selectedAsset === symbol) {
        txHash = await deposit({
          args: [
            NULL_ADDRESS,
            0,
            BigInt(finalAmount),
            BigInt(0),
            generateKeyFromString(seed).address,
            address,
            false,
            NULL_ADDRESS,
            0,
            false,
            NULL_ADDRESS,
          ],
          value: BigInt(finalAmount),
        })
      } else if (selectedAsset === "Token") {
        alert("Token transfers not yet implemented")
        return
      } else if (selectedAsset === "NFT") {
        alert("NFT transfers not yet implemented")
        return
      }

      if (sendMethod === "link") {
        const url = await getLinkForNativeToken({
          address: address,
          txHash: txHash,
          url: `${window.location.origin}/claim`,
          seed: seed,
          chainId:chainId.toString()
        })
        alert(url)
      }

      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 5000) // Hide confetti after 5 seconds
    } catch (error) {
      console.error("Error sending tokens:", error)
      alert("An error occurred while sending tokens. Please try again.")
    } finally {
      setIsLoading(false)
    }
    if (selectedAsset === "Token") {
      alert("not yet implemented");
      return;
    }
    if (selectedAsset === "NFT") {
      alert("not yet implemented");
      return;
    }


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleBackClick = () => {
    router.push("/")
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
                    // onClick={handleBackClick}
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
                  // onClick={toggleDarkMode}
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
                Transfer tokens via link or to an email, phone number, ENS, or
                wallet address.
              </p>
              <div className="flex mb-6">
                <button
                  className={`flex-1 py-2 px-4 rounded-l-lg font-medium transition-colors duration-300 ${
                    sendMethod === "link"
                      ? "bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setSendMethod("link")}
                >
                  Send via link
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-r-lg font-medium transition-colors duration-300 ${
                    sendMethod === "direct"
                      ? "bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setSendMethod("direct")}
                >
                  Send directly
                </button>
              </div>

              <form onSubmit={handleSend}>
                {sendMethod === "link" ? (
                  <SendAmount
                    nftAddress={nftAddress}
                    selectedAsset={selectedAsset}
                    setNftAddress={setNftAddress}
                    setSelectedAsset={setSelectedAsset}
                    setTokenAddress={setTokenAddress}
                    amount={amount}
                    setAmount={setAmount}
                    nftId={nftId}
                    setNftId={setNftId}
                    tokenAddress={tokenAddress}
                  />
                ) : (
                  <>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        To:
                      </label>
                      <div className="flex mb-2">
                        <button
                          type="button"
                          onClick={() => setRecipientType("email")}
                          className={`flex-1 py-2 px-3 text-xs font-medium rounded-l-lg transition-colors duration-300 ${
                            recipientType === "email"
                              ? "bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white"
                              : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          <Mail className="h-4 w-4 mx-auto" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setRecipientType("phone")}
                          className={`flex-1 py-2 px-3 text-xs font-medium transition-colors duration-300 ${
                            recipientType === "phone"
                              ? "bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white"
                              : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          <Phone className="h-4 w-4 mx-auto" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setRecipientType("ens")}
                          className={`flex-1 py-2 px-3 text-xs font-medium transition-colors duration-300 ${
                            recipientType === "ens"
                              ? "bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white"
                              : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          <User className="h-4 w-4 mx-auto" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setRecipientType("wallet")}
                          className={`flex-1 py-2 px-3 text-xs font-medium rounded-r-lg transition-colors duration-300 ${
                            recipientType === "wallet"
                              ? "bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white"
                              : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          <Wallet className="h-4 w-4 mx-auto" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder={`Enter ${recipientType}`}
                        className="w-full px-4 py-2 rounded-lg border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />

                      <SendAmount
                        nftAddress={nftAddress}
                        selectedAsset={selectedAsset}
                        setNftAddress={setNftAddress}
                        setSelectedAsset={setSelectedAsset}
                        setTokenAddress={setTokenAddress}
                        amount={amount}
                        setAmount={setAmount}
                        nftId={nftId}
                        setNftId={setNftId}
                        tokenAddress={tokenAddress}
                      />
                    </div>
                  </>
                )}

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
                    sendMethod === "link" ? "Create Link" : "Send Tokens"
                  )}
                </motion.button>
              </form>
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