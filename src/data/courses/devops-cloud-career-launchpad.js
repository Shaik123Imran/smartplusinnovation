/**
 * DevOps and Cloud Career Launchpad — rich detail page content.
 * Published via src/data/courses/catalog.js → /programs/devops-and-cloud-career-launchpad
 */

/** Rich course detail — MongoDB-ready structure for DevOps and Cloud Career Launchpad */

export const devopsCloudCareerLaunchpad = {
  slug: 'devops-and-cloud-career-launchpad',
  hasDetailPage: true,

  meta: {
    title: 'DevOps and Cloud Career Launchpad',
    description:
      'Master DevOps, cloud engineering, CI/CD, Docker, Kubernetes, and AWS with EduGram Technologies. Live sessions, real projects, placement support, and career-ready training.',
  },

  hero: {
    title: 'DevOps and Cloud Career Launchpad',
    subtitle: 'Industry-Aligned DevOps & Cloud Engineering Program',
    tagline:
      'Launch your career as a DevOps Engineer, Cloud Engineer, or SRE with hands-on labs, production-style projects, and mentor-led guidance.',
    badge: 'Career Launchpad',
    imageFile: 'devops-cloud.svg',
  },

  cta: {
    headline: 'Start Your Career Journey',
    subline:
      'Join the next cohort of DevOps and cloud engineers trained by EduGram Technologies. Limited seats with dedicated mentor support.',
  },

  pricing: {
    price: 49999,
    originalPrice: 89999,
  },

  about: {
    intro:
      'An intensive, career-focused program that bridges the gap between academic learning and production-grade DevOps engineering. Built for students, IT beginners, career switchers, and working professionals who want job-ready cloud and automation skills.',
    sections: [
      {
        title: 'What is DevOps?',
        content:
          'DevOps combines software development and IT operations to shorten the development lifecycle and deliver high-quality software continuously. You will learn automation, collaboration, monitoring, and deployment practices used by modern product teams.',
      },
      {
        title: 'Cloud Engineering Overview',
        content:
          'Cloud engineering focuses on designing, deploying, and managing applications on platforms like AWS. You will work with compute, storage, networking, IAM, and managed services that power scalable infrastructure worldwide.',
      },
      {
        title: 'Career Opportunities',
        content:
          'Graduates pursue roles such as DevOps Engineer, Cloud Engineer, SRE, Platform Engineer, and AWS Specialist. Demand continues to grow across startups, enterprises, and global tech companies.',
      },
      {
        title: 'Industry Demand',
        content:
          'Organizations need engineers who can automate deployments, manage containers, implement CI/CD, and maintain reliable cloud infrastructure. This program aligns with skills recruiters actively seek in 2025 and beyond.',
      },
    ],
  },

  skillsCovered: [
    { name: 'Linux', description: 'Commands, shell scripting, and server administration' },
    { name: 'Git & GitHub', description: 'Version control, branching, and team collaboration' },
    { name: 'Docker', description: 'Containerization, images, volumes, and networking' },
    { name: 'Kubernetes', description: 'Orchestration, scaling, and multi-container apps' },
    { name: 'AWS', description: 'EC2, S3, VPC, IAM, and cloud deployment patterns' },
    { name: 'CI/CD', description: 'Automated build, test, and release pipelines' },
    { name: 'Jenkins', description: 'Pipeline creation and deployment automation' },
    { name: 'Terraform', description: 'Infrastructure as Code and cloud provisioning' },
    { name: 'Monitoring', description: 'CloudWatch, Prometheus, Grafana basics' },
    { name: 'Cloud Deployment', description: 'Secure, scalable production deployments' },
    { name: 'DevOps Workflows', description: 'End-to-end delivery from code to production' },
  ],

  technologies: [
    { name: 'Linux', color: 'from-slate-600 to-slate-800' },
    { name: 'Git', color: 'from-orange-500 to-red-600' },
    { name: 'Docker', color: 'from-blue-500 to-blue-700' },
    { name: 'Kubernetes', color: 'from-indigo-500 to-blue-600' },
    { name: 'AWS', color: 'from-amber-500 to-orange-600' },
    { name: 'Jenkins', color: 'from-red-500 to-red-700' },
    { name: 'Terraform', color: 'from-violet-500 to-purple-700' },
    { name: 'Ansible', color: 'from-rose-500 to-red-600' },
    { name: 'Prometheus', color: 'from-orange-600 to-amber-700' },
    { name: 'Grafana', color: 'from-orange-500 to-yellow-600' },
  ],

  learningOutcomes: [
    'Hands-on exposure to real-time DevOps and cloud projects',
    'Confidence deploying applications to AWS and container platforms',
    'Ability to design and maintain CI/CD automation workflows',
    'Understanding of cloud architecture, security, and monitoring basics',
    'Interview preparation with mock sessions and resume guidance',
  ],

  programFeatures: [
    'Live instructor-led sessions',
    'Recorded session library for revision',
    'Real-time capstone projects',
    'Mock interviews with industry mentors',
    'Resume building support',
    'LinkedIn profile optimization',
    'Dedicated placement assistance',
    'Live doubt-solving sessions',
    '1:1 mentor guidance',
  ],

  careerRoles: [
    { title: 'DevOps Engineer', description: 'Automate builds, deployments, and infrastructure' },
    { title: 'Cloud Engineer', description: 'Design and manage cloud-native solutions' },
    { title: 'Site Reliability Engineer', description: 'Ensure uptime, performance, and reliability' },
    { title: 'AWS Engineer', description: 'Specialize in Amazon Web Services workloads' },
    { title: 'Platform Engineer', description: 'Build internal developer platforms and tooling' },
  ],

  syllabus: [
    {
      id: 'w1',
      title: 'Week 1 – DevOps Essentials',
      topics: [
        'Introduction to DevOps and career scope',
        'Agile and Scrum methodology overview',
        'Linux fundamentals: commands, file system, shell scripting',
        'Lab: Automate simple tasks with shell scripts',
      ],
    },
    {
      id: 'w2',
      title: 'Week 2 – Version Control with Git & GitHub',
      topics: [
        'Git fundamentals: init, clone, commit, branch, merge',
        'GitHub workflows, pull requests, and collaboration',
        'Hands-on: Build your portfolio with GitHub projects',
      ],
    },
    {
      id: 'w3',
      title: 'Week 3 – Cloud Computing Basics',
      topics: [
        'Introduction to cloud and service models (IaaS, PaaS, SaaS)',
        'AWS, GCP, and Azure overview (focus on AWS basics)',
        'Compute, storage, and networking essentials',
        'Lab: Launch your first EC2 instance and set up an S3 bucket',
      ],
    },
    {
      id: 'w4',
      title: 'Week 4 – DevOps Toolchain & Career Roadmap',
      topics: [
        'Understanding CI/CD pipeline concepts',
        'Overview of Jenkins, Docker, and Kubernetes',
        'Lab: End-to-end mini project (Git + Linux + AWS basics)',
      ],
    },
    {
      id: 'w5',
      title: 'Week 5 – Containers with Docker',
      topics: [
        'Introduction to Docker and containerization',
        'Docker images, containers, volumes, and networks',
        'Lab: Deploy a sample application in Docker',
      ],
    },
    {
      id: 'w6',
      title: 'Week 6 – CI/CD with Jenkins',
      topics: [
        'Jenkins installation and configuration',
        'Build pipelines and automated deployments',
        'Lab: Create a Jenkins pipeline for a sample application',
      ],
    },
    {
      id: 'w7',
      title: 'Week 7 – Infrastructure as Code (IaC)',
      topics: [
        'Introduction to IaC and Terraform basics',
        'Provisioning cloud resources with Terraform',
        'Lab: Deploy EC2, S3, and VPC with Terraform',
      ],
    },
    {
      id: 'w8',
      title: 'Week 8 – Configuration Management',
      topics: [
        'Ansible basics: playbooks, roles, and inventory',
        'Automating server setup with Ansible',
        'Lab: Deploy a web server with Ansible',
      ],
    },
    {
      id: 'w9',
      title: 'Week 9 – Kubernetes Orchestration',
      topics: [
        'Kubernetes architecture: pods, nodes, and services',
        'Deploying and scaling applications with Kubernetes',
        'Lab: Deploy a multi-container application on Kubernetes',
      ],
    },
    {
      id: 'w10',
      title: 'Week 10 – Cloud DevOps (AWS Advanced)',
      topics: [
        'Load balancers, auto-scaling, and IAM',
        'Cloud storage and monitoring (CloudWatch, Prometheus)',
        'Lab: Secure and monitor your application on AWS',
      ],
    },
    {
      id: 'w11',
      title: 'Week 11 – Monitoring, Logging & Security',
      topics: [
        'CI/CD with security (DevSecOps)',
        'Monitoring with Prometheus and Grafana',
        'Centralized logging with ELK stack basics',
        'Lab: Secure a pipeline with logging and monitoring',
      ],
    },
    {
      id: 'w12',
      title: 'Week 12 – Capstone Project',
      topics: [
        'End-to-end project: Git → Jenkins → Docker → Kubernetes → AWS',
        'Production deployment with monitoring and observability',
        'Portfolio-ready capstone for interviews and placements',
      ],
    },
  ],

  faqs: [
    {
      question: 'Who can join this course?',
      answer:
        'Students, fresh graduates, IT beginners, software engineers, and career switchers who want to build DevOps and cloud skills. Basic computer literacy is sufficient; programming exposure helps but is not mandatory.',
    },
    {
      question: 'Is placement support provided?',
      answer:
        'Yes. EduGram provides placement assistance, resume reviews, mock interviews, and career counseling to help you prepare for DevOps and cloud roles.',
    },
    {
      question: 'Are live classes available?',
      answer:
        'Yes. The program includes live instructor-led sessions along with recorded content for flexible revision.',
    },
    {
      question: 'Will projects be included?',
      answer:
        'Absolutely. You will work on hands-on labs, weekly assignments, and real-time capstone projects that mirror industry workflows.',
    },
    {
      question: 'Is this beginner friendly?',
      answer:
        'Yes. We start with Linux and Git fundamentals and progressively move to advanced tools. Mentors support you throughout the learning path.',
    },
    {
      question: 'Will interview preparation be covered?',
      answer:
        'Yes. Mock interviews, resume building, LinkedIn optimization, and role-specific guidance are part of the program.',
    },
  ],

  testimonials: [
    {
      name: 'Arjun Mehta',
      role: 'DevOps Engineer',
      company: 'Tech Solutions Pvt Ltd',
      content:
        'The Docker, Jenkins, and AWS modules were incredibly practical. I deployed my first CI/CD pipeline during the course and landed a DevOps role within months.',
      rating: 5,
      image: 'A',
    },
    {
      name: 'Priya Nair',
      role: 'Cloud Engineer',
      company: 'FinServe Digital',
      content:
        'Mentors explained complex Kubernetes concepts clearly. The capstone project gave me confidence to discuss real deployments in interviews.',
      rating: 5,
      image: 'P',
    },
    {
      name: 'Rahul Desai',
      role: 'SRE Trainee',
      company: 'CloudScale Systems',
      content:
        'Best decision for my career switch. Live sessions, doubt support, and placement guidance made the transition smooth.',
      rating: 5,
      image: 'R',
    },
  ],

  whatsappMessage:
    'Hello EduGram Technologies, I am interested in the DevOps and Cloud Career Launchpad program. Please share course details, fees, and the next batch schedule.',
}

export default devopsCloudCareerLaunchpad
