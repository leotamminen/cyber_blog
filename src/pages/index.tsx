import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

export default function Index() {
  // Sort posts: Pinned first, then "new", then by date (most recent first)
  const sortedPosts = [...posts].sort((a, b) => {
    // Prioritize pinned posts
    if (b.pinned !== a.pinned) return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);

    // Sort by 'new' (true first)
    if (b.new !== a.new) return (b.new ? 1 : 0) - (a.new ? 1 : 0);

    // Sort by date (most recent first)
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  const [visiblePosts, setVisiblePosts] = useState(4); // Initially show 4 posts

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 4, sortedPosts.length));
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
        Breaking the Firewall is my personal blog where update my journey
        learning cybersecurity. I created the site with Next.js and TypeScript.
        The real focus is on the blog posts, where I used most of my effort. I
        can update the posts as my knowledge grows. My knowledge is mostly from
        university courses and my own experiments, plus online research. Please
        be respectful and do not copy paste my work without mentioning where
        it’s from. <br /> That said, I am hoping to inspire others and many of
        the blog posts are made in a way that they are kind of like a tutorials
        where it is possible to follow along.
        <br />
        <br />
        Below are the featured and newest blog posts where I recommend to taking
        a look first. All of the blogs can be found{" "}
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

      {/* Load More or Back to the Top Button */}
      <div className="mt-10">
        {visiblePosts < sortedPosts.length ? (
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
