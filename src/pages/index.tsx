import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

export default function Index() {
  // Filter the first 4 posts (1-4) and only show them in the front page.
  const firstFourPosts = posts.slice(0, 4);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-purple-900 text-white dark:from-gray-900 dark:via-black dark:to-purple-800 dark:text-gray-200 pt-[7rem] pb-[10rem]">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Welcome to my Cybersecurity Blog
      </h1>
      <p className="text-center text-lg max-w-2xl">
        Below are the top 4 blog posts. All of the blogs can be found{" "}
        <Link
          href="/blogs"
          className="underline text-blue-300 hover:text-blue-500"
        >
          here
        </Link>
        .
      </p>

      {/* Add the image */}
      <div className="my-6">
        <Image
          src="/logo2.png"
          alt="Cyber Blog Logo"
          width={600}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {firstFourPosts.map((post) => (
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
