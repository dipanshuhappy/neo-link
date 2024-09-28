import { motion } from 'framer-motion'

export default function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      className="flex flex-col items-center space-y-2 p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="p-3 bg-gradient-to-br from-[#00E676] to-[#00BFA5] rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00E676] to-[#00BFA5]">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
        {description}
      </p>
    </motion.div>
  )
}