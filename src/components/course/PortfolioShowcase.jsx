const previewStyles = {
  mobile: (
    <div className="mx-auto w-24 h-44 rounded-xl border-2 border-neutral-300 bg-white p-2 shadow-sm">
      <div className="h-2 w-8 rounded bg-neutral-200 mb-2" />
      <div className="h-16 rounded-lg bg-violet-100 mb-2" />
      <div className="space-y-1">
        <div className="h-1.5 w-full rounded bg-neutral-100" />
        <div className="h-1.5 w-3/4 rounded bg-neutral-100" />
      </div>
    </div>
  ),
  web: (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-2 shadow-sm">
      <div className="h-2 w-full rounded bg-neutral-200 mb-2" />
      <div className="h-14 rounded bg-sky-50 mb-2" />
      <div className="grid grid-cols-3 gap-1">
        <div className="h-6 rounded bg-neutral-100" />
        <div className="h-6 rounded bg-neutral-100" />
        <div className="h-6 rounded bg-neutral-100" />
      </div>
    </div>
  ),
  wireframe: (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-dashed border-neutral-400 bg-neutral-50 p-3">
      <div className="h-2 w-1/2 rounded bg-neutral-300 mb-3" />
      <div className="h-10 rounded border border-neutral-300 mb-2" />
      <div className="h-2 w-full rounded bg-neutral-200" />
    </div>
  ),
  'case-study': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-3 shadow-sm text-left">
      <div className="text-[10px] font-bold text-neutral-500 uppercase mb-1">Case Study</div>
      <div className="h-2 w-full rounded bg-neutral-800 mb-2" />
      <div className="h-1.5 w-4/5 rounded bg-neutral-200 mb-1" />
      <div className="h-1.5 w-full rounded bg-neutral-100" />
    </div>
  ),
}

function PortfolioShowcase({ items = [] }) {
  if (!items.length) return null

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
      {items.map((item) => (
        <article
          key={item.title}
          className="group rounded-xl border border-neutral-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex items-center justify-center min-h-[160px] bg-gradient-to-br from-neutral-50 to-violet-50/40 p-6 transition-colors group-hover:from-violet-50/60">
            {previewStyles[item.preview] || previewStyles.web}
          </div>
          <div className="p-5 border-t border-neutral-100">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-700">
              {item.type}
            </span>
            <h3 className="font-bold text-neutral-900 mt-1 mb-2">{item.title}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default PortfolioShowcase
