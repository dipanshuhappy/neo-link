import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, ChevronDown, Moon, Sun } from "lucide-react";
import NextLink from "next/link";
import { ConnectWalletButton } from "./NavBar";

const navItems = [
  { name: "Send", icon: Zap, href: "/send", external: false },
  { name: "Raffle", icon: Zap, href: "/raffle", external: false },
  { name: "Airdrop", icon: Zap, href: "/airdrop", external: false },
  { name: "Doc", icon: Zap, href: "/doc", external: false },  // External link
];

export default function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white dark:bg-gray-800 sticky top-0 z-50 transition-colors duration-300"
      >
        <NextLink className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 mr-2 text-[#00E676]" />
          <span className="font-bold text-[#00E676] text-xl">NeoLinks</span>
        </NextLink>
        <nav className="hidden md:flex gap-10">
          {navItems.map((item, index) => (
            <NextLink
              key={index}
              className="text-m font-medium hover:text-[#00E676] transition-colors flex items-center gap-1"
              href={item.href || "/"}
              // target="_blank"  // Open external link in a new tab
              rel="noopener noreferrer"  // Security best practice when opening in new tab 
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </NextLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button> 
          <ConnectWalletButton />
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-col items-center gap-4 py-4 bg-white dark:bg-gray-800 md:hidden transition-colors duration-300"
        >
          {navItems.map((item, index) => (
            <NextLink
              key={index}
              className="text-sm font-medium hover:text-[#00E676] transition-colors flex items-center gap-1"
              href="#"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </NextLink>
          ))}
        </motion.nav>
      )}
    </>
  );
}
