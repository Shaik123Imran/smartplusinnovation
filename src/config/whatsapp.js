/** WhatsApp business contact — digits only (no + or spaces) for wa.me links */
export const WHATSAPP_NUMBER = '919036284010'

export const WHATSAPP_DISPLAY_NUMBER = '+91 9036284010'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello EduGram Technologies, I would like to know more about your courses, placements, fees structure, and career guidance programs.'

export const WHATSAPP_QUICK_QUESTIONS = [
  {
    id: 'course-details',
    label: 'Course Details',
    message:
      'Hi EduGram Technologies, I want to know about available courses and technologies.',
  },
  {
    id: 'placement',
    label: 'Placement Assistance',
    message: 'Hi, I would like to know about placement support and job assistance.',
  },
  {
    id: 'fees',
    label: 'Fees Structure',
    message: 'Hello, can you share the fees structure and payment options?',
  },
  {
    id: 'demo',
    label: 'Demo Class',
    message: 'I would like to attend a demo session. Please share the details.',
  },
  {
    id: 'career',
    label: 'Career Guidance',
    message: 'Hi, I need career guidance regarding IT courses and placements.',
  },
  {
    id: 'internship',
    label: 'Internship Programs',
    message: 'Please provide details about internships and real-time projects.',
  },
  {
    id: 'fullstack',
    label: 'Full Stack Development',
    message:
      'I am interested in Full Stack Development training. Please share details.',
  },
  {
    id: 'data-science',
    label: 'Data Science / AI',
    message:
      'I want to know about Data Science, AI, and Machine Learning programs.',
  },
]

/** Build a wa.me URL with an optional prefilled message (UTF-8 encoded). */
export function buildWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message ?? WHATSAPP_DEFAULT_MESSAGE)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

/** Open WhatsApp chat in a new tab (desktop) or app (mobile). */
export function openWhatsAppChat(message) {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}
