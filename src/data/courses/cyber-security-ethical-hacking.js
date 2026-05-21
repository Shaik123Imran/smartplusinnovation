/**
 * Cyber Security & Ethical Hacking — full detail content.
 * Published via catalog.js → /programs/cyber-security-ethical-hacking
 *
 * Curriculum: 3 months × 4 weeks = 12 weeks (complete structure preserved).
 */

const cyberSecurityEthicalHacking = {
  slug: 'cyber-security-ethical-hacking',
  hasDetailPage: true,

  meta: {
    title: 'Cyber Security & Ethical Hacking | EduGram Technologies',
    description:
      'Master penetration testing, network security, Kali Linux, OWASP, and ethical hacking with live labs, capstone projects, and placement support from EduGram Technologies.',
  },

  hero: {
    title: 'Cyber Security & Ethical Hacking',
    subtitle: 'Industry-Aligned Cybersecurity & Penetration Testing Program',
    tagline:
      'Build job-ready skills in threat analysis, vulnerability assessment, and ethical hacking through hands-on labs, attack simulations, and mentor-guided security projects.',
    badge: 'Cybersecurity & Systems',
    imageFile: 'cyber-security.svg',
  },

  curriculum: {
    title: 'Complete 12-Week Course Curriculum',
    subtitle:
      'Month 1: Cyber Security Foundations · Month 2: Ethical Hacking Techniques · Month 3: Advanced Security & Career Readiness',
  },

  about: {
    heading: 'Defend Systems. Think Like an Ethical Hacker.',
    intro:
      'A comprehensive 3-month program for students, IT beginners, tech professionals, and career switchers who want production-grade skills in penetration testing, network defense, and security operations used by global cybersecurity teams.',
    sections: [
      {
        title: 'Cyber Security Overview',
        content:
          'Cybersecurity protects systems, networks, and data from digital attacks. You will learn threat landscapes, defense strategies, and how organizations build resilient security postures across cloud, web, and enterprise environments.',
      },
      {
        title: 'Ethical Hacking Concepts',
        content:
          'Ethical hackers use the same techniques as malicious actors—reconnaissance, scanning, exploitation, and reporting—but with legal authorization to find and fix vulnerabilities before they are abused in the real world.',
      },
      {
        title: 'Industry Demand',
        content:
          'Cyber attacks continue to rise worldwide. Banks, healthcare, e-commerce, and government sectors actively hire security analysts, penetration testers, and SOC engineers with hands-on lab and certification-ready skills.',
      },
      {
        title: 'Security Career Opportunities',
        content:
          'Graduates pursue roles such as Cyber Security Analyst, Ethical Hacker, Penetration Tester, SOC Analyst, and Security Consultant. This program maps directly to skills recruiters list in 2025 and beyond.',
      },
      {
        title: 'Why Cybersecurity Matters Today',
        content:
          'Every modern organization depends on secure infrastructure. Understanding CIA triad principles, OWASP risks, incident response, and monitoring is essential for IT professionals in any domain.',
      },
    ],
  },

  skillsCovered: [
    { name: 'Ethical Hacking', description: 'Authorized penetration testing and structured attack methodologies' },
    { name: 'Network Security', description: 'TCP/IP, firewalls, VPNs, and network defense fundamentals' },
    { name: 'Penetration Testing', description: 'Recon, scanning, exploitation, and professional reporting' },
    { name: 'Kali Linux', description: 'Security-focused Linux environment for labs and assessments' },
    { name: 'Web Security', description: 'OWASP Top 10, SQL injection, XSS, CSRF, and app testing' },
    { name: 'Cyber Defense', description: 'IDS/IPS, hardening, and protective security controls' },
    { name: 'Vulnerability Assessment', description: 'Identifying and prioritizing security weaknesses' },
    { name: 'Security Tools', description: 'Nmap, Wireshark, Metasploit, Burp Suite, and Nessus workflows' },
    { name: 'Threat Analysis', description: 'Understanding attack types, malware, and threat actors' },
    { name: 'OWASP Concepts', description: 'Industry-standard web application security frameworks' },
  ],

  technologies: [
    { name: 'Kali Linux' },
    { name: 'Wireshark' },
    { name: 'Metasploit' },
    { name: 'Nmap' },
    { name: 'Burp Suite' },
    { name: 'Nessus' },
    { name: 'Linux' },
    { name: 'Hydra' },
    { name: 'OWASP' },
    { name: 'Splunk' },
  ],

  realTimeProjects: [
    {
      title: 'Security Testing Projects',
      description:
        'Hands-on assessments in controlled lab environments covering network, system, and application layers with mentor-reviewed deliverables.',
    },
    {
      title: 'Vulnerability Analysis',
      description:
        'Document findings from scans and tests, rate severity, and recommend remediation aligned with industry reporting standards.',
    },
    {
      title: 'Real-World Attack Simulations',
      description:
        'Practice ethical attack chains—from reconnaissance through exploitation—in isolated VMs and vulnerable-by-design applications.',
    },
    {
      title: 'Security Auditing',
      description:
        'Evaluate configurations, policies, and controls to identify gaps before production deployment or compliance reviews.',
    },
    {
      title: 'Pen-Testing Labs',
      description:
        'Weekly labs using DVWA, Juice Shop-style apps, wireless simulations, and capstone end-to-end penetration test reports.',
    },
  ],

  learningOutcomes: [
    'Understand cyber threats, CIA triad, and ethical hacking legal boundaries',
    'Configure security labs with Kali Linux and Windows targets',
    'Perform reconnaissance, scanning, enumeration, and exploitation ethically',
    'Assess web, wireless, mobile, and cloud environments for vulnerabilities',
    'Execute incident response workflows and introductory SIEM monitoring',
    'Deliver professional penetration test reports and portfolio-ready capstones',
  ],

  programFeatures: [
    'Live instructor-led sessions',
    'Recorded session library for revision',
    'Real-time security lab projects',
    'Mock interviews with industry mentors',
    'Resume preparation support',
    'LinkedIn profile optimization',
    'Dedicated placement assistance',
    'Live doubt-solving sessions',
    '1:1 mentor guidance',
  ],

  careerRoles: [
    { title: 'Cyber Security Analyst', description: 'Monitor threats and protect organizational assets' },
    { title: 'Ethical Hacker', description: 'Identify vulnerabilities through authorized testing' },
    { title: 'SOC Analyst', description: 'Detect and respond to security incidents in real time' },
    { title: 'Penetration Tester', description: 'Simulate attacks to strengthen defenses' },
    { title: 'Security Consultant', description: 'Advise clients on risk reduction and compliance' },
    { title: 'Information Security Associate', description: 'Support enterprise security programs and audits' },
  ],

  syllabus: [
    {
      id: 'm1w1',
      month: 'Month 1: Foundations of Cyber Security',
      title: 'Week 1: Introduction to Cyber Security',
      topics: [
        'Cyber security landscape and career paths',
        'Types of cyber threats and attacks',
        'Security fundamentals: CIA triad (Confidentiality, Integrity, Availability)',
        'Case study: Famous cyber attacks in history',
      ],
    },
    {
      id: 'm1w2',
      month: 'Month 1: Foundations of Cyber Security',
      title: 'Week 2: Networking & OS Basics for Security',
      topics: [
        'Computer networks: TCP/IP, OSI model, and protocols',
        'Firewalls, proxies, and VPNs',
        'Windows and Linux basics for security testing',
        'Lab: Set up a virtual lab with Kali Linux and Windows',
      ],
    },
    {
      id: 'm1w3',
      month: 'Month 1: Foundations of Cyber Security',
      title: 'Week 3: Cryptography Fundamentals',
      topics: [
        'Symmetric vs asymmetric encryption',
        'Hashing, SSL/TLS, and PKI',
        'Password cracking techniques',
        'Lab: Hands-on with hashing and encryption tools',
      ],
    },
    {
      id: 'm1w4',
      month: 'Month 1: Foundations of Cyber Security',
      title: 'Week 4: Ethical Hacking Introduction',
      topics: [
        'Phases of ethical hacking: Recon → Scanning → Exploitation → Reporting',
        'Laws and ethics in ethical hacking',
        'Tools overview: Nmap, Wireshark, Metasploit',
        'Lab: First vulnerability scan in your lab setup',
      ],
    },
    {
      id: 'm2w5',
      month: 'Month 2: Ethical Hacking Techniques',
      title: 'Week 5: Reconnaissance & Footprinting',
      topics: [
        'Passive and active reconnaissance',
        'Whois, Shodan, and Google dorking',
        'Lab: Gather intelligence on a target website (authorized lab scope)',
      ],
    },
    {
      id: 'm2w6',
      month: 'Month 2: Ethical Hacking Techniques',
      title: 'Week 6: Scanning & Enumeration',
      topics: [
        'Network scanning with Nmap',
        'Service enumeration and port scanning',
        'Lab: Perform a vulnerability scan on your local system',
      ],
    },
    {
      id: 'm2w7',
      month: 'Month 2: Ethical Hacking Techniques',
      title: 'Week 7: System Hacking',
      topics: [
        'Exploiting system vulnerabilities',
        'Privilege escalation techniques',
        'Malware and trojan basics',
        'Lab: Launch and defend against a simulated attack',
      ],
    },
    {
      id: 'm2w8',
      month: 'Month 2: Ethical Hacking Techniques',
      title: 'Week 8: Web Application Security',
      topics: [
        'OWASP Top 10 vulnerabilities: SQL injection, XSS, CSRF, and more',
        'Web application penetration testing methodology',
        'Lab: Exploit a vulnerable web app (DVWA / Juice Shop)',
      ],
    },
    {
      id: 'm3w9',
      month: 'Month 3: Advanced Security & Career Readiness',
      title: 'Week 9: Wireless & Mobile Hacking',
      topics: [
        'Wireless networks and WPA/WPA2 attack concepts',
        'Mobile application security testing',
        'Lab: Wi-Fi security exercise in a simulated environment',
      ],
    },
    {
      id: 'm3w10',
      month: 'Month 3: Advanced Security & Career Readiness',
      title: 'Week 10: Cloud & Network Security',
      topics: [
        'Cloud security fundamentals (AWS and Azure basics)',
        'IDS/IPS and network defense tools',
        'Lab: Secure a cloud instance and test vulnerabilities',
      ],
    },
    {
      id: 'm3w11',
      month: 'Month 3: Advanced Security & Career Readiness',
      title: 'Week 11: Incident Response & Security Monitoring',
      topics: [
        'SIEM tools: Splunk and ELK stack introduction',
        'Incident response lifecycle',
        'Lab: Detect and respond to a simulated attack',
      ],
    },
    {
      id: 'm3w12',
      month: 'Month 3: Advanced Security & Career Readiness',
      title: 'Week 12: Capstone Project & Career Prep',
      topics: [
        'End-to-end ethical hacking project: Recon → Scan → Exploit → Secure → Report writing',
        'Building a cyber security portfolio with labs and professional reports',
      ],
    },
  ],

  faqs: [
    {
      question: 'Who can join this Cyber Security program?',
      answer:
        'Students, IT beginners, tech professionals, job seekers, and career switchers interested in ethical hacking and security operations. Basic computer literacy is sufficient.',
    },
    {
      question: 'Do I need prior networking knowledge?',
      answer:
        'No. Month 1 covers networking, OS basics, and security fundamentals before advancing to penetration testing and web security.',
    },
    {
      question: 'Are hands-on labs included?',
      answer:
        'Yes. Every phase includes practical labs—virtual Kali setups, vulnerability scans, web app testing, wireless simulations, and a final capstone penetration test.',
    },
    {
      question: 'Is ethical hacking taught legally and responsibly?',
      answer:
        'Absolutely. The program emphasizes authorized testing, laws, ethics, and reporting—skills used by professional penetration testers and security consultants.',
    },
    {
      question: 'Is placement support provided?',
      answer:
        'EduGram offers placement assistance, resume reviews, mock interviews, LinkedIn optimization, and career counseling for cybersecurity roles.',
    },
    {
      question: 'What tools will I learn?',
      answer:
        'You will work with Kali Linux, Nmap, Wireshark, Metasploit, Burp Suite, Nessus, and OWASP-aligned methodologies used in the industry.',
    },
  ],

  testimonials: [
    {
      name: 'Vikram Singh',
      role: 'SOC Analyst',
      company: 'SecureNet Solutions',
      content:
        'The Kali lab setup and OWASP modules were intense and practical. The capstone report helped me land my first security role.',
      rating: 5,
      image: 'V',
    },
    {
      name: 'Meera Krishnan',
      role: 'Penetration Tester',
      company: 'CyberShield India',
      content:
        'From recon to web app exploitation, every week had a lab. Mentors ensured we understood ethics and professional reporting.',
      rating: 5,
      image: 'M',
    },
    {
      name: 'Aditya Rao',
      role: 'Security Consultant',
      company: 'InfoGuard Systems',
      content:
        'Best structured ethical hacking program I have taken. Live doubt sessions and placement guidance made the career switch achievable.',
      rating: 5,
      image: 'A',
    },
  ],

  cta: {
    headline: 'Start Your Cyber Security Career',
    subline:
      'Join the next cohort of security professionals trained by EduGram Technologies with full lab access and mentor support.',
  },

  pricing: {
    price: 49999,
    originalPrice: 89999,
  },

  whatsappMessage:
    'Hello EduGram Technologies, I am interested in the Cyber Security & Ethical Hacking program. Please share course details, fees, and the next batch schedule.',
}

export default cyberSecurityEthicalHacking
