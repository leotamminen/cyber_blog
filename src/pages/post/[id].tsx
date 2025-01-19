import { useRouter } from "next/router";
import "../../styles/globals.css";
import { posts } from "@/data/posts"; // Import posts from the data file
import { redirectTo404 } from "@/utils/navigation"; // Import the global redirect function
import PostLayout from "@/layouts/PostLayout"; // Import the reusable PostLayout component
import Image from "next/image";
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
  overflowX: "auto", // Removed type assertion
  border: "1px solid rgba(17, 16, 16, 0.1)",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
};

// Reusable CodeBlock component
function CodeBlock({ code }: { code: string }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dark}
      customStyle={customCodeBlockStyles} // Apply dynamic custom styles
    >
      {code}
    </SyntaxHighlighter>
  );
}

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  // Ensure `id` is defined before finding the post
  const post = id ? posts.find((post) => post.id === id) : null;

  // Redirect to 404 if the post does not exist
  if (!post && id) {
    redirectTo404(router);
    return null; // Return nothing while redirecting
  }

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Render the post inside the PostLayout
  return (
    <PostLayout>
      {/* Post title */}
      <h1 className="text-5xl font-extrabold mb-10 text-left pt-[1rem]">
        {post?.title}
      </h1>

      {/* Meta information (author, dates) */}
      <div className="text-left text-sm text-gray-800 dark:text-gray-400 pb-[3rem]">
        {post?.author && (
          <p>
            <span className="font-semibold">Author:</span> {post.author}
          </p>
        )}
        {post?.date && (
          <p>
            <span className="font-semibold">Published:</span> {post.date}
          </p>
        )}
        {post?.edited && (
          <p>
            <span className="font-semibold">Edited:</span> {post.edited}
          </p>
        )}
      </div>

      {/* Post content */}
      {Array.isArray(post?.content) ? (
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
                  <CodeBlock
                    key={index}
                    code={block.content || "No code provided"}
                  />
                </figure>
              );
            default:
              return null;
          }
        })
      ) : (
        <p className="text-lg leading-relaxed">{post?.content || ""}</p>
      )}

      {/* Back to the top button */}
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
