"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Moon, Sun, Zap, ChevronDown } from "lucide-react";
import {
  generateKeyFromString,
  getChain,
  getLinksForRaffles,
  getRandomString,
  shuffleArray,
  ValidChainId,
} from "@/lib/utils";
import { useAccount, useChainId } from "wagmi";
import { Case, Default, Switch } from "react-if";
import WalletConnect from "@/components/NavBar";
import { neoLinkAddress } from "@/lib/smart-contract";
import { useWriteNeoLinkRaffleBatchMakeDepositRaffle } from "@/lib/smart-contract";
import { NULL_ADDRESS } from "@/lib/constants";

function RaffleAmount({
  amount,
  setAmount,
  selectedAsset,
  setSelectedAsset,
  setTokenAddress,
  tokenAddress,
}: {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  selectedAsset: string;
  setSelectedAsset: React.Dispatch<React.SetStateAction<string>>;
  tokenAddress: string;
  setTokenAddress: React.Dispatch<React.SetStateAction<string>>;
}) {
  const chainId = useChainId();

  const symbol = getChain(chainId as ValidChainId).nativeCurrency.symbol;
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
              onChange={(e) => setSelectedAsset(e.target.value as string)}
              className="w-full appearance-none bg-white dark:bg-gray-700 border-2 border-[#00E676] text-gray-700 dark:text-gray-200 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300"
            >
              {([symbol, "Token"] as string[]).map((token) => (
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
      {
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
                  placeholder="0.00"
                  className="w-full px-4 py-2 rounded-lg border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Zap className="h-5 w-5 text-[#00E676]" />
                </div>
              </div>
            </div>
          </Case>
          <Default>Enter Native Token Amount</Default>
        </Switch>
      }
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
            <Zap className="h-5 w-5 text-[#00E676]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default function RafflePage() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const chainId = useChainId();
  const chain = getChain(chainId as ValidChainId);
  const symbol = getChain(chainId as ValidChainId).nativeCurrency.symbol;
  const [selectedAsset, setSelectedAsset] = useState<string>(symbol);
  const [selectedChain, setSelectedChain] = useState<string>(chain.name);
  const [ethAmount, setEthAmount] = useState("");
  const [numSlots, setNumSlots] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [tokenAddress, setTokenAddress] = useState<string>("");
  const { address } = useAccount();

  const { writeContractAsync: createRaffles } =
    useWriteNeoLinkRaffleBatchMakeDepositRaffle();

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    setIsDarkMode(darkModePreference === "true");
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleBackClick = () => {
    router.push("/");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating raffle:", {
      selectedChain,
      ethAmount,
      numSlots,
      displayName,
    });

    if (!address) {
      alert("Please connect your wallet");
      return;
    }
    if (parseInt(numSlots) < 1) {
      alert("Invalid number of slots");
      return;
    }
    const vaultAddress = neoLinkAddress[chainId as keyof typeof neoLinkAddress];
    const seed = await getRandomString(16);
    if (!vaultAddress) {
      alert("Vault address not found");
      return;
    }
    if (selectedAsset === symbol) {
      const finalAmount = parseInt(
        (parseFloat(ethAmount) * 10 ** chain.nativeCurrency.decimals).toString()
      );
      const tx = await createRaffles({
        args: [
          vaultAddress as `0x${string}`,
          NULL_ADDRESS,
          0,
          shuffleArray<bigint>([
            ...Array(parseInt(numSlots) - 1).fill(BigInt(0)),
            BigInt(finalAmount),
          ]),
          generateKeyFromString(seed).address,
        ],
        value: BigInt(finalAmount),
      });

      const links = await getLinksForRaffles({
        txHash: tx,
        chainId: chainId.toString(),
        url: `${window.location.origin}/claim`,
        seed,
        amount: parseInt(numSlots),
      });
      console.log({ links });
      for (const link of links) {
        console.log({ link });
        alert(`Raffle created: ${link}`);
      }

      console.log({ tx });
    }

    // Here you would typically send this data to your backend or smart contract
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
                Create Raffle
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
            Engage and reward your community with a raffle give-away. Simply
            fill out the form and you will receive a link that you can share.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <RaffleAmount
                amount={ethAmount}
                setAmount={setEthAmount}
                selectedAsset={selectedAsset}
                setSelectedAsset={setSelectedAsset}
                tokenAddress={tokenAddress}
                setTokenAddress={setTokenAddress}
              />
            </div>
            <div>
              <label
                htmlFor="numSlots"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                № of Lottery Links
              </label>
              <input
                type="number"
                id="numSlots"
                value={numSlots}
                onChange={(e) => setNumSlots(e.target.value)}
                placeholder="5"
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              No fee
            </div>

            {address ? (
              <motion.button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Links
              </motion.button>
            ) : (
              <WalletConnect />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
