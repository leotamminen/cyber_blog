import { useRouter } from "next/router";
import "../../styles/globals.css";
import { useEffect, useState } from "react";
import { redirectTo404 } from "@/utils/navigation"; // Import the global redirect function
import PostLayout from "@/layouts/PostLayout"; // Import the reusable PostLayout component
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Dynamic custom styles for CodeBlock
const customCodeBlockStyles: React.CSSProperties = {
  background: "var(--codeblock-bg)", // Reference CSS variable
  color: "var(--codeblock-text)", // Reference CSS variable
  padding: "1rem",
  borderRadius: "8px",
  fontFamily: "'Fira Code', monospace",
  fontSize: "0.9rem",
  lineHeight: "1.5",
  overflowX: "auto",
  border: "1px solid rgba(17, 16, 16, 0.1)",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
};

// Reusable CodeBlock component
function CodeBlock({ code }: { code: string }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dark}
      customStyle={customCodeBlockStyles}
    >
      {code}
    </SyntaxHighlighter>
  );
}

interface BlogPost {
  id: string;
  title: string;
  author: string;
  tags?: string;
  summary: string;
  content: Array<{
    type: string;
    content?: string;
    src?: string;
    alt?: string;
    caption?: string;
  }>;
  pinned?: boolean;
  new?: boolean;
  date?: string;
  edited?: string;
}

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<BlogPost | null>(null); // State for the current post
  const [pinnedPosts, setPinnedPosts] = useState<BlogPost[]>([]); // State for pinned posts
  const [otherPosts, setOtherPosts] = useState<BlogPost[]>([]); // State for other posts
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (!id) return;

    // Fetch post data
    const fetchPost = async () => {
      try {
        setLoading(true);

        const [postResponse, pinnedResponse, otherResponse] = await Promise.all(
          [
            fetch(`/api/posts/${id}`), // Fetch the specific post
            fetch(`/api/posts?pinned=true`), // Fetch pinned posts
            fetch(`/api/posts?pinned=false`), // Fetch other posts
          ]
        );

        if (!postResponse.ok) {
          throw new Error("Post not found");
        }

        const postData = await postResponse.json();
        const pinnedData = await pinnedResponse.json();
        const otherData = await otherResponse.json();

        setPost(postData);
        setPinnedPosts(pinnedData.slice(0, 4)); // Limit pinned posts to 4
        setOtherPosts(otherData.slice(0, 4)); // Limit other posts to 4
      } catch (error) {
        console.error("Error fetching post data:", error);
        redirectTo404(router); // Redirect to 404 if the post is not found
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, router]);

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return null; // Render nothing if the post is not found
  }

  return (
    <PostLayout>
      <h1 className="text-5xl font-extrabold mb-10 text-left pt-[1rem]">
        {post.title}
      </h1>
      <div className="text-left text-sm text-gray-800 dark:text-gray-400 pb-[3rem]">
        {post.author && (
          <p>
            <span className="font-semibold">Author:</span> {post.author}
          </p>
        )}
        {post.date && (
          <p>
            <span className="font-semibold">Published:</span> {post.date}
          </p>
        )}
        {post.edited && (
          <p>
            <span className="font-semibold">Edited:</span> {post.edited}
          </p>
        )}
      </div>

      {Array.isArray(post.content) ? (
        post.content.map((block, index) => {
          switch (block.type) {
            case "h1":
              return (
                <h1 key={index} className="text-3xl font-bold mb-6">
                  {block.content || ""}
                </h1>
              );
            case "h2":
              return (
                <h2
                  key={index}
                  className="text-2xl font-semibold mb-3 pb-[1rem]"
                >
                  {block.content || ""}
                </h2>
              );
            case "p":
              return (
                <div key={index} className="text-lg leading-relaxed mb-4">
                  {block.content?.split("\n").map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-5">
                      {line.trim()}
                    </p>
                  ))}
                </div>
              );
            case "image":
              return (
                <figure
                  key={index}
                  className="my-6 text-center pt-[1rem] pb-[3rem]"
                >
                  <Image
                    src={block.src!}
                    alt={block.alt || "Image"}
                    width={600}
                    height={400}
                    className="shadow-md"
                  />
                  {block.caption && (
                    <figcaption className="text-sm mt-2 text-gray-400 text-left">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            case "code":
              return (
                <figure key={index} className="my-6 text-center pb-[3rem]">
                  <CodeBlock code={block.content || "No code provided"} />
                </figure>
              );
            default:
              return null;
          }
        })
      ) : (
        <p className="text-lg leading-relaxed">{post.content || ""}</p>
      )}

      <div className="mt-10 pt-[3rem]">
        <h2 className="text-3xl font-bold mb-4">Pinned Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pinnedPosts.map((pinnedPost) => (
            <BlogCard
              key={pinnedPost.id}
              id={pinnedPost.id}
              title={pinnedPost.title}
              tags={pinnedPost.tags}
              date={pinnedPost.date}
              summary={pinnedPost.summary}
              author={pinnedPost.author}
              new={pinnedPost.new}
              pinned={pinnedPost.pinned}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4">Other Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherPosts.map((otherPost) => (
            <BlogCard
              key={otherPost.id}
              id={otherPost.id}
              title={otherPost.title}
              tags={otherPost.tags}
              date={otherPost.date}
              summary={otherPost.summary}
              author={otherPost.author}
              new={otherPost.new}
              pinned={otherPost.pinned}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition duration-300"
        >
          Back to the top
        </button>
      </div>
    </PostLayout>
  );
}
