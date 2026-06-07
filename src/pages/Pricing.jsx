import Layout from '../components/layout/Layout'
import { useData } from '../context/DataContext'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import { usePageTitle } from '../hooks/usePageTitle'

function Pricing() {
  usePageTitle('Quote')
  const { pricingPlans } = useData()

  return (
    <Layout>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-text">
              <span className="section-title-line">Choose Your</span>
              <span className="page-title-accent">Plan</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`group relative bg-white rounded-2xl p-8 transform-gpu transition-all duration-300 ${plan.popular
                  ? 'ring-2 ring-primary shadow-2xl scale-[1.03] hover:scale-[1.06]'
                  : 'shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.04]'
                  } hover:-translate-y-1 hover:ring-2 hover:ring-primary/40`}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="bg-white rounded-full px-2 py-1 shadow-sm ring-1 ring-gray-100">
                      <Badge variant="primary">Most Popular</Badge>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                  <p className="text-text/60 text-sm mb-6">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text/70">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-text/40">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  to={plan.id === 'enterprise' ? '/contact' : '/register'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>


        </div>
      </section>
    </Layout>
  )
}

export default Pricing
