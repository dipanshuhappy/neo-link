export default function NewsletterForm() {
    return (
      <div className="w-full max-w-md">
        <form className="flex flex-col sm:flex-row gap-2">
          <input
            className="flex-grow px-4 py-3 rounded-full border-2 border-[#00E676] focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent transition-all duration-300"
            placeholder="Enter your email"
            type="email"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-[#00E676] to-[#00BFA5] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    )
  }