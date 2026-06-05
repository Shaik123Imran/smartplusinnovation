import mongoose from 'mongoose'

const syllabusModuleSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    topics: [String],
  },
  { _id: false }
)

const faqSchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
  },
  { _id: false }
)

const courseSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, default: 'All Levels' },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    category: { type: String, required: true },
    skills: [{ type: String }],
    features: [{ type: String }],
    instructor: {
      name: String,
      title: String,
      experience: String,
    },
    rating: { type: Number, default: 4.8 },
    students: { type: Number, default: 0 },
    image: { type: String, default: '' },
    imageFile: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    isPublished: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    hasDetailPage: { type: Boolean, default: false },
    meta: {
      title: String,
      description: String,
    },
    hero: {
      title: String,
      subtitle: String,
      tagline: String,
      badge: String,
    },
    about: {
      intro: String,
      sections: [
        {
          title: String,
          content: String,
        },
      ],
    },
    skillsCovered: [
      {
        name: String,
        description: String,
      },
    ],
    technologies: [
      {
        name: String,
        color: String,
      },
    ],
    learningOutcomes: [String],
    programFeatures: [String],
    careerRoles: [
      {
        title: String,
        description: String,
      },
    ],
    syllabus: [syllabusModuleSchema],
    faqs: [faqSchema],
    whatsappMessage: String,
    courseTestimonials: [
      {
        name: String,
        role: String,
        company: String,
        content: String,
        rating: Number,
        image: String,
      },
    ],
    cta: {
      headline: String,
      subline: String,
    },
    curriculum: {
      title: String,
      subtitle: String,
    },
    realTimeProjects: [
      {
        title: String,
        description: String,
      },
    ],
    projectsSection: {
      title: String,
      subtitle: String,
    },
    portfolio: [
      {
        type: { type: String },
        title: String,
        description: String,
        preview: String,
      },
    ],
    showcaseSection: {
      title: String,
      subtitle: String,
    },
    businessShowcase: [
      {
        type: { type: String },
        title: String,
        description: String,
        preview: String,
      },
    ],
    trainingActivities: [
      {
        name: String,
        description: String,
      },
    ],
    trainingSection: {
      title: String,
      subtitle: String,
    },
    technologiesSection: {
      eyebrow: String,
      title: String,
      subtitle: String,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Course', courseSchema)
