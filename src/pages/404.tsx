import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200 pt-[5rem] pb-[7rem]">
      <h1 className="text-6xl font-extrabold mb-6">404</h1>
      <p className="text-2xl mb-4 text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="text-lg mb-8 text-center">
        You might have mistyped the address or the page may have moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-purple-500 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        Go Back Home
      </Link>
    </div>
  );
}
