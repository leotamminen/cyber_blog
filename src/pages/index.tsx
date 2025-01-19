import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

export default function Index() {
  const pinnedPosts = posts.filter((post) => post.pinned === true);
  const otherPosts = posts.filter((post) => !post.pinned);

  const [visibleOtherPosts, setVisibleOtherPosts] = useState(0); // Initially no other posts visible

  const loadMorePosts = () => {
    setVisibleOtherPosts((prev) => Math.min(prev + 4, otherPosts.length));
  };

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-purple-900 text-white dark:from-gray-900 dark:via-black dark:to-purple-800 dark:text-gray-200 pt-[7rem] pb-[10rem]">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Welcome to my Cybersecurity Blog
      </h1>
      <p className="text-center text-lg max-w-2xl">
        Below are the pinned blog posts. All of the blogs can be found{" "}
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
        {/* Render Pinned Posts */}
        {pinnedPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            tags={post.tags}
            date={post.date}
            summary={post.summary}
            author={post.author}
            new={post.new}
            pinned={post.pinned}
          />
        ))}

        {/* Render Other Posts */}
        {otherPosts.slice(0, visibleOtherPosts).map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            tags={post.tags}
            date={post.date}
            summary={post.summary}
            author={post.author}
            new={post.new}
            pinned={post.pinned}
          />
        ))}
      </div>

      {/* Load More or Back to the Top Button */}
      <div className="mt-10">
        {visibleOtherPosts < otherPosts.length ? (
          <button
            onClick={loadMorePosts}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition duration-300"
          >
            Load more
          </button>
        ) : (
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition duration-300"
          >
            Back to the top
          </button>
        )}
      </div>
    </div>
  );
}
