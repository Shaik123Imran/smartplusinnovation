import Layout from '../components/layout/Layout'
import { usePageTitle } from '../hooks/usePageTitle'

function Privacy() {
  usePageTitle('Privacy Policy')
  return (
    <Layout>
      <section className="page-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-text/60 mb-8">
            This is a placeholder privacy policy. Please replace this content with the exact text
            from your official Privacy Policies document.
          </p>
          <div className="space-y-4 text-text/70 leading-relaxed text-sm">
            <p>
              We respect your privacy and are committed to protecting your personal data. We use
              your information only to contact you about programs you are interested in and to
              improve our services.
            </p>
            <p>
              By submitting your details through our forms, you consent to us storing and
              processing your data for the purposes of providing educational information, handling
              enquiries, and sending relevant updates.
            </p>
            <p>
              You may request deletion or correction of your data at any time by contacting us
              through the contact page.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Privacy

