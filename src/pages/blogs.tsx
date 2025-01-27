import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import "../styles/globals.css";
import { BlogPost } from "@/types/types";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(8);
  const [sortOption, setSortOption] = useState("new");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";
        const res = await fetch(`${baseURL}/api/posts`);

        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }

        const data = await res.json();
        setPosts(data);
      } catch (error: unknown) {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortOption === "date") {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    }

    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;

    if (sortOption === "new") {
      if (b.new !== a.new) return (b.new ? 1 : 0) - (a.new ? 1 : 0);
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    }

    return 0;
  });

  const loadMorePosts = () => setVisiblePosts((prev) => prev + 8);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="general-container general-container-pt general-container-pb">
      <div className="general-header">
        <h1 className="general-title">Breaking the Firewall Blog</h1>
        <p className="general-description">
          Welcome to{" "}
          <span className="general-highlight">Breaking the Firewall Blog</span>,
          my personal <span className="general-highlight">cybersecurity</span>{" "}
          learning blog.
          <br />
          <span className="general-highlight">Pinned</span> posts are notable
          and I would suggest taking a look at them first.{" "}
          <span className="general-highlight">New</span> posts are also
          recommended by me.
        </p>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="general-dropdown-wrapper" style={{ minHeight: "48px" }}>
        {!loading && (
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="general-dropdown"
          >
            <option value="new">Sort by Featured</option>
            <option value="date">Sort by Date</option>
          </select>
        )}
      </div>

      <div className="flex flex-col items-center w-full max-w-4xl">
        {loading ? (
          <div className="general-loader-wrapper">
            <div className="loader"></div>
          </div>
        ) : posts.length === 0 ? (
          <p className="general-description">No posts available.</p>
        ) : (
          <div className="general-grid">
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

        {!loading && visiblePosts < posts.length && (
          <div className="general-button-wrapper">
            <button onClick={loadMorePosts} className="general-button">
              Load more
            </button>
          </div>
        )}

        {!loading && visiblePosts >= posts.length && posts.length > 0 && (
          <div className="general-button-wrapper">
            <button onClick={scrollToTop} className="general-button">
              Back to the top
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
