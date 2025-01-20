import { MongoClient, ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB as string;

if (!uri || !dbName) {
  throw new Error(
    "Missing MONGODB_URI or MONGODB_DB in environment variables."
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { id } = req.query;

  if (!id || typeof id !== "string") {
    res.status(400).json({ error: "Invalid ID format" });
    return;
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const post = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });

    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    res.status(200).json({
      id: post._id.toString(),
      title: post.title || "Untitled",
      author: post.author || "Unknown",
      tags: post.tags || "",
      summary: post.summary || "",
      content: post.content || [],
      pinned: !!post.pinned,
      new: !!post.new,
      date: post.date || null,
      edited: post.edited || null,
    });
  } catch (err) {
    console.error("Error fetching post:", err);
    res.status(500).json({ error: "Failed to fetch post" });
  } finally {
    await client.close();
  }
}
