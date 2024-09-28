import { Zap } from "lucide-react"
import NextLink from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-white dark:bg-gray-800 border-t transition-colors duration-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Zap className="h-6 w-6 text-[#00E676]" />
            <span className="font-bold text-[#00E676]">NeoLinks</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <NextLink className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-[#00E676] transition-colors" href="#">
              Terms of Service
            </NextLink>
            <NextLink className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-[#00E676] transition-colors" href="#">
              Privacy Policy
            </NextLink>
            <NextLink className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-[#00E676] transition-colors" href="#">
              Contact Us
            </NextLink>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024 NeoLinks. All rights reserved.
        </div>
      </div>
    </footer>
  )
}