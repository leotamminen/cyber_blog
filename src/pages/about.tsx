export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-500 text-white dark:from-gray-900 dark:via-black dark:to-blue-900 dark:text-gray-200 pt-[5rem] pb-[7rem]">
      <h1 className="text-4xl font-extrabold mb-6 text-center">About</h1>
      <div className="max-w-4xl">
        <p className="text-center text-lg">
          Breaking the Firewall is not just a blog—it’s my personal journey into
          the fascinating world of cybersecurity. Since I was a kid, I’ve been
          captivated by the art and science of hacking, digital defense, and
          understanding how systems work. This blog is a reflection of my
          passion and a way to document my learning, growth, and insights in
          this ever-evolving field.
        </p>

        <p className="text-center text-lg mt-4">
          Currently, I am pursuing a Master’s degree in Cybersecurity
          Engineering, which has given me the opportunity to dive deep into
          advanced topics like ethical hacking, system and application security,
          firewall IDS/IPS labs, and security engineering. From exploring
          network infrastructures and digital communication to studying the
          human element in cybersecurity and the psychology behind attacks,
          every step is an exciting challenge that fuels my curiosity.
        </p>

        <p className="text-center text-lg mt-4">
          This blog serves as my digital diary—a place to store my thoughts,
          experiments, and discoveries. Whether it’s learning about DNS
          spoofing, building secure systems, or uncovering the intricacies of
          ethical hacking, I aim to make these topics approachable not only for
          myself but for anyone curious about the field. It’s a resource for
          reflection, inspiration, and education.
        </p>

        <p className="text-center text-lg mt-4">
          My hope is that this blog inspires others to explore cybersecurity and
          IT as a career or a passion. The field is vast, dynamic, and
          incredibly rewarding. Whether you’re just starting out or are well
          into your journey, there’s always something new to learn and share.
          Breaking the Firewall is my way of contributing to the community,
          sharing knowledge, and sparking interest in this critical and
          fascinating domain.
        </p>
      </div>
    </div>
  );
}
