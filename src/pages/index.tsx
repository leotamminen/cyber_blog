import Image from "next/image";
import Link from "next/link";

// These styles should ideally be moved to a separate file...

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-200">
      <Image
        className="dark:invert drop-shadow-lg"
        src="/logo.png"
        alt="Breaking the Firewall logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-4xl font-extrabold mt-8 drop-shadow-md">
        Welcome to Breaking the Firewall!
      </h1>
      <p className="mt-4 text-center text-lg max-w-lg">
        Welcome to my personal cybersecurity blog. Here, I share my learning
        journey, insights, and experiments in the fascinating world of
        cybersecurity. This blog is a place to document my progress and,
        hopefully, inspire others to explore this exciting field.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link href="/learn" legacyBehavior>
          <a className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 transition">
            Learn Cybersecurity
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 transition">
            What is this?
          </a>
        </Link>
      </div>
    </div>
  );
}
