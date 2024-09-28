'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, User, MessageCircle, ChevronDown } from "lucide-react"
import Header from '../components/Header'
import FeatureCard from '../components/FeatureCard'
import NewsletterForm from '../components/NewsletterForm'
import Footer from '../components/Footer'

export default function NeoLinksLanding() {
  const [theme, setTheme] = useState('light')
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const teamMembers = [
    { name: "Mohammad Mudassir", role: "Blockchain Developer", description: "Mudassir is an expert in smart contract development and blockchain architecture." },
    { name: "Dipanshu Singh", role: "Blockchain Developer", description: "Dipanshu specializes in creating intuitive and engaging user experiences for blockchain applications." }
  ]

  const faqItems = [
    { question: "What is NeoLinks?", answer: "NeoLinks is a next-gen blockchain protocol designed for seamless token transfers, social auth gating, and community engagement." },
    { question: "How does social auth gatekeeping work?", answer: "Social auth gatekeeping allows you to secure your tokens by requiring users to authenticate through their social media accounts before claiming or accessing certain features." },
    { question: "Can I receive payments in different cryptocurrencies?", answer: "Yes, NeoLinks allows you to receive payments in your preferred cryptocurrency, providing flexibility for both senders and receivers." },
    { question: "What are raffle links?", answer: "Raffle links are a feature that allows you to create exciting community engagement opportunities through randomized token or NFT distributions." }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container px-4 md:px-6 mx-auto text-center"
          >
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] via-[#1DE9B6] to-[#00BFA5]">
                Welcome to NeoLinks
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                The next-gen blockchain protocol for seamless token transfers, social auth gating, and community engagement.
              </p>
              <div className="space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-6 py-3 border-2 border-[#00E676] text-[#00E676] rounded-full font-semibold hover:bg-[#00E676] hover:text-white transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] via-[#1DE9B6] to-[#00BFA5]"
            >
              Key Features
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center"
            >
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-[#dfe7e3]" />}
                title="Send Any Token or NFT"
                description="Transfer any token or NFT using simple, shareable links."
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-[#dfe7e3]" />}
                title="Raffle Links & Lottery"
                description="Boost community engagement with exciting raffle and lottery features."
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-[#dfe7e3]" />}
                title="Social Auth Gatekeeping"
                description="Secure your tokens with social authentication during claims."
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-[#dfe7e3]" />}
                title="Receive in Your Favorite Token"
                description="Get paid in the cryptocurrency of your choice."
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-[#dfe7e3]" />}
                title="Batch Link Generation"
                description="Create multiple links at once for efficient airdrops and mass distribution."
              />
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container px-4 md:px-6 mx-auto text-center"
          >
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] via-[#1DE9B6] to-[#00BFA5]">
                Join Our Community
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                Be part of the NeoLinks revolution. Sign up for our newsletter to get the latest updates and early access.
              </p>
              <NewsletterForm />
            </div>
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] via-[#1DE9B6] to-[#00BFA5]"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="mb-4"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                      <span className="text-lg font-semibold">{item.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown className="h-5 w-5 text-[#00E676]" />
                      </span>
                    </summary>
                    <p className="text-gray-600 dark:text-gray-300 mt-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                      {item.answer}
                    </p>
                  </details>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] via-[#1DE9B6] to-[#00BFA5]"
            >
              Meet Our Team
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-10 md:grid-cols-2 justify-items-center"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="flex flex-col items-center space-y-4 text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00E676] to-[#00BFA5] flex items-center justify-center">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-[#00E676] font-medium">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md">{member.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}