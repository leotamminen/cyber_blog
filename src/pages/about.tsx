import "../styles/globals.css";

export default function About() {
  return (
    <div className="general-container general-container-pt general-container-pb">
      <h1 className="general-title">About</h1>
      <div className="max-w-2xl">
        <p className="general-text">
          I am a MSc cybersecurity student learning and keeping myself updated
          with new technologies.
        </p>
        <p className="general-text">
          Breaking the Firewall is my personal blog where I share my journey in
          learning cybersecurity. The site is built with Next.js and TypeScript
          and focuses on blog posts where I share what I’ve learned and my own
          experiments. I can update posts as I grow my knowledge, which mostly
          comes from university courses, personal projects, and online research.
        </p>
        <p className="general-text mt">
          Please respect my work and don’t copy or share it without mentioning
          where it’s from. My goal is to inspire others to explore
          cybersecurity. Many posts are written as tutorials so you can follow
          along and learn too.
        </p>
      </div>
    </div>
  );
}
