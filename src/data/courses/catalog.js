/**
 * MULTI-COURSE CATALOG — add every published program here.
 *
 * Each entry = one card on /programs + optional rich page at /programs/:slug
 *
 * Steps to add a course:
 * 1. Create detail file: src/data/courses/<slug>.js (copy from _template/course-detail.template.js)
 * 2. Import detail below and add definePublishedCourse(listing, detail)
 * 3. Run: npm run seed
 *
 * import myCourseDetail from './my-course-slug.js'
 */

import { normalizeCourseListing } from './schema.js'

import devopsCloudCareerLaunchpad from './devops-cloud-career-launchpad.js'
import dataScienceRealTimeBusinessCases from './data-science-real-time-business-cases.js'
import cyberSecurityEthicalHacking from './cyber-security-ethical-hacking.js'
import autocad from './autocad.js'
import uiuxDesigning from './uiux-designing.js'
import startupEntrepreneurshipStudio from './startup-entrepreneurship-studio.js'
import salesGrowthHackingMastery from './sales-growth-hacking-mastery.js'
import softSkillsWithAModernTwist from './soft-skills-with-a-modern-twist.js'
import pythonWithMachineLearning from './python-with-machine-learning.js'
import pythonFullStack from './python-full-stack.js'
import javaFullStack from './java-full-stack.js'
import fullStackWebDevelopment from './full-stack-web-development.js'
import aiPromptEngineeringGenerativeAi from './ai-prompt-engineering-generative-ai.js'

/**
 * @typedef {import('./schema.js').CourseListing} CourseListing
 * @typedef {{ listing: CourseListing, detail?: object | null }} PublishedCourseEntry
 */

/**
 * Register one course (listing + optional rich detail module).
 * @param {CourseListing} listing
 * @param {object | null} [detail] - full detail export (must include .slug)
 * @returns {PublishedCourseEntry}
 */
export function definePublishedCourse(listing, detail = null) {
  const normalized = normalizeCourseListing(listing)
  if (detail && detail.slug && detail.slug !== normalized.slug) {
    console.warn(
      `[courses] slug mismatch: listing "${normalized.slug}" vs detail "${detail.slug}"`
    )
  }
  return {
    listing: {
      ...normalized,
      hasDetailPage: Boolean(detail || normalized.hasDetailPage),
    },
    detail: detail || null,
  }
}

/**
 * All published courses — append new entries to this array.
 * @type {PublishedCourseEntry[]}
 */
export const publishedCourseEntries = [
  definePublishedCourse(
    {
      slug: 'devops-and-cloud-career-launchpad',
      title: 'DevOps and Cloud Career Launchpad',
      shortDescription:
        'Master Linux, Docker, Kubernetes, AWS, Jenkins, Terraform, and CI/CD with live mentorship, real projects, and placement support.',
      description:
        'An industry-aligned DevOps and cloud engineering program for students and professionals. Build automation pipelines, deploy to AWS, and prepare for DevOps Engineer, Cloud Engineer, and SRE roles.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'cloud-devops',
      skills: ['Linux', 'Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Terraform'],
      features: [
        'Live instructor-led sessions',
        'Recorded session library',
        'Real-time capstone projects',
        'Mock interviews & resume support',
        'Placement assistance',
      ],
      rating: 4.9,
      students: 0,
      image: 'devops-cloud',
      imageFile: 'devops-cloud.svg',
      color: 'accent',
      isFeatured: true,
      hasDetailPage: true,
    },
    devopsCloudCareerLaunchpad
  ),
  definePublishedCourse(
    {
      slug: 'data-science-with-real-time-business-cases',
      title: 'Data Science with Real-Time Business Cases',
      shortDescription:
        'Master Python, SQL, Power BI, machine learning, and statistics through live mentorship and real-time business case projects.',
      description:
        'A 3-month industry-aligned data science program with 12 weeks of curriculum across analytics foundations, modeling, and advanced business strategy—with capstone projects and placement support.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'data-ai',
      skills: ['Python', 'SQL', 'Power BI', 'ML', 'Pandas', 'NumPy', 'Statistics', 'Visualization'],
      features: [
        'Live instructor-led sessions',
        'Real-time business case projects',
        'Mock interviews & resume support',
        'Placement assistance',
        'Recorded session library',
      ],
      rating: 4.9,
      students: 0,
      image: 'data-science',
      imageFile: 'data-science.svg',
      color: 'primary',
      isFeatured: true,
      hasDetailPage: true,
    },
    dataScienceRealTimeBusinessCases
  ),
  definePublishedCourse(
    {
      slug: 'cyber-security-ethical-hacking',
      title: 'Cyber Security & Ethical Hacking',
      shortDescription:
        'Master ethical hacking, penetration testing, Kali Linux, OWASP, and network security with live labs, attack simulations, and placement support.',
      description:
        'A 3-month industry-aligned cybersecurity program with 12 weeks across security foundations, ethical hacking techniques, and advanced defense—plus capstone pen-test projects and career prep.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'cybersecurity-systems',
      skills: [
        'Ethical Hacking',
        'Kali Linux',
        'Nmap',
        'OWASP',
        'Pen Testing',
        'Wireshark',
        'Burp Suite',
        'Network Security',
      ],
      features: [
        'Live instructor-led sessions',
        'Real-time security lab projects',
        'Mock interviews & resume support',
        'Placement assistance',
        'Mentor-guided pen-test capstone',
      ],
      rating: 4.9,
      students: 0,
      image: 'cyber-security',
      imageFile: 'cyber-security.svg',
      color: 'secondary',
      isFeatured: true,
      hasDetailPage: true,
    },
    cyberSecurityEthicalHacking
  ),
  definePublishedCourse(
    {
      slug: 'autocad',
      title: 'AutoCAD',
      shortDescription:
        'Master 2D drafting, 3D modeling, floor plans, mechanical drawings, and industry CAD workflows with live mentorship and real design projects.',
      description:
        'A 3-month industry-aligned AutoCAD program with 12 weeks from drafting foundations through advanced 2D/3D modeling to civil, mechanical, and electrical capstone projects.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'design-engineering',
      skills: ['2D Drafting', '3D Modeling', 'Floor Plans', 'Mechanical CAD', 'Civil Drafting', 'XREF', 'Plotting'],
      features: [
        'Live instructor-led sessions',
        'Real-time CAD projects',
        'Recorded session library',
        'Placement assistance',
        'Resume & interview support',
      ],
      rating: 4.9,
      students: 0,
      image: 'autocad',
      imageFile: 'autocad.svg',
      color: 'accent',
      isFeatured: true,
      hasDetailPage: true,
    },
    autocad
  ),
  definePublishedCourse(
    {
      slug: 'uiux-designing',
      title: 'UI/UX Designing',
      shortDescription:
        'Master UI design, UX research, wireframing, Figma, prototyping, and design systems with live projects and portfolio guidance.',
      description:
        'An 11-week industry-aligned UI/UX program from foundations through Figma prototyping, usability testing, design systems, and a real-world capstone case study.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'design-creativity',
      skills: ['UI Design', 'UX Research', 'Figma', 'Wireframing', 'Prototyping', 'Adobe XD', 'Design Systems'],
      features: [
        'Live instructor-led sessions',
        'Portfolio guidance',
        'Real-time design projects',
        'Placement assistance',
        'Interview preparation',
      ],
      rating: 4.9,
      students: 0,
      image: 'uiux-designing',
      imageFile: 'uiux-designing.svg',
      color: 'primary',
      isFeatured: true,
      hasDetailPage: true,
    },
    uiuxDesigning
  ),
  definePublishedCourse(
    {
      slug: 'startup-entrepreneurship-studio',
      title: 'Startup & Entrepreneurship Studio',
      shortDescription:
        'Build and launch startups with idea validation, BMC, MVP labs, GTM strategy, fundraising basics, and investor pitch training.',
      description:
        'A 12-week incubation-style program covering entrepreneurial mindset, product building, branding, operations, growth hacking, and demo-day pitch preparation.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'business-entrepreneurship',
      skills: [
        'Startup Building',
        'Business Strategy',
        'Pitch Deck',
        'Market Research',
        'MVP',
        'GTM',
        'Growth Hacking',
      ],
      features: [
        'Live sessions',
        'Founder mentorship',
        'Startup workshops',
        'Pitch training',
        'Networking opportunities',
      ],
      rating: 4.9,
      students: 0,
      image: 'startup-entrepreneurship',
      imageFile: 'startup-entrepreneurship.svg',
      color: 'secondary',
      isFeatured: true,
      hasDetailPage: true,
    },
    startupEntrepreneurshipStudio
  ),
  definePublishedCourse(
    {
      slug: 'sales-growth-hacking-mastery',
      title: 'Sales & Growth Hacking Mastery',
      shortDescription:
        'Master sales psychology, CRM, LinkedIn outreach, lead generation, growth hacking, CRO, and AI-powered campaigns with live projects.',
      description:
        'A 12-week program from sales foundations and negotiation through growth experiments, paid ads, metrics dashboards, and capstone funnel or growth playbook delivery.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'business-entrepreneurship',
      skills: [
        'Sales Strategy',
        'Lead Generation',
        'Growth Hacking',
        'CRM',
        'LinkedIn',
        'CRO',
        'Digital Marketing',
      ],
      features: [
        'Live instructor-led sessions',
        'Real-time sales & growth projects',
        'Placement assistance',
        'LinkedIn optimization',
        'Interview preparation',
      ],
      rating: 4.9,
      students: 0,
      image: 'sales-growth-hacking',
      imageFile: 'sales-growth-hacking.svg',
      color: 'primary',
      isFeatured: true,
      hasDetailPage: true,
    },
    salesGrowthHackingMastery
  ),
  definePublishedCourse(
    {
      slug: 'soft-skills-with-a-modern-twist',
      title: 'Soft Skills with a Modern Twist',
      shortDescription:
        'Master communication, public speaking, leadership, interviews, and AI-enhanced workplace skills with live practice and mock interviews.',
      description:
        'A 12-week program building communication confidence, collaboration, leadership, critical thinking, and career showcase portfolio with TED-style talk and digital branding.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'career-soft-skills',
      skills: [
        'Communication',
        'Public Speaking',
        'Interview Skills',
        'Leadership',
        'Presentation',
        'LinkedIn',
        'Teamwork',
      ],
      features: [
        'Live interactive sessions',
        'Mock interviews',
        'Placement guidance',
        'Personality development',
        'Resume & LinkedIn support',
      ],
      rating: 4.9,
      students: 0,
      image: 'soft-skills',
      imageFile: 'soft-skills.svg',
      color: 'secondary',
      isFeatured: true,
      hasDetailPage: true,
    },
    softSkillsWithAModernTwist
  ),
  definePublishedCourse(
    {
      slug: 'python-with-machine-learning',
      title: 'Python with Machine Learning',
      shortDescription:
        'Master Python, NumPy, Pandas, Scikit-learn, and ML deployment with live mentorship, real-time projects, and AI career placement support.',
      description:
        'A 3-month industry-aligned program with 12 weeks across Python foundations, machine learning algorithms, deep learning basics, deployment, and capstone projects for ML and AI roles.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'data-ai',
      skills: [
        'Python',
        'Machine Learning',
        'NumPy',
        'Pandas',
        'Scikit-learn',
        'Data Visualization',
        'Deep Learning',
      ],
      features: [
        'Live instructor-led sessions',
        'Real-time ML capstone projects',
        'Mock interviews & resume support',
        'Placement assistance',
        'Recorded session library',
      ],
      rating: 4.9,
      students: 0,
      image: 'python-machine-learning',
      imageFile: 'python-machine-learning.svg',
      color: 'primary',
      isFeatured: true,
      hasDetailPage: true,
    },
    pythonWithMachineLearning
  ),
  definePublishedCourse(
    {
      slug: 'python-full-stack',
      title: 'Python Full Stack Development',
      shortDescription:
        'Master Python, React.js, Django, REST APIs, and cloud deployment with live mentorship, full-stack projects, and placement support.',
      description:
        'A 3-month industry-aligned program with 12 weeks across frontend development, Django backends, full stack integration, deployment, and capstone web applications.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'technology-software',
      skills: [
        'Python',
        'React.js',
        'Django',
        'JavaScript',
        'REST APIs',
        'HTML/CSS',
        'Full Stack',
      ],
      features: [
        'Live instructor-led sessions',
        'Real-time full stack capstone projects',
        'Mock interviews & resume support',
        'Placement assistance',
        'Recorded session library',
      ],
      rating: 4.9,
      students: 0,
      image: 'python-full-stack',
      imageFile: 'python-full-stack.svg',
      color: 'accent',
      isFeatured: true,
      hasDetailPage: true,
    },
    pythonFullStack
  ),
  definePublishedCourse(
    {
      slug: 'java-full-stack',
      title: 'Java Full Stack Development',
      shortDescription:
        'Master Core Java, Spring Boot, Hibernate, React.js, REST APIs, and cloud deployment with live mentorship and full-stack placement support.',
      description:
        'A 3-month industry-aligned program with 12 weeks across frontend development, Java and Spring Boot backends, full stack integration, JWT security, deployment, and capstone web applications.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'technology-software',
      skills: [
        'Java',
        'Spring Boot',
        'React.js',
        'Hibernate',
        'REST APIs',
        'MySQL',
        'Full Stack',
      ],
      features: [
        'Live instructor-led sessions',
        'Real-time full stack capstone projects',
        'Mock interviews & resume support',
        'Placement assistance',
        'Recorded session library',
      ],
      rating: 4.9,
      students: 0,
      image: 'java-full-stack',
      imageFile: 'java-full-stack.svg',
      color: 'secondary',
      isFeatured: true,
      hasDetailPage: true,
    },
    javaFullStack
  ),
  definePublishedCourse(
    {
      slug: 'full-stack-web-development',
      title: 'Full Stack Web Development',
      shortDescription:
        'Master HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and REST APIs with live mentorship and full-stack placement support.',
      description:
        'A 3-month industry-aligned program with 12 weeks across web foundations, JavaScript, Node.js backends, databases, React, UX/UI, and full stack integration with capstone projects.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'technology-software',
      skills: [
        'HTML/CSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Full Stack',
      ],
      features: [
        'Live instructor-led sessions',
        'Real-time full stack capstone projects',
        'Mock interviews & resume support',
        'Placement assistance',
        'Recorded session library',
      ],
      rating: 4.9,
      students: 0,
      image: 'full-stack-web-development',
      imageFile: 'full-stack-web-development.svg',
      color: 'primary',
      isFeatured: true,
      hasDetailPage: true,
    },
    fullStackWebDevelopment
  ),
  definePublishedCourse(
    {
      slug: 'ai-prompt-engineering-generative-ai',
      title: 'AI Prompt Engineering & Generative AI',
      shortDescription:
        'Master prompt engineering, LLMs, RAG, LangChain, image generation, and AI automation with live mentorship and GenAI career placement support.',
      description:
        'A 3-month industry-aligned program with 12 weeks across prompt foundations, OpenAI APIs, embeddings, LangChain, agent architectures, multimodal AI tools, and evaluation optimization.',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      price: 49999,
      originalPrice: 89999,
      category: 'data-ai',
      skills: [
        'Prompt Engineering',
        'Generative AI',
        'ChatGPT',
        'LangChain',
        'RAG',
        'LLMs',
        'AI Automation',
      ],
      features: [
        'Live instructor-led sessions',
        'Real-time GenAI capstone projects',
        'Mock interviews & resume support',
        'Placement assistance',
        'Recorded session library',
      ],
      rating: 4.9,
      students: 0,
      image: 'ai-prompt-engineering-generative-ai',
      imageFile: 'ai-prompt-engineering-generative-ai.svg',
      color: 'accent',
      isFeatured: true,
      hasDetailPage: true,
    },
    aiPromptEngineeringGenerativeAi
  ),
]

/** Listings only (Programs grid + MongoDB base fields) */
export function getCatalogListings() {
  return publishedCourseEntries.map((entry) => entry.listing)
}

/** Detail modules that power CourseDetailView */
export function getCatalogDetails() {
  return publishedCourseEntries.map((entry) => entry.detail).filter(Boolean)
}

export function getPublishedSlugs() {
  return publishedCourseEntries.map((entry) => entry.listing.slug)
}
