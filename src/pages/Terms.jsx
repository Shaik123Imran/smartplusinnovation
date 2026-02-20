import Layout from '../components/layout/Layout'

function Terms() {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-text mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-text/60 mb-8">
            This is a placeholder set of terms and conditions. Please replace this content with
            the exact text from your official Terms and Conditions document.
          </p>
          <div className="space-y-4 text-text/70 leading-relaxed text-sm">
            <p>
              By enrolling in our programs or submitting your information, you agree to abide by
              our policies, code of conduct, and payment terms as defined in your official
              documents.
            </p>
            <p>
              Course availability, pricing, schedules, and certification criteria may change, and
              we reserve the right to update them at any time. Any such changes will be reflected
              on the website.
            </p>
            <p>
              Misuse of the platform, sharing of account credentials, or violation of academic
              integrity policies may lead to suspension or termination of access.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Terms

