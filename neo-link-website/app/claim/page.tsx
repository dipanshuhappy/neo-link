"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Moon, Sun, Gift, Check } from "lucide-react";
import { ConnectWalletButton } from "@/components/NavBar";
import { useAccount } from "wagmi";
import { Else, If, Then } from "react-if";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { encodeFunctionData } from "viem";
import {
  generateKeyFromString,
  isAmountWithdrawEmpty,
  signWithdrawalMessage,
} from "@/lib/utils";
import { neoLinkAbi, neoLinkAddress } from "@/lib/smart-contract";
import { TailSpin } from "react-loader-spinner";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function EnhancedClaimPage() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGaslessClaim, setIsGaslessClaim] = useState(true);
  const [evmAddress, setEvmAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const searchParams = useSearchParams();

  const handleClaim = async () => {
    setIsLoading(true);
    try {
      console.log(
        "Claiming assets",
        isGaslessClaim ? "gaslessly" : "with gas",
        "for address:",
        evmAddress
      );

      const chainId = searchParams.get("c");
      const seed = searchParams.get("s");
      const depositId = searchParams.get("i");
      if (!chainId || !seed || !depositId) {
        throw new Error("Invalid URL");
      }
      const vaultAddress =
        neoLinkAddress[parseInt(chainId) as keyof typeof neoLinkAddress];

      if (!evmAddress) {
        throw new Error("Please enter your EVM address");
      }
      if (!vaultAddress) {
        throw new Error("Vault address not found");
      }
      const { recipient, depositIdx, signature } = await signWithdrawalMessage(
        "1",
        chainId.toString(),
        vaultAddress,
        parseInt(depositId),
        evmAddress as `0x${string}`,
        generateKeyFromString(seed).privateKey,
        false
      );
      const data = encodeFunctionData({
        abi: neoLinkAbi,
        functionName: "withdrawDeposit",
        args: [BigInt(depositIdx), recipient, signature],
      });

      const response = await fetch("/api/send-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: vaultAddress,
          data,
          chainId: chainId,
        }),
      });

      if (!response.ok) {
        throw new Error("Error in transaction");
      }

      const res = await response.json();
      const isEmpty = await isAmountWithdrawEmpty({
        txHash: res.hash,
      });
      if (!isEmpty) {
        setAlertMessage(`Transaction sent: ${res.hash}`);
        setShowAlert(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
      } else {
        setAlertMessage(`This lottery link was empty , better luck next time`);
        setShowAlert(true);
      }
    } catch (err: any) {
      console.error("Error in claim:", err);
      setAlertMessage(err.message || "An error occurred while claiming assets");
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const { address } = useAccount();

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4">
      {showConfetti && <Confetti />}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
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
                Claim Assets
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
            Enter your EVM address and click the button below to claim your
            assets.
          </p>
          <div className="mb-6">
            <Label
              htmlFor="evmAddress"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              EVM Address
            </Label>
            <Input
              type="text"
              id="evmAddress"
              placeholder="Enter EVM address"
              value={evmAddress}
              onChange={(e) => setEvmAddress(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="gaslessClaim" checked={isGaslessClaim} />
              <Label
                htmlFor="gaslessClaim"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Claim gaslessly
              </Label>
            </div>
          </div>
          <motion.button
            onClick={handleClaim}
            className="w-full py-6 px-4 bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white rounded-lg font-bold text-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
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
              <>
                <Gift className="h-6 w-6" />
                <span>Claim Your Assets</span>
              </>
            )}
          </motion.button>

          <AnimatePresence>
            {showAlert && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 bg-green-100 dark:bg-green-800 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                  {alertMessage.startsWith("Transaction sent")
                    ? "Claim Successful!"
                    : "Claim Failed"}
                </h3>
                <a
                  href={`https://xt4scan.ngd.network/tx/${alertMessage.replace("Transaction sent: ", "")}`}
                  className="text-ns text-green-700 underline  dark:text-green-300 text-wrap"
                  target="_blank"
                >
                  explorer link
                </a>
                <button
                  onClick={() => setShowAlert(false)}
                  className="mt-4 w-full py-2 px-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <Check className="h-5 w-5 mr-2" />
                  OK
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
