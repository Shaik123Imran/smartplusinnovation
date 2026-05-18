import { useState, useEffect } from 'react'
import { useData } from '../../context/DataContext'

function Testimonials() {
  const { testimonials, loading } = useData()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    setCurrentIndex((prev) => (prev >= testimonials.length ? 0 : prev))
  }, [testimonials.length])

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  if (loading) {
    return (
      <section className="section-block bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-64 bg-white/50 rounded-3xl animate-pulse" />
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="section-block bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header-center">
          <span className="section-eyebrow bg-accent/10 text-accent">Testimonials</span>
          <h2 className="section-title">
            <span className="section-title-line">What Our Students</span>
            <span className="section-title-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="section-subtitle-center">
            Real stories from real students who transformed their careers with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-10 sm:px-14 lg:px-16">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id || index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl transition-shadow duration-300 hover:shadow-2xl min-h-[22rem] sm:min-h-[24rem] lg:min-h-[26rem]">
                    <div className="flex h-full min-h-[inherit] flex-col items-center text-center">
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-6 shadow-lg shadow-primary/30 shrink-0"
                        aria-hidden
                      >
                        {testimonial.image}
                      </div>

                      <div className="flex gap-1 mb-4 sm:mb-6 shrink-0" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 text-text/70 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl w-full break-words px-1">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>

                      <div className="shrink-0 w-full space-y-1">
                        <h4 className="font-bold text-text text-lg sm:text-xl leading-snug">{testimonial.name}</h4>
                        <p className="text-primary font-medium text-sm sm:text-base leading-snug">
                          {testimonial.role} at {testimonial.company}
                        </p>
                        {testimonial.program && (
                          <p className="text-text/50 text-xs sm:text-sm mt-1">{testimonial.program}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-text hover:text-primary hover:shadow-xl transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-text hover:text-primary hover:shadow-xl transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={currentIndex === index ? 'true' : undefined}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-8' : 'bg-text/20 hover:bg-text/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
