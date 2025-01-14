import { useState } from "react";

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      title: "What is Cybersecurity?",
      summary:
        "Understand the basics of cybersecurity, its importance, and the key concepts involved.",
      content:
        "Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or disrupting normal business processes. With the increasing reliance on technology, cybersecurity has become a critical concern in the digital age. This article explores its fundamental concepts and strategies to stay safe online.",
    },
    {
      id: 2,
      title: "Top 5 Cyber Threats in 2025",
      summary:
        "Explore the most significant cyber threats that businesses and individuals face in 2025.",
      content:
        "The top cyber threats in 2025 include ransomware attacks, phishing scams, zero-day exploits, insider threats, and supply chain attacks. Each of these threats poses unique challenges, and understanding them is the first step in building an effective defense. For instance, ransomware attacks have evolved, targeting critical infrastructures, while phishing scams use advanced social engineering tactics. This article dives deep into these threats and offers strategies to mitigate them.",
    },
    {
      id: 3,
      title: "Securing Your Home Network",
      summary:
        "Learn how to protect your home network from cyberattacks with simple, actionable steps.",
      content:
        "Securing your home network is essential to prevent unauthorized access and potential data breaches. Start by changing the default password on your router, enabling WPA3 encryption, and keeping your devices updated. Additionally, consider setting up a guest network for visitors and using a firewall to monitor traffic. This guide provides a step-by-step approach to ensuring your home network is secure.",
    },
    {
      id: 4,
      title: "The Future of Cybersecurity: AI and Automation",
      summary:
        "Discover how artificial intelligence and automation are transforming the cybersecurity landscape.",
      content:
        "AI and automation are revolutionizing cybersecurity by enabling faster detection and response to threats. Machine learning algorithms can analyze vast amounts of data to identify anomalies and predict potential attacks. Automation tools streamline incident response processes, allowing security teams to focus on critical tasks. However, these advancements also pose challenges, such as the risk of adversarial AI. This article explores the benefits and challenges of integrating AI into cybersecurity strategies.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-200">
      <h1 className="text-4xl font-extrabold mb-6 drop-shadow-md">
        Breaking the Firewall Blog
      </h1>
      <p className="text-center text-lg max-w-2xl">
        Explore guides, tutorials, and articles on cybersecurity and technology.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition dark:bg-gray-700 dark:text-gray-200 cursor-pointer"
            onClick={() =>
              setExpandedPost(expandedPost === post.id ? null : post.id)
            }
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            {expandedPost === post.id ? (
              <p className="text-sm">{post.content}</p>
            ) : (
              <p className="text-sm">{post.summary}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
