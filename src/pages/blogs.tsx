import { useState } from "react";
import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(8); // Default number of visible posts

  // Separate pinned and non-pinned posts
  const pinnedPosts = posts.filter((post) => post.pinned);
  const otherPosts = posts.filter((post) => !post.pinned);

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 8);
  };

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200 pt-[5rem] pb-[7rem]">
      <h1 className="text-4xl font-extrabold mb-6 text-center pb-[1rem]">
        Breaking the Firewall Blog
      </h1>
      <p className="text-center text-lg max-w-3xl leading-relaxed pb-[5rem]">
        Welcome to <span className="font-bold">Breaking the Firewall Blog</span>
        , my personal <span className="font-bold">cybersecurity</span> learning
        blog.
        <br />
        <span className="font-bold">Pinned</span> posts are notable and I would
        suggest taking a look at them first.{" "}
        <span className="font-bold">New</span> posts are also recommended by me.
      </p>
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

        {/* Render Non-Pinned Posts */}
        {otherPosts.slice(0, visiblePosts).map((post) => (
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
      {/* Load more button */}
      {visiblePosts < otherPosts.length ? (
        <div className="mt-10">
          <button
            onClick={loadMorePosts}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition duration-300"
          >
            Load more
          </button>
        </div>
      ) : (
        /* Back to the Top Button */
        <div className="mt-10">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition duration-300"
          >
            Back to the top
          </button>
        </div>
      )}
    </div>
  );
}
