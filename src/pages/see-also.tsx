export default function SeeAlso() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200 pt-[5rem] pb-[7rem]">
      <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow-md">
        Recommended Resources
      </h1>
      <p className="text-center text-lg max-w-2xl">
        Explore essential tools, guides, and resources to enhance your knowledge
        and skills in cybersecurity. (Contains external links.)
      </p>
      <p className="text-center text-md max-w-3xl mt-4">
        For a comprehensive overview of cybersecurity principles, visit{" "}
        <a
          href="https://www.cybersecurity.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-300 hover:text-blue-500"
        >
          Cybersecurity.gov
        </a>
        , where you&apos;ll find valuable resources to get started.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Cybersecurity Tools</h2>
          <p className="text-sm">
            Discover tools for vulnerability scanning, network monitoring, and
            incident response.
          </p>
          <a
            href="https://owasp.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-500 hover:underline"
          >
            Visit OWASP Tools
          </a>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Threat Intelligence</h2>
          <p className="text-sm">
            Stay updated with the latest threats and trends in cybersecurity.
          </p>
          <a
            href="https://threatintelligence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-500 hover:underline"
          >
            Explore Threat Intelligence
          </a>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Online Courses</h2>
          <p className="text-sm">
            Learn cybersecurity fundamentals and advanced techniques from
            trusted platforms.
          </p>
          <a
            href="https://www.coursera.org/browse/computer-science/cybersecurity"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-500 hover:underline"
          >
            Browse Cybersecurity Courses
          </a>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Industry Standards</h2>
          <p className="text-sm">
            Familiarize yourself with key standards like ISO 27001 and NIST
            guidelines.
          </p>
          <a
            href="https://www.iso.org/isoiec-27001-information-security.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-500 hover:underline"
          >
            Learn About ISO 27001
          </a>
        </div>
      </div>
    </div>
  );
}
