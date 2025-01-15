export const posts = [
  {
    id: "1",
    title: "My Firewall Labs",
    summary:
      "Discover my firewall labs where I tested configurations and defense strategies by simulating attacks on my own network.",
    date: "15 December 2024",
    content: [
      { type: "h1", content: "Understanding Firewall Labs" },
      {
        type: "p",
        content:
          "Firewalls serve as the first line of defense in network security, acting as a barrier between trusted internal networks and untrusted external ones. In my firewall labs, I focused on understanding how to configure, test, and analyze firewalls to enhance their effectiveness in real-world scenarios.",
      },
      {
        type: "p",
        content: `This project was part of a university course where I learned about network security and how to protect systems from attacks. The goal was to get hands-on experience with tools and techniques used in real-world cybersecurity.\n

For this project, I created a virtual lab using tools like pfSense, Metasploitable, and TinyCore Linux. I set up a network, simulated different kinds of attacks, and worked on ways to defend against them. This included configuring firewalls, testing how they respond to attacks, and improving their settings to make the network more secure.\n

This project helped me understand how networks work, how to set up rules to control traffic, and why it’s important to monitor for suspicious activity. It was a great way to take what I learned in class and apply it to real-life situations. By doing this, I improved both my technical skills and my ability to solve problems.`,
      },
      {
        type: "image",
        src: "/firewall_graph.png",
        alt: "Network topology used in the lab",
        caption: "Picture 1: Network topology used in the lab",
      },
      {
        type: "p",
        content: "Below is the code I entered in my Kali linux console.",
      },
      {
        type: "code",
        content: `import './main.css' //personal main.css that I created

export default function Home() {
  return (
    <main className="main">
      <div className="mainDiv">
        <h1 className="bigTitle"><span className="welcomeTexjt">Welcome</span> to my blog </h1>
        <div className='research'>scroll down to discover</div>
        <div className="line"/>
      </div>
    </main>
  )
}`,
      },
      { type: "h2", content: "Setting Up the Environment" },
      {
        type: "p",
        content:
          "I created a new virtual machine in Virtualbox for both pfSense and tinyCore Linux. The tinyCore was used as the server that is running on the internal network and has the static IP address 10.0.10.100. I had some difficulties getting the connection working, but after all I managed to make it work. Then I opened my browser and navigated to 192.168.56.101, which was the address of the pfSense web configurator. I went through the install wizard following the instructions. I added the Add upstream route to the lab server from System->Routing. Add new gateway and I made sure that t the IPv4 upstream gateway is selected correctly, because I first missed this detail.",
      },
      {
        type: "p",
        content:
          "After that I ran “route add 10.0.10.0 MASK 255.255.255.0 192.168.56.101”",
      },
      {
        type: "image",
        src: "/ifconfig.png",
        alt: "Firewall rules configuration interface",
        caption: "Picture 3: ifconfig command",
      },
      {
        type: "p",
        content:
          "Then I ran the PFSense virtualmachine. From the console, I configured the PFSense firewall LAN adapter to use DHCP. After these I was able to navigate to `192.168.56.101` in my browser to access the PFSense firewall admin console.",
      },

      {
        type: "p",
        content:
          "I proceeded with the install wizard and used the default values.",
      },
      {
        type: "p",
        content: `Hostname: Leo-PFSense\n
Static IP address: 10.0.10.1\n
Subnet mask: 24\n
Block private networks and loopback addresses: NOT selected\n
Block bogon networks: NOT selected\n
LAN subnet mask: 24\n
Admin password: Pass1234\n
\n
Then I added an upstream route to the lab server from System->Routing in the PFSense admin console with the following fields:\n
• Interface: WAN\n
• Address family: IPv4\n
• Name: lab\n
• Gateway: 10.0.10.100\n
\n
Also, I made sure that the IPv4 upstream gateway was selected correctly, because I first missed this detail.`,
      },

      { type: "h2", content: "Configuring WAN settings" },
      {
        type: "image",
        src: "/task1_wan.png",
        alt: "Firewall rules configuration interface",
        caption: "Picture 4: WAN settings",
      },
      {
        type: "p",
        content:
          "Then I opened console as an administrator (in Windows), And ran the command",
      },
      {
        type: "code",
        content: `route add 10.0.10.0 MASK 255.255.255.0 192.168.56.101`,
      },
      {
        type: "p",
        content:
          "to set a route for the 10.0.10.0/24 network via 192.168.56.101.",
      },
      {
        type: "p",
        content:
          "After this I was able to connect from my host to the server in the internal network by using `ping 10.0.10.100` from my host computers admin console.\n (See the screenshot below.)",
      },
      {
        type: "image",
        src: "/task1_pinging_working.png",
        alt: "Successful pinging.",
        caption: "Picture 5: Successful pinging.",
      },
    ],
  },

  {
    id: "2",
    title: "My IDS/IPS labs",
    summary:
      "Explore my IDS/IPS labs where I used Metasploitable to simulate attacks on my own network and test defense strategies.",
    date: "18 December 2024",
    content: [
      {
        type: "image",
        src: "/logo.png",
        alt: "Network topology used in the lab",
        caption: "Figure 1: Network topology used in the lab",
      },
      {
        type: "p",
        content:
          "Explore the fundamentals of Intrusion Detection and Prevention Systems (IDS/IPS) through hands-on labs designed to strengthen your cybersecurity skills. This post dives into configuring and analyzing IDS/IPS solutions, detecting malicious activities, and fine-tuning rules to enhance network security. Whether you're examining real-world attack scenarios, setting up tools like Snort or Suricata, or learning to mitigate threats in real time, these labs provide practical insights into safeguarding modern IT environments. Perfect for cybersecurity enthusiasts and professionals aiming to deepen their understanding of intrusion detection and prevention mechanisms.",
      },
    ],
  },
  {
    id: "3",
    title: "Securing and updating my Home Network",
    summary: "See what I did and how I upgraded my home Wi-Fi security.",
    date: "10 September 2024",
    content:
      "Securing your home network is essential to prevent unauthorized access and data breaches. This guide covers steps like changing default passwords, enabling WPA3 encryption, and setting up firewalls for enhanced security.",
  },
  {
    id: "4",
    title: "SIEM, AD ...",
    summary:
      "Mastering Operating Systems and Enterprise Security: Linux, Windows, SIEM, and Azure AD.",
    date: "14 January 2025",
    content:
      "AI is revolutionizing cybersecurity by enabling faster detection and response to threats. Machine learning algorithms analyze vast data to identify anomalies, while automation streamlines incident management. However, adversarial AI also poses new challenges.",
  },
  {
    id: "5",
    title: "Ethical Hacking: A Beginner's Guide",
    summary:
      "Get started with ethical hacking, and learn how to test and secure systems ethically.",
    content:
      "Ethical hacking involves testing systems and networks to identify vulnerabilities before malicious hackers exploit them. This guide introduces you to tools, techniques, and the mindset needed to become a successful ethical hacker.",
  },
  {
    id: "6",
    title: "Understanding DNS Spoofing",
    summary:
      "Learn how DNS spoofing works and how to protect against this cyber threat.",
    content:
      "DNS spoofing redirects users to fraudulent websites by altering DNS records. This article explains how it works, its risks, and the steps to secure your network using DNSSEC and monitoring tools.",
  },
  {
    id: "7",
    title: "Introduction to Zero Trust Architecture",
    summary:
      "Understand the principles of zero trust architecture and its importance in modern cybersecurity.",
    content:
      "Zero trust architecture enforces the principle of 'never trust, always verify,' ensuring secure access to systems and data. Learn how to implement this model using multi-factor authentication, identity management, and continuous monitoring.",
  },
  {
    id: "8",
    title: "Phishing Scams: How to Spot and Avoid Them",
    summary:
      "Recognize the signs of phishing scams and protect your sensitive information.",
    content:
      "Phishing scams trick users into providing personal data, such as login credentials and financial information. This guide offers tips to identify phishing attempts and secure your email and browsing habits.",
  },
  {
    id: "9",
    title: "The Role of Encryption in Cybersecurity",
    summary:
      "Explore how encryption helps protect sensitive data and communications.",
    content:
      "Encryption converts data into unreadable formats, ensuring that only authorized parties can access it. Learn about symmetric and asymmetric encryption, their applications, and best practices for implementing encryption in your systems.",
  },
  {
    id: "10",
    title: "Cybersecurity Careers: Paths and Opportunities hgghg",
    summary:
      "Discover the diverse career opportunities in cybersecurity and how to get started.",
    content:
      "The cybersecurity field offers roles like security analyst, ethical hacker, and SOC engineer. This article explores various career paths, required skills, and certifications to kickstart your cybersecurity career.",
  },
  {
    id: "11",
    title: "Cybersecurity Careers: Paths and Opportunities g",
    summary:
      "Discover the diverse career opportunities in cybersecurity and how to get started.",
    content:
      "The cybersecurity field offers roles like security analyst, ethical hacker, and SOC engineer. This article explores various career paths, required skills, and certifications to kickstart your cybersecurity career.",
  },
  {
    id: "12",
    title: "Cybersecurity Careers: Paths and Opportunities moi",
    summary:
      "Discover the diverse career opportunities in cybersecurity and how to get started.",
    content:
      "The cybersecurity field offers roles like security analyst, ethical hacker, and SOC engineer. This article explores various career paths, required skills, and certifications to kickstart your cybersecurity career.",
  },
  {
    id: "13",
    title: "Cybersecurity Careers: Paths and Opportunities gui",
    summary:
      "Discover the diverse career opportunities in cybersecurity and how to get started.",
    content:
      "The cybersecurity field offers roles like security analyst, ethical hacker, and SOC engineer. This article explores various career paths, required skills, and certifications to kickstart your cybersecurity career.",
  },
  {
    id: "14",
    title: "Top 5 Cyber Threats in 2025",
    summary:
      "Explore the most significant cyber threats that businesses and individuals face in 2025.",
    content:
      "The top cyber threats in 2025 include ransomware attacks, phishing scams, zero-day exploits, insider threats, and supply chain attacks. Understanding these threats and implementing effective defenses is crucial to staying safe in the digital age.",
  },
];
