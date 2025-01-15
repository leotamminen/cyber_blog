export default function Support() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200 pt-[5rem] pb-[7rem]">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Support</h1>
      <p className="text-center text-lg max-w-2xl">
        Welcome to the Support page! Find help, resources, and guidance to
        navigate the world of cybersecurity effectively.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">FAQs</h2>
          <p className="text-sm">
            Find answers to common questions about cybersecurity, protecting
            your data, and using security tools.
          </p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-sm">
            Need help? Reach out to our support team for personalized assistance
            with cybersecurity issues.
          </p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Tutorials</h2>
          <p className="text-sm">
            Step-by-step guides to help you secure your systems and learn best
            practices in cybersecurity.
          </p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Community</h2>
          <p className="text-sm">
            Join our community and connect with others passionate about
            cybersecurity and digital safety.
          </p>
        </div>
      </div>
    </div>
  );
}
