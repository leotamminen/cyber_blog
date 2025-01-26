// Interface for content blocks within a blog post
export interface ContentBlock {
  type: "p" | "h1" | "h2" | "code" | "image";
  content?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

// Interface for blog post structure
export interface BlogPost {
  id: string;
  title: string;
  author: string;
  tags?: string;
  summary: string;
  content: ContentBlock[];
  pinned?: boolean;
  new?: boolean;
  edited?: string;
  date?: string;
}
