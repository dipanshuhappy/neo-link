'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Moon, Sun, Zap, ChevronDown } from "lucide-react"

type Chain = 'Neo' | 'Ethereum'

export default function RafflePage() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedChain, setSelectedChain] = useState<Chain>('Neo')
  const [ethAmount, setEthAmount] = useState('')
  const [numSlots, setNumSlots] = useState('')
  const [displayName, setDisplayName] = useState('')

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode')
    setIsDarkMode(darkModePreference === 'true')
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const handleBackClick = () => {
    router.push('/')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Creating raffle:', { selectedChain, ethAmount, numSlots, displayName })
    // Here you would typically send this data to your backend or smart contract
  }

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
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Engage and reward your community with a raffle give-away. Simply fill out the form and you will receive a link that you can share.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="chain" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Chain
              </label>
              <div className="relative">
                <select
                  id="chain"
                  value={selectedChain}
                  onChange={(e) => setSelectedChain(e.target.value as Chain)}
                  className="w-full appearance-none bg-white dark:bg-gray-700 border-2 border-[#00E676] text-gray-700 dark:text-gray-200 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300"
                >
                  <option value="Neo">Neo</option>
                  <option value="Ethereum">Ethereum</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="ethAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                $ETH Amount *
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="ethAmount"
                  value={ethAmount}
                  onChange={(e) => setEthAmount(e.target.value)}
                  placeholder="100"
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Zap className="h-5 w-5 text-[#00E676]" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="numSlots" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                № of Slots *
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
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Display Name
              </label>
              <input
                type="text"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Chad"
                className="w-full px-4 py-2 rounded-lg border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect Wallet
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  )
}