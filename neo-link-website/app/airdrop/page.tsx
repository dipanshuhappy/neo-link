'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Gift, Link as LinkIcon, Twitter, Moon, Sun, ChevronDown, Home } from "lucide-react"
import Link from "next/link"

export default function AirdropPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [email, setEmail] = useState("")
  const [isNotified, setIsNotified] = useState(false)
  const [isHomeHovered, setIsHomeHovered] = useState(false)

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

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsNotified(true)
      setTimeout(() => setIsNotified(false), 3000)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-4xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden relative">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] to-[#00C853]">
              Airdrop Revolution
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Coming Soon: Token Distribution Reimagined
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Get ready for a game-changing way to distribute tokens. Our upcoming airdrop feature will revolutionize how you send tokens using customized links.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  What to Expect
                </h3>
                <ul className="space-y-2">
                  {[
                    { icon: LinkIcon, text: "Generate unique claim links" },
                    { icon: Twitter, text: "Seamless Twitter integration" },
                    { icon: Zap, text: "Instant token transfers" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <item.icon className="w-5 h-5 text-[#00E676]" />
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <form onSubmit={handleNotify} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00E676] to-[#00C853] hover:from-[#00C853] hover:to-[#00E676] text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Notify Me When It's Live
                </button>
              </form>
              <AnimatePresence>
                {isNotified && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-[#00E676] font-semibold"
                  >
                    Thanks! We'll keep you updated.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00E676]/20 to-[#00C853]/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Gift className="w-48 h-48 text-[#00E676]" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Zap className="w-24 h-24 text-yellow-400" />
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >

          </motion.div>
        </div>
        <Link href="/">
          <motion.div
            className="absolute bottom-8 left-8 flex items-center space-x-2 bg-gradient-to-r from-[#00E676] to-[#00C853] text-white px-4 py-2 rounded-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHomeHovered(true)}
            onHoverEnd={() => setIsHomeHovered(false)}
          >
            <Home className="w-5 h-5" />
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: isHomeHovered ? "auto" : 0, opacity: isHomeHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden whitespace-nowrap"
            >
              Go Back Home
            </motion.span>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}