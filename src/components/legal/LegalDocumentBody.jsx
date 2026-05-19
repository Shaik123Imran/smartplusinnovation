function LegalDocumentBody({ sections }) {
  return (
    <article className="legal-document-body px-5 py-6 sm:px-8 sm:py-8 text-text/80">
      {sections.map((section, index) => (
        <section key={index} className="mb-8 last:mb-0">
          {section.heading && (
            <h3 className="text-base sm:text-lg font-bold text-text mb-3">{section.heading}</h3>
          )}
          {section.paragraphs?.map((paragraph, i) => (
            <p key={i} className="text-sm sm:text-base leading-relaxed mb-3 last:mb-0">
              {paragraph}
            </p>
          ))}
          {section.bullets?.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed">
              {section.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  )
}

export default LegalDocumentBody
