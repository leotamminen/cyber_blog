export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200 pt-[2rem] pb-[7rem]">
      <h1 className="text-4xl font-extrabold mb-6 text-center">About</h1>
      <div className="max-w-2xl">
        <p className="text-center text-lg">
          I am a MSc cybersecurity student learning and keeping myself updated
          with new technologies.
        </p>
        <p className="text-center text-lg">
          Breaking the Firewall is my personal blog where I share my journey in
          learning cybersecurity. The site is built with Next.js and TypeScript
          and focuses on blog posts where I share what I’ve learned and my own
          experiments. I can update posts as I grow my knowledge, which mostly
          comes from university courses, personal projects, and online research.
        </p>

        <p className="text-center text-lg mt-4">
          Please respect my work and don’t copy or share it without mentioning
          where it’s from. My goal is to inspire others to explore
          cybersecurity. Many posts are written as tutorials so you can follow
          along and learn too.
        </p>
      </div>
    </div>
  );
}
