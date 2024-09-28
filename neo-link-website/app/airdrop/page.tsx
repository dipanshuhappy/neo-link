'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Moon, Sun, Upload, Trash, Copy, ExternalLink, Send } from "lucide-react"
import { v4 as uuidv4 } from 'uuid'
import Papa from 'papaparse'

type AirdropLink = {
  id: string
  email: string
  amount: string
  token: string
  chain: string
  url: string
}

type Chain = 'Neo' | 'Ethereum'
type Token = 'NEO' | 'GAS' | 'ETH' | 'USDC'

export default function AirdropPage() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [links, setLinks] = useState<AirdropLink[]>([])
  const [amount, setAmount] = useState('')
  const [selectedToken, setSelectedToken] = useState<Token>('NEO')
  const [selectedChain, setSelectedChain] = useState<Chain>('Neo')
  const [numUsers, setNumUsers] = useState('')
  const [emails, setEmails] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  const handleBackClick = () => {
    router.push('/')
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      Papa.parse(file, {
        complete: (results) => {
          const parsedEmails = results.data.flat().filter(email => email && typeof email === 'string' && email.includes('@'))
          setEmails(parsedEmails)
          setNumUsers(parsedEmails.length.toString())
        }
      })
    }
  }

  const generateLinks = () => {
    if (amount && selectedToken && selectedChain && (parseInt(numUsers) > 0 || emails.length > 0)) {
      const newLinks: AirdropLink[] = (emails.length > 0 ? emails : Array(parseInt(numUsers)).fill('')).map(email => ({
        id: uuidv4(),
        email,
        amount,
        token: selectedToken,
        chain: selectedChain,
        url: `https://neolinks.com/claim/${uuidv4()}`
      }))
      setLinks(newLinks)
    }
  }

  const removeLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const sendLinks = () => {
    // Here you would implement the logic to send the links to the respective emails
    console.log('Sending links to emails:', links)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <button
                onClick={handleBackClick}
                className="mr-2 text-gray-600 dark:text-gray-300 hover:text-[#00E676] transition-colors duration-300"
                aria-label="Go back to home page"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] via-[#1DE9B6] to-[#00BFA5]">
                Create Airdrop
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
          
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create airdrop links to distribute tokens to your users. You can specify the number of users or import a CSV file with email addresses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Amount per User
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-3 py-2 rounded-md border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label htmlFor="token" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Token
                </label>
                <select
                  id="token"
                  value={selectedToken}
                  onChange={(e) => setSelectedToken(e.target.value as Token)}
                  className="w-full px-3 py-2 rounded-md border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  <option value="NEO">NEO</option>
                  <option value="GAS">GAS</option>
                  <option value="ETH">ETH</option>
                  <option value="USDC">USDC</option>
                </select>
              </div>
              <div>
                <label htmlFor="chain" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Chain
                </label>
                <select
                  id="chain"
                  value={selectedChain}
                  onChange={(e) => setSelectedChain(e.target.value as Chain)}
                  className="w-full px-3 py-2 rounded-md border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  <option value="Neo">Neo</option>
                  <option value="Ethereum">Ethereum</option>
                </select>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="numUsers" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Number of Users
                </label>
                <input
                  type="number"
                  id="numUsers"
                  value={numUsers}
                  onChange={(e) => setNumUsers(e.target.value)}
                  placeholder="Enter number of users"
                  className="w-full px-3 py-2 rounded-md border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label htmlFor="csvUpload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Import User Emails (CSV)
                </label>
                <input
                  type="file"
                  id="csvUpload"
                  accept=".csv"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full px-3 py-2 rounded-md border-2 border-[#00E676] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Upload className="h-5 w-5 mr-2" />
                  Upload CSV
                </button>
              </div>
            </div>
            <motion.button
              onClick={generateLinks}
              className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Generate Links and Send
            </motion.button>
          </div>

          {links.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Generated Airdrop Links</h2>
              <div className="max-h-60 overflow-y-auto">
                {links.map((link) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-between mb-2"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {link.email || 'Anonymous User'} - {link.amount} {link.token} on {link.chain}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{link.url}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => copyToClipboard(link.url)}
                        className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300"
                        aria-label="Copy link"
                      >
                        <Copy className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </button>
                      <button
                        onClick={() => removeLink(link.id)}
                        className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300"
                        aria-label="Remove link"
                      >
                        <Trash className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </button>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300"
                        aria-label="Open link"
                      >
                        <ExternalLink className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                onClick={sendLinks}
                className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="h-5 w-5 mr-2" />
                Send Links to Emails
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}