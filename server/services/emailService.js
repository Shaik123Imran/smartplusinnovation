import nodemailer from 'nodemailer'

const getTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    return null
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

const sendMail = async ({ to, subject, html }) => {
  const transporter = getTransporter()
  if (!transporter) {
    console.warn('Email skipped (SMTP not configured):', subject)
    return { skipped: true }
  }

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to,
    subject,
    html,
  })
  return { sent: true }
}

export const sendWelcomeEmail = (user) =>
  sendMail({
    to: user.email,
    subject: 'Welcome to EduGram Technologies Pvt Ltd',
    html: `<p>Hi ${user.fullName},</p><p>Welcome to EduGram Technologies! Your account has been created successfully.</p><p><a href="${process.env.CLIENT_URL}">Start learning</a></p>`,
  })

export const sendPasswordResetEmail = (user, resetUrl) =>
  sendMail({
    to: user.email,
    subject: 'Reset your EduGram password',
    html: `<p>Hi ${user.fullName},</p><p>Click the link below to reset your password (valid for 1 hour):</p><p><a href="${resetUrl}">${resetUrl}</a></p><p>If you did not request this, ignore this email.</p>`,
  })

export const sendContactNotification = (data) =>
  sendMail({
    to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
    subject: `New contact: ${data.name}`,
    html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong> ${data.message || data.subject}</p>`,
  })

export const sendInterestNotification = (data) =>
  sendMail({
    to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
    subject: `New interest registration: ${data.name}`,
    html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone}</p><p><strong>Course:</strong> ${data.courseType}</p>`,
  })
