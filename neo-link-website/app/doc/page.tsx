import { Button } from "@/components/ui/button"
import { Home, Search, Settings, HelpCircle, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DocPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/" passHref>
                            <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300 hover:text-[#00E676] dark:hover:text-[#00E676]">
                                <Home className="h-5 w-5" />
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Documentation</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                            <Settings className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                            <HelpCircle className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <div className="container mx-auto px-4 py-8 flex">
                {/* Sidebar */}
                <aside className="w-64 pr-8">
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <Button variant="ghost" className="w-full justify-start text-left text-gray-700 dark:text-gray-300 hover:text-[#00E676] dark:hover:text-[#00E676]">
                                    <Menu className="h-5 w-5 mr-2" />
                                    Table of Contents
                                </Button>
                            </li>
                            <li>
                                <Button variant="ghost" className="w-full justify-start text-left text-gray-700 dark:text-gray-300 hover:text-[#00E676] dark:hover:text-[#00E676]">
                                    Getting Started
                                </Button>
                            </li>
                            <li>
                                <Button variant="ghost" className="w-full justify-start text-left text-gray-700 dark:text-gray-300 hover:text-[#00E676] dark:hover:text-[#00E676]">
                                    Basic Concepts
                                </Button>
                            </li>
                            <li>
                                <Button variant="ghost" className="w-full justify-start text-left text-gray-700 dark:text-gray-300 hover:text-[#00E676] dark:hover:text-[#00E676]">
                                    Advanced Topics
                                </Button>
                            </li>
                            <li>
                                <Button variant="ghost" className="w-full justify-start text-left text-gray-700 dark:text-gray-300 hover:text-[#00E676] dark:hover:text-[#00E676]">
                                    API Reference
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main content area */}
                <main className="flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Welcome to Our Documentation</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Our comprehensive guide is currently <span style={{ color: "#00E676" }}>under development</span>. We're working hard to bring you detailed and helpful documentation. Stay tuned for updates!
                        </p>


                        <Button className="bg-gradient-to-r from-[#00E676] to-[#00BFA5] hover:from-[#00E676] hover:to-[#00BFA5] text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105">
                            Get Notified
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Quick Start Guide</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Learn the basics and get up and running with our platform in no time.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">API Documentation</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Detailed information about our API endpoints and how to use them effectively.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Updates</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-600 dark:text-gray-300">
                                <span className="w-20 text-sm text-gray-500 dark:text-gray-400">2023-09-15</span>
                                <span>Added new section on authentication</span>
                            </li>
                            <li className="flex items-center text-gray-600 dark:text-gray-300">
                                <span className="w-20 text-sm text-gray-500 dark:text-gray-400">2023-09-10</span>
                                <span>Updated API reference for v2.0</span>
                            </li>
                            <li className="flex items-center text-gray-600 dark:text-gray-300">
                                <span className="w-20 text-sm text-gray-500 dark:text-gray-400">2023-09-05</span>
                                <span>Improved examples in the Quick Start Guide</span>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}