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

  // Render the post inside the PostLayout
  return (
    <PostLayout>
      {/* Post title */}
      <h1 className="text-4xl font-extrabold mb-4 text-left">{post?.title}</h1>

      {/* Meta information (author, dates) */}
      <div className="text-left text-sm text-gray-600 dark:text-gray-400 mb-6">
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
                <h1 key={index} className="text-3xl font-bold mb-4">
                  {block.content || ""}
                </h1>
              );
            case "h2":
              return (
                <h2 key={index} className="text-2xl font-semibold mb-3">
                  {block.content || ""}
                </h2>
              );
            case "p":
              return (
                <div key={index} className="text-lg leading-relaxed mb-4">
                  {block.content?.split("\n").map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-2">
                      {line.trim()}
                    </p>
                  ))}
                </div>
              );
            case "image":
              return (
                <figure key={index} className="my-6 text-center">
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
                <CodeBlock
                  key={index}
                  code={block.content || "No code provided"}
                />
              );
            default:
              return null;
          }
        })
      ) : (
        <p className="text-lg leading-relaxed">{post?.content || ""}</p>
      )}
    </PostLayout>
  );
}
