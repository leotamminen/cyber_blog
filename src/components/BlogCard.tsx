import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  tags?: string[] | string | null;
  date?: string;
  summary: string;
  author?: string;
}

export default function BlogCard({
  id,
  title,
  tags,
  date,
  summary,
  author,
}: BlogCardProps) {
  return (
    <Link
      href={`/post/${id}`}
      className="block p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition dark:bg-gray-700 dark:text-gray-200 flex flex-col justify-between"
    >
      {/* Tags and Published Date */}
      <div className="flex justify-between items-center mb-2">
        <p className="font-bold text-sm">
          {Array.isArray(tags) ? tags.join(", ") : tags || "No Tags"}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Published:</span> {date || "Unknown"}
        </p>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      {/* Summary */}
      <p className="text-sm mb-2">{summary}</p>

      {/* Author */}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Author:</span> {author || "Unknown"}
      </p>
    </Link>
  );
}
