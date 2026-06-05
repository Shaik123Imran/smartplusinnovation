const dataAnalyticsPowerBi = {
  slug: 'data-analytics-and-business-intelligence-with-power-bi',
  hasDetailPage: true,

  meta: {
    title: 'Data Analytics and Business Intelligence with Power BI | EduGram Technologies',
    description:
      'Master Power BI, DAX, Power Query, and data modeling. Build interactive dashboards and automate business insights with real-world capstone projects.',
  },

  hero: {
    title: 'Data Analytics and Business Intelligence with Power BI',
    subtitle: 'Industry-Aligned Data Analytics & BI Program',
    tagline:
      'Build job-ready skills in data extraction, transformation, modeling, and visual storytelling using Microsoft Power BI.',
    badge: 'Data & Analytics',
    imageFile: 'data-analytics-power-bi.svg',
  },

  curriculum: {
    title: 'Complete 12-Week Course Curriculum',
    subtitle:
      'Month 1: Data Prep & Modeling · Month 2: Analytics & Visualization · Month 3: Deployment & Projects',
  },

  about: {
    heading: 'Master Data-Driven Decision Making with Power BI',
    intro:
      'This hands-on course takes students from raw data to robust, automated business insights using Microsoft Power BI. Designed to mirror real-world corporate workflows, the curriculum covers the complete data lifecycle: data extraction and transformation (ETL), relational data modeling, advanced analytical calculations, and interactive visual storytelling. Students will learn how to turn messy, disparate datasets into clean, scalable models and polished dashboards that drive business decisions.',
    sections: [
      {
        title: 'Prerequisites',
        content:
          'No prior coding experience is required. Basic familiarity with Microsoft Excel (e.g., VLOOKUPs, Pivot Tables) and a general understanding of business metrics (sales, inventory, HR) are highly recommended.',
      },
      {
        title: 'Tools & Technologies Covered',
        content:
          'Power BI Desktop — The primary development environment. Power Query (M Code) — The engine used for data preparation and cleaning. DAX (Data Analysis Expressions) — The formula language used for deep data analysis. Power BI Service (Cloud) — The workspace used for deployment, sharing, and security management.',
      },
      {
        title: 'Capstone Outcome',
        content:
          'The course culminates in two portfolio-ready capstone projects. You will act as a standalone Data Analyst to ingest raw, untidy data, architect a data model, write complex DAX logic, and design an interactive, executive-facing dashboard that answers specific business questions.',
      },
    ],
  },

  skillsCovered: [
    { name: 'Power BI', description: 'End-to-end dashboard development and business reporting' },
    { name: 'Power Query', description: 'Data extraction, cleaning, and automated ETL processes' },
    { name: 'DAX', description: 'Advanced calculations, measures, and time intelligence' },
    { name: 'Data Modeling', description: 'Star schema design with fact and dimension tables' },
    { name: 'Data Visualization', description: 'Interactive charts, tooltips, and drill-through reports' },
    { name: 'SQL', description: 'Querying databases and preparing analytical datasets' },
    { name: 'Excel', description: 'Foundational data analysis and business metrics' },
    { name: 'Power BI Service', description: 'Cloud deployment, sharing, and row-level security' },
  ],

  technologies: [
    { name: 'Power BI Desktop' },
    { name: 'Power Query' },
    { name: 'DAX' },
    { name: 'Power BI Service' },
    { name: 'SQL' },
    { name: 'Excel' },
  ],

  realTimeProjects: [
    {
      title: 'Capstone Project 1',
      description:
        'Act as a standalone Data Analyst to ingest raw, untidy data, architect a data model, write complex DAX logic, and design an interactive, executive-facing dashboard that answers specific business questions.',
    },
    {
      title: 'Capstone Project 2',
      description:
        'A second portfolio-ready project covering the full analytics lifecycle — from data extraction and transformation to deployment on Power BI Service with row-level security.',
    },
    {
      title: 'Business Dashboards',
      description:
        'Build interactive dashboards with custom tooltips, drill-throughs, and bookmark-driven navigation for executive decision-making.',
    },
  ],

  learningOutcomes: [
    'Connect to various data sources (Excel, SQL databases, web data) and automate the ETL process using Power Query',
    'Design efficient Star Schemas using Fact and Dimension tables to optimize performance and prevent inaccurate cross-filtering',
    'Master DAX to create dynamic measures, calculated columns, and time-intelligence metrics (YoY growth, rolling averages)',
    'Build intuitive, UI/UX-friendly dashboards with appropriate chart types, custom tooltips, drill-throughs, and bookmark-driven navigation',
    'Publish reports to Power BI Service, set up automated data refreshes, and implement Row-Level Security (RLS)',
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
    'Weekly assignments and mentor feedback',
    'Certificate on completion',
  ],

  careerRoles: [
    { title: 'Data Analyst', description: 'Analyze data and deliver insights for business teams' },
    { title: 'BI Analyst', description: 'Design dashboards and reporting for stakeholders' },
    { title: 'Power BI Developer', description: 'Build and maintain enterprise BI solutions' },
    { title: 'Business Analyst', description: 'Bridge business needs with analytics solutions' },
    { title: 'Data Visualization Specialist', description: 'Create compelling visual stories from data' },
  ],

  syllabus: [
    {
      id: 'm1w1',
      month: 'Month 1: Data Prep & Modeling',
      title: 'Week 1: Power Query Basics (ETL)',
      topics: [
        'Introduction to Power BI Desktop and interface',
        'Connecting to data sources: Excel, CSV, SQL databases, web',
        'Power Query editor fundamentals: navigating the query editor',
        'Basic transformations: filtering, sorting, splitting columns',
        'Handling missing values and data type conversions',
      ],
    },
    {
      id: 'm1w2',
      month: 'Month 1: Data Prep & Modeling',
      title: 'Week 2: Advanced Power Query',
      topics: [
        'Merging and appending queries (union vs join)',
        'Grouping and aggregating data in Power Query',
        'Creating custom columns with M code basics',
        'Parameterized queries for dynamic data refresh',
        'Automating ETL processes with query dependencies',
      ],
    },
    {
      id: 'm1w3',
      month: 'Month 1: Data Prep & Modeling',
      title: 'Week 3: Data Modeling (Star Schema)',
      topics: [
        'Introduction to data modeling concepts',
        'Fact tables vs dimension tables',
        'Star schema design principles',
        'Creating relationships and cardinality',
        'Filter context and cross-filtering direction',
      ],
    },
    {
      id: 'm1w4',
      month: 'Month 1: Data Prep & Modeling',
      title: 'Week 4: Introduction to DAX',
      topics: [
        'DAX syntax and evaluation context basics',
        'Calculated columns vs measures',
        'Aggregation functions: SUM, COUNT, AVERAGE, MIN, MAX',
        'Filter functions: CALCULATE, FILTER, ALL',
        'Iterator functions: SUMX, AVERAGEX',
      ],
    },
    {
      id: 'm2w1',
      month: 'Month 2: Analytics & Visualization',
      title: 'Week 5: Advanced DAX & Time Intelligence',
      topics: [
        'Time intelligence patterns: SAMEPERIODLASTYEAR, TOTALYTD',
        'Rolling averages and moving totals',
        'Dynamic ranking with RANKX',
        'SWITCH and logical conditions for smart measures',
        'Performance optimization: avoiding slow measures',
      ],
    },
    {
      id: 'm2w2',
      month: 'Month 2: Analytics & Visualization',
      title: 'Week 6: Visualization Basics',
      topics: [
        'Choosing the right chart type for your data',
        'Formatting and customizing visuals',
        'Slicers, filters, and date range selectors',
        'Maps, tables, and matrix visuals',
        'KPIs and conditional formatting',
      ],
    },
    {
      id: 'm2w3',
      month: 'Month 2: Analytics & Visualization',
      title: 'Week 7: Advanced Interactivity',
      topics: [
        'Bookmarks and button-driven navigation',
        'Custom tooltips with rich visuals',
        'Drill-through pages for detailed analysis',
        'Drill-down hierarchy creation',
        'Report page tooltips and sync slicers',
      ],
    },
    {
      id: 'm2w4',
      month: 'Month 2: Analytics & Visualization',
      title: 'Week 8: Dashboard UI/UX & Storytelling',
      topics: [
        'Design principles for executive dashboards',
        'Layout and grid best practices',
        'Color theory and accessibility in reports',
        'Creating a narrative flow with report pages',
        'Mobile layout optimization',
      ],
    },
    {
      id: 'm3w1',
      month: 'Month 3: Deployment & Projects',
      title: 'Week 9: Power BI Service (Cloud & Apps)',
      topics: [
        'Publishing reports to Power BI Service',
        'Creating and managing workspaces',
        'Building and sharing apps with stakeholders',
        'Scheduled data refresh configuration',
        'Gateway setup for on-premises data sources',
      ],
    },
    {
      id: 'm3w2',
      month: 'Month 3: Deployment & Projects',
      title: 'Week 10: Security (RLS) & Data Refresh',
      topics: [
        'Row-Level Security (RLS) implementation',
        'Static vs dynamic RLS with USERPRINCIPALNAME',
        'Data refresh best practices and troubleshooting',
        'Incremental refresh for large datasets',
        'Usage metrics and report adoption tracking',
      ],
    },
    {
      id: 'm3w3',
      month: 'Month 3: Deployment & Projects',
      title: 'Week 11: Capstone Project 1',
      topics: [
        'Project kickoff: business requirements gathering',
        'Data sourcing and ETL with Power Query',
        'Data modeling and DAX measure creation',
        'Dashboard design and interactive report building',
        'Review and mentor feedback session',
      ],
    },
    {
      id: 'm3w4',
      month: 'Month 3: Deployment & Projects',
      title: 'Week 12: Capstone Project 2 & Portfolio',
      topics: [
        'Second capstone with cross-domain dataset',
        'Advanced DAX scenarios and time intelligence',
        'Power BI Service deployment with RLS',
        'Portfolio presentation and walkthrough',
        'Interview preparation with BI case studies',
      ],
    },
  ],

  faqs: [
    {
      question: 'Do I need coding experience to join this program?',
      answer:
        'No. No prior coding experience is required. Basic familiarity with Microsoft Excel (VLOOKUPs, Pivot Tables) is helpful but not mandatory.',
    },
    {
      question: 'What tools will I learn?',
      answer:
        'You will master Power BI Desktop, Power Query (M Code), DAX (Data Analysis Expressions), and Power BI Service for cloud deployment and security.',
    },
    {
      question: 'Will I get a certificate?',
      answer:
        'Yes. You will receive a course completion certificate from EduGram Technologies Pvt Ltd.',
    },
    {
      question: 'Are real-time projects included?',
      answer:
        'Yes. The program includes two portfolio-ready capstone projects where you act as a Data Analyst to solve real business problems end-to-end.',
    },
    {
      question: 'Is placement support provided?',
      answer:
        'Yes. EduGram offers placement assistance, resume reviews, mock interviews, LinkedIn optimization, and career counseling.',
    },
    {
      question: 'How many lectures are included?',
      answer:
        'The program includes 24-30 live instructor-led sessions spread across 12 weeks, with recorded sessions available for revision.',
    },
  ],

  testimonials: [
    {
      name: 'Priya Sharma',
      role: 'BI Analyst',
      company: 'E-Commerce Analytics Co.',
      content:
        'The Power BI program gave me a complete end-to-end understanding of data analytics. The capstone projects were exactly what I needed for my portfolio.',
      rating: 5,
      image: 'P',
    },
    {
      name: 'Rahul Mehta',
      role: 'Data Analyst',
      company: 'FinTech Solutions',
      content:
        'Learning DAX and Power Query changed how I approach data entirely. The real-world business cases made learning practical and job-ready.',
      rating: 5,
      image: 'R',
    },
    {
      name: 'Sneha Patel',
      role: 'Business Analyst',
      company: 'Retail Insights',
      content:
        'The curriculum is very well structured — from basics to advanced deployment. The mentor feedback on my capstone dashboard was invaluable.',
      rating: 5,
      image: 'S',
    },
  ],

  cta: {
    headline: 'Start Your Data Analytics Career',
    subline:
      'Join the next cohort and master Power BI, DAX, and business intelligence with EduGram Technologies mentor support.',
  },

  pricing: {
    price: 49999,
    originalPrice: 89999,
  },

  whatsappMessage:
    'Hello EduGram Technologies, I am interested in the Data Analytics and Business Intelligence with Power BI program. Please share course details, fees, and the next batch schedule.',
}

export default dataAnalyticsPowerBi
