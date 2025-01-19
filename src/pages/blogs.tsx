import { useState } from "react";
import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(8); // Default total visible posts
  const [sortOption, setSortOption] = useState("new"); // Default sort option is "new"

  // Function to sort posts based on the selected option
  const sortedPosts = [...posts].sort((a, b) => {
    // Apply date sorting independently, ignoring pinned
    if (sortOption === "date") {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    }

    // Always prioritize pinned posts for other cases
    if (a.pinned && !b.pinned) return -1; // a is pinned, b is not
    if (!a.pinned && b.pinned) return 1; // b is pinned, a is not

    // Apply additional sorting based on the selected option
    switch (sortOption) {
      case "new":
        // Sort by 'new' (true first), then by date (most recent first)
        if (b.new !== a.new) return (b.new ? 1 : 0) - (a.new ? 1 : 0);
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      default:
        // Default behavior (no further sorting, maintain relative order)
        return 0;
    }
  });

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
      <p className="text-center text-lg max-w-3xl leading-relaxed pb-[2rem]">
        Welcome to <span className="font-bold">Breaking the Firewall Blog</span>
        , my personal <span className="font-bold">cybersecurity</span> learning
        blog.
        <br />
        <span className="font-bold">Pinned</span> posts are notable and I would
        suggest taking a look at them first.{" "}
        <span className="font-bold">New</span> posts are also recommended by me.
      </p>
      <div className="w-full max-w-4xl mb-4 flex justify-end">
        {/* Sort By Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 dark:bg-gray-700 dark:text-white"
        >
          <option value="new">Sort by Featured</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Render Sorted Posts */}
        {sortedPosts.slice(0, visiblePosts).map((post) => (
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
      {visiblePosts < posts.length ? (
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
