export const posts = [
  {
    id: "1",
    title: "My Firewall Labs",
    author: "Leo Tamminen",
    tags: "Firewall",
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
    author: "Leo Tamminen",
    tags: "Intrusion detection/prevention",
    summary:
      "Explore my IDS/IPS labs where I used Metasploitable to simulate attacks on my own network.",
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
    author: "Leo Tamminen",
    tags: "Configuring home Wi-Fi",
    summary: "See what I did and how I upgraded my home Wi-Fi security.",
    date: "10 September 2024",
    content:
      "Securing your home network is essential to prevent unauthorized access and data breaches. This guide covers steps like changing default passwords, enabling WPA3 encryption, and setting up firewalls for enhanced security.",
  },
  {
    id: "4",
    title: "SIEM, AD ...",
    author: "Leo Tamminen",
    tags: "SIEM",
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
    title: "DNS Spoofing lab",
    author: "Leo Tamminen",
    tags: "DNS",
    summary:
      "Learn how DNS spoofing works and how to protect against this cyber threat.",
    date: "10 January 2025",
    edited: "18 January 2025",
    content: [
      {
        type: "h1",
        content: "My DNS spoofing experiment for learning purposes",
      },
      {
        type: "p",
        content: "First of all I opened Kali linux in VirtualBox",
      },
      {
        type: "p",
        content: `If you don't have apache2 (used for server in this lab). Default kali image should have that, but you can install it by:`,
      },
      {
        type: "code",
        content: `sudo apt update\nsudo apt install apache2`,
      },
      {
        type: "p",
        content: ` After that I opened the server and verified that it is running by:`,
      },
      {
        type: "code",
        content: `sudo service apache2 start\nsudo service apache2 status`,
      },
      {
        type: "p",
        content: `And checked the IP adress by running \`sudo ifconfig\`\n
        It seems to be inet -> 172.24.50.120\n
        Then I copy pasted the IP address to my browsers address bar.`,
      },
      {
        type: "p",
        content: `After that I navigated to \`cd /var/www/html/\`\n
        and deleted the default apache index.html and the index.nginx-debian.html and made new index.html`,
      },
      {
        type: "p",
        content: `BE CAUTIOUS the next command deletes everything:`,
      },
      {
        type: "code",
        content: `sudo rm -rf *`,
      },

      {
        type: "code",
        content: `// Then I created and opened the index.html using nano.\n// This creates and opens the index.html in nano editor\nsudo nano index.html\n\n// The code below is the placeholder for the new index.html\n<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <h1>DNS Spoofing test site</h1>
    <p>This is only a test in my home network.</p>
</body>
</html>
`,
      },
      {
        type: "p",
        content: `I saved the file using CTRL + O and closed nano with CTRL + X.\n
        (I feel like these can be often be easily forgotten if you are not experienced with linux.)`,
      },
      {
        type: "h1",
        content: `Testing the environment with another device`,
      },
      {
        type: "p",
        content: `I tested with my laptop.\n
        First, I opened browser in my laptop that is in the same Wi-Fi network, and navigated to the original machine's IP address. I made sure I saw the just freshly made test site.`,
      },

      {
        type: "image",
        src: "/laptop_successful_apache.jpeg",
        alt: "The test was successful.",
        caption:
          "Picture 1: The view of my laptop's browser, the test was successful.",
      },
      {
        type: "p",
        content: "Consider this the first step done.",
      },
      {
        type: "p",
        content: "After that I used dsniff, it can be installed by",
      },
      { type: "code", content: "sudo apt install dsniff" },
      { type: "p", content: "Then I enabled IP forward function:" },

      {
        type: "code",
        content:
          "// This allows traffic to be routed on the Kali device:\necho 1 | sudo tee /proc/sys/net/ipv4/ip_forward",
      },
      {
        type: "p",
        content:
          "Then I installed and configured ettercap graphical and edited the etter.dns file:",
      },
      {
        type: "code",
        content:
          "sudo apt install ettercap-graphical\nsudo nano /etc/ettercap/etter.dns",
      },
      {
        type: "code",
        content: `// I added my target domain to the file and pointed it to the IP address of the Kali machine:\nwww.example.com    A    172.24.50.120
*.example.com      A    172.24.50.120
`,
      },
      { type: "p", content: "I launched ettercap in graphical mode." },
      {
        type: "code",
        content: `// -G tag for graphical interface\nsudo ettercap -G`,
      },

      {
        type: "p",
        content: `This post is very simplified version of what I really had to go trough to get the html to even appear in my other testing laptop. I had to manually make new firewall rule to allow all tcp 80 port traffic. I also had to make a port forwarding rule, that made sure external network (192.168.1.125:80) incoming traffic is directed to WSL2's internal network (127.27.160:80) where the Apache server was listening.
        \nBiggest lesson learned here: Always when you configure, add or edit Windows/WSL firewall rules - remember to reboot the systems. I was stuck for a while and couldn't figure out where the problem was. When I shut down all machines and rebooted, all of a sudden everything magically worked.\n
        And in the end, the whole project felt better at the end after a little struggle.`,
      },

      { type: "h2", content: "Ettercap" },
      {
        type: "p",
        content: `I was able to find my router as well as my other laptop from the hosts list.\n
          I added the router (usually 192.168.1.1) as my Target1 and my target laptop to Target2.\n
          If you are unsure, you can verify the machines by their mac address.`,
      },
      {
        type: "p",
        content: `After that I selected MITM menu -> ARP poisoning...\n
        Selected Sniff remote connections and pressed OK.\n
        This step fools the machines to think that Kali is the modem and directs the traffic through that!`,
      },
      {
        type: "image",
        src: "/ifconfig.png",
        alt: "Firewall rules configuration interface",
        caption: "Picture 3: ifconfig command",
      },
      {
        type: "p",
        content: `At first I could not get the example.com to direct to my spoofing site. The problem was that this method works only with IPv4 and not IPv6, so I had to force it to use IPv4. Also it happens that my older laptop's browser is very outdated, which suits my needs 
        perfectly because this method doesn't work on the modern browsers because of how they are running TSL on top of DNS something ....?`,
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
    title: "Learning Splunk and Nessus",
    summary:
      "See how I started my journey to learning about SIEM and vulnerability management by diving into Splunk and Nessus. This exploration laid the groundwork for advancing my cybersecurity skills and applying these tools in real-world scenarios.",
    date: "15 January 2025",
    content: [
      { type: "h1", content: "Exploring Splunk and Nessus" },
      {
        type: "p",
        content:
          "Splunk and Nessus are powerful tools in cybersecurity, enabling organizations to gain insights into their environments and identify vulnerabilities. In this project, I focused on learning how to use Splunk for log analysis and Nessus for vulnerability scanning to enhance overall security.",
      },
      {
        type: "p",
        content: `This project was part of a university course designed to provide hands-on experience with cybersecurity tools. The objective was to learn how to analyze logs using Splunk and detect vulnerabilities in a network using Nessus.\n
      
      For this project, I set up a virtual lab environment using tools like VirtualBox and Kali Linux. I used Splunk to monitor and analyze simulated network logs while Nessus was deployed to identify potential vulnerabilities in the environment. This hands-on experience helped solidify my understanding of how to leverage these tools to protect real-world systems.\n
      
      The project provided insights into log management, threat detection, and vulnerability scanning. It was an excellent opportunity to bridge theoretical knowledge with practical application, improving both my technical expertise and problem-solving skills.`,
      },
      {
        type: "image",
        src: "/firewall_graph.png",
        alt: "Network topology used in the lab",
        caption: "Picture 1: Network topology used in the lab",
      },
      {
        type: "p",
        content:
          "Below is an example script I used to simulate log data for analysis in Splunk.",
      },
      {
        type: "code",
        content: `import './main.css' //personal main.css that I created
      
      export default function Home() {
        return (
          <main className="main">
            <div className="mainDiv">
              <h1 className="bigTitle"><span className="welcomeText">Welcome</span> to my Splunk and Nessus lab </h1>
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
          "I created virtual machines in VirtualBox to host both Splunk and Nessus. Splunk was used for log analysis, while Nessus performed vulnerability scans on the network. I set up Splunk on a machine with a static IP address of 192.168.1.50. After troubleshooting some connectivity issues, I successfully configured both tools to interact within the virtual environment.",
      },
      {
        type: "p",
        content:
          "After initial setup, I navigated to `192.168.1.50:8000` to access the Splunk Web interface. I went through the setup wizard and configured basic settings, including setting up data inputs for log collection.",
      },
      {
        type: "image",
        src: "/ifconfig.png",
        alt: "Splunk interface for log configuration",
        caption: "Picture 3: Splunk log configuration interface",
      },
      {
        type: "p",
        content:
          "For Nessus, I installed the scanner on a separate virtual machine. I configured it to scan the local network and detect vulnerabilities. The scanner was accessed via `192.168.1.51:8834` in a web browser.",
      },
      {
        type: "p",
        content:
          "I proceeded with configuring Nessus and initiated scans using default policies. This allowed me to identify several vulnerabilities in the simulated environment and assess their potential impact.",
      },
      {
        type: "p",
        content: `Hostname: Lab-Nessus\n
      Static IP address: 192.168.1.51\n
      Subnet mask: 24\n
      Admin password: SecurePass123\n
      \n
      I added a scanning policy with the following fields:\n
      • Scan Type: Basic Network Scan\n
      • Target: 192.168.1.0/24\n
      • Schedule: Manual\n`,
      },
      { type: "h2", content: "Configuring Data Inputs in Splunk" },
      {
        type: "image",
        src: "/task1_wan.png",
        alt: "Splunk data input configuration",
        caption: "Picture 4: Configuring data inputs in Splunk",
      },
      {
        type: "p",
        content:
          "I opened the Splunk Web interface and configured a data input source for monitoring system logs.",
      },
      {
        type: "code",
        content: `./splunk add monitor /var/log/syslog -sourcetype linux_syslog`,
      },
      {
        type: "p",
        content:
          "This command enabled Splunk to start monitoring and indexing logs from the specified directory.",
      },
      {
        type: "p",
        content:
          "After this configuration, I was able to view logs in Splunk and run queries to identify suspicious activity. Below is an example query I used to identify failed login attempts:\n`index=main sourcetype=linux_syslog action=failure`",
      },
      {
        type: "image",
        src: "/task1_pinging_working.png",
        alt: "Successful log monitoring.",
        caption: "Picture 5: Monitoring logs in Splunk.",
      },
    ],
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
