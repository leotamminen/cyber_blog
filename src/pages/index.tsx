import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

export default function Index() {
  // Filter the first 4 posts (1-4) and only show them on the front page.
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

      {/* Blog Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {firstFourPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            tags={post.tags}
            date={post.date}
            summary={post.summary}
            author={post.author}
          />
        ))}
      </div>
    </div>
  );
}
