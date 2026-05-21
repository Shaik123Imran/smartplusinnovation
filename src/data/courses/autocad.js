/**
 * AutoCAD — full detail content.
 * Published via catalog.js → /programs/autocad
 *
 * Curriculum: 3 months × 4 weeks = 12 weeks (complete structure preserved).
 */

const autocad = {
  slug: 'autocad',
  hasDetailPage: true,

  meta: {
    title: 'AutoCAD | EduGram Technologies',
    description:
      'Master 2D drafting, 3D modeling, technical drawings, and industry CAD workflows with live projects, mentor support, and placement assistance from EduGram Technologies.',
  },

  hero: {
    title: 'AutoCAD',
    subtitle: 'Industry-Aligned CAD Design & Drafting Program',
    tagline:
      'Build job-ready skills in 2D drafting, 3D modeling, architectural layouts, and mechanical drawings through live sessions, hands-on labs, and real-world design projects.',
    badge: 'Design & Engineering',
    imageFile: 'autocad.svg',
  },

  curriculum: {
    title: 'Complete 12-Week Course Curriculum',
    subtitle:
      'Month 1: AutoCAD Foundations · Month 2: Advanced 2D & 3D Modeling · Month 3: Industry Applications & Capstone',
  },

  about: {
    heading: 'Master Professional CAD Design & Drafting',
    intro:
      'A comprehensive 3-month program for engineering students, diploma holders, architects, interior designers, civil and mechanical engineers, and beginners who want precise technical drawing skills used across construction, manufacturing, and design firms.',
    sections: [
      {
        title: 'AutoCAD Overview',
        content:
          'AutoCAD is the industry-standard computer-aided design software for creating accurate 2D drawings and 3D models. You will learn workspace navigation, precision drafting, layers, blocks, plotting, and professional documentation workflows.',
      },
      {
        title: 'Design & Drafting Industry Importance',
        content:
          'Every building, machine, and infrastructure project begins with technical drawings. CAD skills are essential for architects, civil engineers, mechanical designers, and fabrication teams worldwide.',
      },
      {
        title: 'CAD Applications',
        content:
          'Apply AutoCAD across civil floor plans, mechanical assemblies, electrical schematics, site plans, and 3D visualization—matching how AEC and manufacturing companies deliver client-ready drawings.',
      },
      {
        title: 'Engineering & Design Career Opportunities',
        content:
          'Graduates pursue roles such as AutoCAD Designer, CAD Engineer, Drafting Engineer, Civil CAD Designer, and Mechanical Design Engineer in construction, MEP, automotive, and industrial design sectors.',
      },
    ],
  },

  skillsCovered: [
    { name: '2D Drafting', description: 'Precise line work, shapes, and technical plan creation' },
    { name: '3D Modeling', description: 'Solids, surfaces, extrude, revolve, and visualization' },
    { name: 'Technical Drawing', description: 'Standards-compliant engineering documentation' },
    { name: 'AutoCAD Tools', description: 'Draw, modify, layer, block, and annotation commands' },
    { name: 'Floor Planning', description: 'Residential and commercial layout development' },
    { name: 'Engineering Drawings', description: 'Dimensioning, hatching, and sheet layouts' },
    { name: 'Mechanical Drafting', description: 'Assemblies, isometrics, and exploded views' },
    { name: 'Civil Drafting', description: 'Site plans, utilities, and structural layouts' },
    { name: 'Design Standards', description: 'Scales, units, plotting, and client-ready PDF exports' },
  ],

  technologies: [
    { name: 'AutoCAD' },
    { name: 'AutoCAD 3D' },
    { name: 'CAD Design Tools' },
    { name: 'Drafting Software' },
    { name: 'XREF Workflows' },
    { name: 'Paper Space / Layouts' },
    { name: 'Dynamic Blocks' },
    { name: 'PDF Plotting' },
  ],

  realTimeProjects: [
    {
      title: 'Building Layouts',
      description:
        'Draft residential and commercial floor plans with dimensions, hatching, and utility layers ready for review.',
    },
    {
      title: 'Mechanical Drawings',
      description:
        'Create component drawings, assembly views, isometric projections, and sheet metal layouts for manufacturing contexts.',
    },
    {
      title: 'Electrical Plans',
      description:
        'Develop circuit diagrams, panel layouts, schematic symbols, and wiring documentation for industrial designs.',
    },
    {
      title: 'CAD Drafting Projects',
      description:
        'Weekly lab submissions—from furniture block libraries to full project sheets with plotting standards.',
    },
    {
      title: 'Real-World Design Implementations',
      description:
        'Capstone specialization in civil, mechanical, or electrical tracks with portfolio-ready drawing sets.',
    },
  ],

  learningOutcomes: [
    'Navigate AutoCAD confidently and produce accurate 2D technical drawings',
    'Apply editing, layering, dimensioning, and block workflows for production drafts',
    'Create 3D models with solids, materials, and basic rendering',
    'Deliver civil, mechanical, and electrical drawing sets aligned with industry practice',
    'Prepare plot layouts, PDF exports, and capstone projects for interviews and placements',
  ],

  programFeatures: [
    'Live instructor-led sessions',
    'Recorded session library for revision',
    'Real-time design and drafting projects',
    'Dedicated placement assistance',
    'Resume preparation support',
    'Interview guidance and mock sessions',
    'Live doubt-solving sessions',
    '1:1 mentor support',
  ],

  careerRoles: [
    { title: 'AutoCAD Designer', description: 'Produce detailed CAD drawings for design teams' },
    { title: 'CAD Engineer', description: 'Support engineering projects with accurate models and plans' },
    { title: 'Drafting Engineer', description: 'Convert concepts into manufacturing-ready drafts' },
    { title: 'Civil CAD Designer', description: 'Specialize in architectural and site planning drawings' },
    { title: 'Mechanical Design Engineer', description: 'Develop mechanical parts, assemblies, and 3D models' },
  ],

  syllabus: [
    {
      id: 'm1w1',
      month: 'Month 1: Foundations of AutoCAD',
      title: 'Week 1: Introduction to AutoCAD & Basics',
      topics: [
        'AutoCAD environment and navigation',
        'Drawing tools: line, circle, rectangle, polyline',
        'Units, scales, and limits setup',
        'Lab: Create a basic floor plan outline',
      ],
    },
    {
      id: 'm1w2',
      month: 'Month 1: Foundations of AutoCAD',
      title: 'Week 2: Editing & Modifying Commands',
      topics: [
        'Trim, extend, offset, mirror, rotate, and scale',
        'Object snaps and precision drawing',
        'Layers and line types',
        'Lab: Draft a simple machine component in 2D',
      ],
    },
    {
      id: 'm1w3',
      month: 'Month 1: Foundations of AutoCAD',
      title: 'Week 3: Annotations & Dimensions',
      topics: [
        'Text, leaders, and dimension styles',
        'Hatch patterns and gradients',
        'Lab: Annotate a civil floor plan with dimensions',
      ],
    },
    {
      id: 'm1w4',
      month: 'Month 1: Foundations of AutoCAD',
      title: 'Week 4: Blocks, Groups & Attributes',
      topics: [
        'Block creation and dynamic blocks',
        'Inserting and managing blocks',
        'Attributes for repeated components',
        'Lab: Design a furniture block library',
      ],
    },
    {
      id: 'm2w5',
      month: 'Month 2: Advanced 2D Drafting & Introduction to 3D',
      title: 'Week 5: Advanced Drafting Techniques',
      topics: [
        'External references (XREFs)',
        'Parametric constraints',
        'Advanced layer management',
        'Lab: Draft a mechanical assembly drawing',
      ],
    },
    {
      id: 'm2w6',
      month: 'Month 2: Advanced 2D Drafting & Introduction to 3D',
      title: 'Week 6: Plotting & Printing',
      topics: [
        'Layouts, viewports, and paper space',
        'Plot styles and scales',
        'PDF exports for clients and submissions',
        'Lab: Prepare a project sheet for submission',
      ],
    },
    {
      id: 'm2w7',
      month: 'Month 2: Advanced 2D Drafting & Introduction to 3D',
      title: 'Week 7: 3D Modeling Basics',
      topics: [
        'Introduction to the 3D interface',
        'Wireframe and surface modeling',
        'Solid primitives: box, cylinder, sphere',
        'Lab: Model a 3D mechanical part',
      ],
    },
    {
      id: 'm2w8',
      month: 'Month 2: Advanced 2D Drafting & Introduction to 3D',
      title: 'Week 8: 3D Editing & Visualization',
      topics: [
        'Extrude, revolve, sweep, and loft',
        '3D modify tools: slice, fillet, chamfer',
        'Materials and rendering basics',
        'Lab: Create a 3D architectural model of a room',
      ],
    },
    {
      id: 'm3w9',
      month: 'Month 3: Industry Applications & Capstone Projects',
      title: 'Week 9: AutoCAD for Civil & Architecture',
      topics: [
        'Residential building layouts',
        'Electrical and plumbing drawings',
        'Site plan drafting',
        'Lab: Draft a 2BHK floor plan with utilities',
      ],
    },
    {
      id: 'm3w10',
      month: 'Month 3: Industry Applications & Capstone Projects',
      title: 'Week 10: AutoCAD for Mechanical & Manufacturing',
      topics: [
        'Isometric projections',
        'Assembly drawings and exploded views',
        'Sheet metal drafting',
        'Lab: Draft a mechanical gearbox assembly',
      ],
    },
    {
      id: 'm3w11',
      month: 'Month 3: Industry Applications & Capstone Projects',
      title: 'Week 11: AutoCAD for Electrical & Industrial Design',
      topics: [
        'Circuit diagrams and panel layouts',
        'Schematic symbols',
        'Industrial piping drawings',
        'Lab: Create an electrical wiring diagram',
      ],
    },
    {
      id: 'm3w12',
      month: 'Month 3: Industry Applications & Capstone Projects',
      title: 'Week 12: Capstone Project & Career Prep',
      topics: [
        'Choose specialization: Civil, Mechanical, or Electrical',
        'Capstone — Architecture: Residential building design',
        'Capstone — Mechanical: Automotive part assembly',
        'Capstone — Electrical: Industrial wiring system',
      ],
    },
  ],

  faqs: [
    {
      question: 'Who can join this AutoCAD program?',
      answer:
        'Engineering students, diploma holders, architects, interior designers, civil and mechanical engineers, job seekers, and beginners interested in CAD drafting careers.',
    },
    {
      question: 'Do I need prior CAD experience?',
      answer:
        'No. Month 1 starts with AutoCAD basics, navigation, and simple floor plans before progressing to advanced 2D, 3D, and industry applications.',
    },
    {
      question: 'Will I work on real projects?',
      answer:
        'Yes. Weekly labs, minor projects, and a Month 3 capstone in your chosen specialization (civil, mechanical, or electrical) build a portfolio-ready drawing set.',
    },
    {
      question: 'Is 3D modeling included?',
      answer:
        'Yes. Month 2 covers 3D solids, editing, materials, rendering basics, and architectural room modeling alongside advanced 2D workflows.',
    },
    {
      question: 'Is placement support provided?',
      answer:
        'EduGram offers placement assistance, resume preparation, interview guidance, and career counseling for CAD and drafting roles.',
    },
    {
      question: 'What will I be able to deliver after the course?',
      answer:
        'Professional 2D plans, annotated drawings, 3D models, plotted PDF sheets, and a capstone project suitable for interviews and internships.',
    },
  ],

  testimonials: [
    {
      name: 'Divya Sharma',
      role: 'Civil CAD Designer',
      company: 'BuildCraft Engineers',
      content:
        'The 2BHK floor plan lab and plotting module were exactly what I needed. I use AutoCAD daily in my new drafting role.',
      rating: 5,
      image: 'D',
    },
    {
      name: 'Rohit Patel',
      role: 'Mechanical Design Engineer',
      company: 'Precision Mfg Ltd',
      content:
        'Assembly drawings and 3D modeling weeks were thorough. The gearbox capstone became the centerpiece of my portfolio.',
      rating: 5,
      image: 'R',
    },
    {
      name: 'Lakshmi Iyer',
      role: 'AutoCAD Designer',
      company: 'UrbanPlan Studio',
      content:
        'Clear mentorship from basics to XREFs and layouts. Recorded sessions helped me practice until placements.',
      rating: 5,
      image: 'L',
    },
  ],

  cta: {
    headline: 'Start Your CAD Design Career',
    subline:
      'Join the next cohort of AutoCAD professionals trained by EduGram Technologies with hands-on projects and mentor support.',
  },

  pricing: {
    price: 49999,
    originalPrice: 89999,
  },

  whatsappMessage:
    'Hello EduGram Technologies, I am interested in the AutoCAD program. Please share course details, fees, and the next batch schedule.',
}

export default autocad
