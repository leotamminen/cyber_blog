import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  tags?: string[] | string | null;
  date?: string;
  summary: string;
  author?: string;
  new?: boolean; // Optional 'new' flag
}

export default function BlogCard({
  id,
  title,
  tags,
  date,
  summary,
  author,
  new: isNew = false, // Default to false if not provided
}: BlogCardProps) {
  return (
    <div className="relative h-full">
      <Link
        href={`/post/${id}`}
        className="flex flex-col justify-between h-full p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition dark:bg-gray-700 dark:text-gray-200"
      >
        {/* Tags and Published Date */}
        <div className="flex justify-between items-center mb-2">
          <p className="font-bold text-sm">
            {Array.isArray(tags) ? tags.join(", ") : tags || "No Tags"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Published:</span>{" "}
            {date || "Unknown"}
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

      {/* New Badge */}
      {isNew && (
        <div className="absolute -top-2 right-2">
          <span className="bg-yellow-300 text-black font-bold px-3 py-1 rounded-md shadow-md text-xs transform rotate-3">
            New
          </span>
        </div>
      )}
    </div>
  );
}
