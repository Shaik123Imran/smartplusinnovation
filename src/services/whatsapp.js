/**
 * Opens WhatsApp with a prefilled message after registration (optional).
 * Set VITE_WHATSAPP_NUMBER in .env (e.g. 919876543210, country code, no +).
 */
export function openWhatsAppRegistration(formData) {
  const raw = import.meta.env.VITE_WHATSAPP_NUMBER
  if (!raw) return false

  const number = String(raw).replace(/\D/g, '')
  if (!number) return false

  const courseLabel = formData.courseLabel || formData.courseType || 'your programs'
  const message = [
    'Hi EduGram Technologies,',
    'I would like to register my interest.',
    '',
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    `Phone: ${formData.phone}`,
    `City: ${formData.city}`,
    `Course: ${courseLabel}`,
  ].join('\n')

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
  return true
}

export function isWhatsAppConfigured() {
  return Boolean(import.meta.env.VITE_WHATSAPP_NUMBER)
}
