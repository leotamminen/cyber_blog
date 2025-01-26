import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { BlogPost } from "@/types/types";
import "../styles/globals.css";

export default function Index() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog posts when the page loads
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Make a request to the API to get posts
        const response = await fetch("/api/posts");
        if (!response.ok) {
          // Throw a fancy error message if the API request fails (added contact support).
          throw new Error(
            "Could not load blog posts from the database. Please try again later. If this error persists, contact support."
          );
        }
        // Convert the response to JSON and save the posts
        const data = await response.json();
        setPosts(data);
      } catch (error: unknown) {
        // Handle any errors that occur during the fetch
        if (error instanceof Error) {
          console.error("Error fetching posts:", error.message);
          // Set a detailed error message with a link
          setError(
            "Could not load blog posts from the database. Please try again later. If this error persists, contact " +
              '<a href="/support" class="underline text-blue-500 hover:text-blue-700">support</a>.'
          );
        } else {
          console.error("An unexpected error occurred:", error);
          setError("An unexpected error occurred.");
        }
      } finally {
        // Set loading to false whether the request succeeded or failed
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Sort posts: pinned first, then new posts, then by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    if (b.pinned !== a.pinned) return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
    if (b.new !== a.new) return (b.new ? 1 : 0) - (a.new ? 1 : 0);
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  // Show 4 more posts when "Load more" is clicked
  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 4, sortedPosts.length));
  };

  // Scroll back to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="general-container general-container-pt general-container-pb">
      {/* Page title */}
      <h1 className="general-title">Welcome to my Cybersecurity Blog</h1>

      {/* Introduction */}
      <p className="general-text max-width">
        Breaking the Firewall is my personal blog where I update my journey
        learning cybersecurity. I created the site with Next.js and TypeScript.
        The real focus is on the blog posts, where I used most of my effort. I
        can update the posts as my knowledge grows. My knowledge is mostly from
        university courses and my own experiments, plus online research. Please
        be respectful and do not copy-paste my work without mentioning where
        it’s from.
        <br />
        Below are the featured and newest blog posts where I recommend taking a
        look first. All blogs can be found{" "}
        <Link href="/blogs" className="general-link">
          here
        </Link>
        .
      </p>

      {/* AI generated Breaking the firewall logo */}
      <div className="my-6">
        <Image
          src="/logo2.png"
          alt="Cyber Blog Logo"
          width={600}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Show blog posts if not loading and no error */}
      {!loading && !error && (
        <div className="grid-layout">
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
      )}

      {/* Show loader if data is still loading */}
      {loading && (
        <div className="general-loader-wrapper">
          <div className="loader"></div>
        </div>
      )}

      {/* Show error message if there's an error */}
      {!loading && error && (
        <div className="general-loader-wrapper">
          <p
            className="text-red-500"
            dangerouslySetInnerHTML={{ __html: error }}
          ></p>
        </div>
      )}

      {/* Show buttons if not loading and no error */}
      {!loading && !error && (
        <div className="general-button-wrapper">
          {visiblePosts < sortedPosts.length ? (
            // Button to load more posts
            <button onClick={loadMorePosts} className="general-button">
              Load more
            </button>
          ) : (
            // Button to scroll back to the top
            <button onClick={scrollToTop} className="general-button">
              Back to the top
            </button>
          )}
        </div>
      )}
    </div>
  );
}
