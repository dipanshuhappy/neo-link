"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Moon, Sun, Gift } from "lucide-react";
import { ConnectWalletButton } from "@/components/NavBar";
import { useAccount } from "wagmi";
import { Else, If, Then } from "react-if";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function EnhancedClaimPage() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGaslessClaim, setIsGaslessClaim] = useState(true);
  const [evmAddress, setEvmAddress] = useState("");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleClaim = () => {
    console.log(
      "Claiming assets",
      isGaslessClaim ? "gaslessly" : "with gas",
      "for address:",
      evmAddress
    );
    // Add your claim logic here
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { address } = useAccount();

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4">
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
              <Checkbox
                id="gaslessClaim"
                checked={isGaslessClaim}
                onCheckedChange={(checked) =>
                  setIsGaslessClaim(checked as boolean)
                }
              />
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
          >
            <Gift className="h-6 w-6" />
            <span>Claim Your Assets</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
