export default function Learn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 drop-shadow-md">Learn</h1>
      <p className="text-center text-lg max-w-2xl">
        Welcome to the Learning Hub of Breaking the Firewall! This section is
        dedicated to sharing knowledge, insights, and practical guides in the
        field of cybersecurity.
      </p>

      <p className="text-center text-lg max-w-2xl mt-4">
        Explore articles, tutorials, and resources designed to help you
        understand complex concepts, improve your skills, and stay ahead in the
        dynamic world of cybersecurity. Whether you&apos;re a beginner or an
        advanced learner, there&apos;s something here for everyone.
      </p>

      <p className="text-center text-lg max-w-2xl mt-4">
        From ethical hacking to network security, application security, and
        understanding the psychology behind cyberattacks, this is your go-to
        resource for continuous learning and growth.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Beginner Guides</h2>
          <p className="text-sm">
            Learn the fundamentals of cybersecurity, including essential tools,
            terminologies, and practices.
          </p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Advanced Techniques</h2>
          <p className="text-sm">
            Dive into advanced topics like IDS/IPS, ethical hacking, and secure
            system design.
          </p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Practical Labs</h2>
          <p className="text-sm">
            Hands-on labs to practice and apply your knowledge in a controlled
            environment.
          </p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-xl font-bold mb-2">Emerging Threats</h2>
          <p className="text-sm">
            Stay updated with the latest trends and emerging threats in
            cybersecurity.
          </p>
        </div>
      </div>
    </div>
  );
}
