/** Preserved original mission narrative, vision, and demo video */

function AboutLegacyStory({ videoUrl }) {
  return (
    <section className="section-block bg-gradient-to-br from-primary/5 via-emerald/[0.02] to-secondary/5" aria-labelledby="about-legacy-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-eyebrow bg-gradient-to-r from-primary/10 to-secondary/10 text-primary mb-4 inline-flex">
              Our Story
            </span>
            <h2 id="about-legacy-heading" className="text-3xl lg:text-4xl font-extrabold text-text mb-6">
              Our Mission in Action
            </h2>
            <p className="text-text/70 text-lg leading-relaxed mb-6">
              We&apos;re on a mission to democratize tech education and create pathways to successful careers
              in technology. Through hands-on learning, expert mentorship, and strong industry connections,
              we help students transform their lives.
            </p>
            <p className="text-text/70 text-lg leading-relaxed mb-10">
              Since our founding, we&apos;ve helped thousands of students from diverse backgrounds break into tech,
              land jobs at top companies, and build fulfilling careers. Our 95% placement rate speaks to
              our commitment to student success.
            </p>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-text mb-6">Our Vision</h2>
            <p className="text-text/70 text-lg leading-relaxed">
              To transform the educational landscape by cultivating an environment where technology,
              continuous learning, and forward-thinking intersect. We aim to inspire and equip every
              individual to navigate and lead with absolute confidence in a fast-paced, ever-changing
              global economy.
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl transform rotate-3 opacity-20"
              aria-hidden
            />
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutLegacyStory
