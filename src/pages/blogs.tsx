import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200 pt-[5rem] pb-[7rem]">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Breaking the Firewall Blog
      </h1>
      <p className="text-center text-lg max-w-2xl">
        Explore guides, tutorials, and articles on cybersecurity and technology.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {posts.map((post) => (
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
