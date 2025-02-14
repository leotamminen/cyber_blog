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
  const { id, pinned } = req.query; // Include `pinned` in query parameters

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("posts");

    if (id) {
      try {
        // Convert `id` to `ObjectId` and query the database
        const post = await collection.findOne({
          _id: new ObjectId(id as string),
        });

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
        console.error("Error fetching single post:", err);
        res.status(400).json({ error: "Invalid ID format" });
        return;
      }
    } else {
      let query = {}; // Default query fetches all posts
      if (pinned !== undefined) {
        const isPinned = pinned === "true";
        if (isPinned) {
          query = { pinned: true };
        } else {
          query = { $or: [{ pinned: false }, { pinned: { $exists: false } }] }; // Include missing `pinned`
        }
      }

      const posts = await collection.find(query).toArray();
      const sanitizedPosts = posts.map((post) => ({
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
      }));
      res.status(200).json(sanitizedPosts);
    }
  } catch (err) {
    console.error("Error in API handler:", err);
    res.status(500).json({
      error: "Posts are currently unavailable. Please try again later.",
    });
  } finally {
    await client.close();
  }
}
