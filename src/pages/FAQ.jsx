import { useState } from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/common/Button'
import { usePageTitle } from '../hooks/usePageTitle'

const faqs = [
  {
    id: 1,
    question: 'Who can enroll in EduGram courses?',
    answer:
      'Our programs are suitable for students, fresh graduates, working professionals, career switchers, and anyone looking to upgrade their skills in today\u2019s competitive job market.',
  },
  {
    id: 2,
    question: 'What if I miss a class?',
    answer:
      'No worries! Recorded sessions are available for every class. You can catch up at your own pace without missing anything. Plus, our mentors are available for doubt-clearing sessions throughout the week.',
  },
  {
    id: 3,
    question: 'How is EduGram Technologies different from other institutes?',
    answer:
      'At EduGram Technologies, we focus on practical learning and career readiness. Our programs include hands-on training, real-world projects, portfolio development, and mentorship from experienced industry professionals. We aim to help learners build skills that can be applied directly in real workplace environments.',
  },
  {
    id: 4,
    question: 'Is the training online or offline?',
    answer:
      'Currently, all our programs are delivered online to provide learners with maximum flexibility and accessibility. Our live instructor-led sessions allow students to learn from anywhere while benefiting from interactive classes, hands-on projects, mentorship, and career support. We may introduce offline training options in the future as we continue to expand our offerings.',
  },
  {
    id: 5,
    question: 'Do you provide placement support?',
    answer:
      'Yes, 100% placement assistance is included in all our flagship programs. This includes resume building, LinkedIn profile optimization, mock interviews, soft skills training, and direct introductions to our network of 120+ hiring partners.',
  },
  {
    id: 6,
    question: 'Do you offer scholarships or discounts?',
    answer:
      'Yes, EduGram Technologies periodically offers scholarships, promotional discounts, and special offers for eligible learners. Available benefits may vary by program and enrollment period, so we recommend contacting our admissions team for the latest details.',
  },
  {
    id: 7,
    question: 'Is there a refund policy?',
    answer:
      'EduGram Technologies Pvt Ltd does not offer any refunds for course enrollments or services.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-text pr-4 text-sm sm:text-base leading-snug">
          {faq.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-300 ${
            isOpen ? 'rotate-180 from-primary to-secondary text-white shadow-md shadow-primary/30' : ''
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 border-t border-gray-100 pt-4">
            <p className="text-text/60 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  usePageTitle('FAQ')
  const [openId, setOpenId] = useState(null)

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <Layout>
      <section className="page-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header-center mb-0">
            <span className="section-eyebrow bg-gradient-to-r from-primary/10 to-secondary/10 text-primary">
              FAQ
            </span>
            <h1 className="page-title">
              <span className="section-title-line">Frequently Asked</span>
              <span className="page-title-accent">Questions</span>
            </h1>
            <p className="section-subtitle-center max-w-2xl">
              Find answers to the most common questions about EduGram Technologies programs, learning
              experience, placement support, and enrollment process. For any additional queries, feel free
              to contact our team.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl font-bold text-text mb-2">Still have questions?</h3>
            <p className="text-text/60 mb-6 max-w-lg mx-auto">
              Our team is here to help. Contact EduGram Technologies for personalized guidance and support.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button to="/contact">
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <a
                href="https://wa.me/919036284010"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-[#25D366] hover:bg-[#20bd5a] rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FAQ
