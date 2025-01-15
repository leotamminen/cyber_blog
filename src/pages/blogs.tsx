import Link from "next/link";
import { posts } from "@/data/posts";

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200 pt-[5rem] pb-[7rem]">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Breaking the Firewall Blog
      </h1>
      <p className="text-center text-lg max-w-2xl">
        Explore guides, tutorials, and articles on cybersecurity and technology.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="block p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition dark:bg-gray-700 dark:text-gray-200 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm">{post.summary}</p>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              <span className="font-semibold">Published:</span> {post.date}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
