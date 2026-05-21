const previewStyles = {
  'pitch-deck': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-4 shadow-sm text-left">
      <div className="text-[10px] font-bold text-amber-700 uppercase mb-2">Pitch Deck</div>
      <div className="h-2 w-full rounded bg-neutral-900 mb-2" />
      <div className="h-1.5 w-4/5 rounded bg-neutral-200 mb-1" />
      <div className="h-1.5 w-full rounded bg-neutral-100 mb-3" />
      <div className="h-8 w-24 rounded-full bg-neutral-900" />
    </div>
  ),
  'business-model': (
    <div className="grid grid-cols-2 gap-2 w-full max-w-[200px]">
      <div className="h-14 rounded-lg bg-amber-50 border border-amber-200" />
      <div className="h-14 rounded-lg bg-neutral-50 border border-neutral-200" />
      <div className="col-span-2 h-10 rounded-lg bg-neutral-100 border border-neutral-200" />
    </div>
  ),
  'startup-idea': (
    <div className="w-full max-w-[200px] rounded-xl border-2 border-neutral-300 bg-white p-4 shadow-sm">
      <div className="w-10 h-10 rounded-lg bg-amber-400 mb-3 flex items-center justify-center text-neutral-900 font-bold text-lg">
        ★
      </div>
      <div className="h-2 w-full rounded bg-neutral-800 mb-2" />
      <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
    </div>
  ),
  innovation: (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-dashed border-neutral-400 bg-gradient-to-br from-amber-50 to-white p-4">
      <div className="text-[10px] font-bold text-neutral-600 uppercase mb-2">Innovation</div>
      <div className="flex gap-1">
        <div className="h-8 w-8 rounded-full bg-neutral-200" />
        <div className="h-8 w-8 rounded-full bg-amber-200" />
        <div className="h-8 w-8 rounded-full bg-neutral-300" />
      </div>
    </div>
  ),
  'sales-funnel': (
    <div className="w-full max-w-[200px] space-y-2">
      <div className="h-8 rounded-lg bg-emerald-100 border border-emerald-200 text-center text-[10px] font-bold text-emerald-800 flex items-center justify-center">
        Leads
      </div>
      <div className="h-8 rounded-lg bg-sky-100 border border-sky-200 text-center text-[10px] font-bold text-sky-800 flex items-center justify-center mx-4">
        Convert
      </div>
      <div className="h-8 rounded-lg bg-neutral-900 text-center text-[10px] font-bold text-white flex items-center justify-center">
        Revenue
      </div>
    </div>
  ),
  campaign: (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-3 shadow-sm">
      <div className="text-[10px] font-bold text-rose-700 uppercase mb-2">Campaign</div>
      <div className="h-12 rounded bg-gradient-to-r from-rose-50 to-orange-50 mb-2" />
      <div className="grid grid-cols-3 gap-1">
        <div className="h-6 rounded bg-neutral-100" />
        <div className="h-6 rounded bg-neutral-200" />
        <div className="h-6 rounded bg-neutral-100" />
      </div>
    </div>
  ),
  'lead-gen': (
    <div className="w-full max-w-[200px] rounded-xl border-2 border-neutral-300 bg-white p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-blue-100" />
        <div className="flex-1 h-2 rounded bg-neutral-200" />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-blue-100" />
        <div className="flex-1 h-2 rounded bg-neutral-200" />
      </div>
      <div className="text-[10px] text-neutral-500 font-medium">+24 leads</div>
    </div>
  ),
  presentation: (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-4 shadow-sm">
      <div className="h-2 w-16 rounded bg-indigo-200 mb-3" />
      <div className="h-20 rounded-lg bg-indigo-50 border border-indigo-100 flex items-end justify-center gap-1 p-2">
        <div className="w-3 h-8 bg-indigo-300 rounded-t" />
        <div className="w-3 h-12 bg-indigo-400 rounded-t" />
        <div className="w-3 h-6 bg-indigo-300 rounded-t" />
      </div>
      <div className="text-[10px] text-neutral-500 mt-2 font-medium">Slide deck</div>
    </div>
  ),
  'mock-interview': (
    <div className="w-full max-w-[200px] rounded-xl border-2 border-neutral-300 bg-white p-4">
      <div className="flex gap-2 mb-3">
        <div className="w-10 h-10 rounded-full bg-slate-200" />
        <div className="flex-1 space-y-1">
          <div className="h-2 rounded bg-neutral-800 w-3/4" />
          <div className="h-1.5 rounded bg-neutral-200" />
        </div>
      </div>
      <div className="h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-[10px] flex items-center justify-center text-emerald-800 font-semibold">
        STAR Method
      </div>
    </div>
  ),
  'communication-workshop': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-4">
      <div className="flex justify-center gap-1 mb-2">
        <div className="w-8 h-8 rounded-full bg-sky-100" />
        <div className="w-8 h-8 rounded-full bg-sky-200 -ml-2" />
        <div className="w-8 h-8 rounded-full bg-sky-100 -ml-2" />
      </div>
      <div className="h-10 rounded bg-sky-50 border border-sky-100" />
      <div className="text-[10px] text-center text-neutral-500 mt-2">Group discussion</div>
    </div>
  ),
  'personality-dev': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-dashed border-indigo-300 bg-gradient-to-br from-indigo-50 to-white p-4 text-center">
      <div className="text-2xl mb-2">✦</div>
      <div className="text-[10px] font-bold text-indigo-800 uppercase">Confidence</div>
      <div className="h-1.5 w-full rounded bg-indigo-200 mt-2" />
    </div>
  ),
  acquisition: (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-4 text-left">
      <div className="text-[10px] font-bold text-emerald-700 uppercase mb-2">Growth</div>
      <div className="flex items-end gap-1 h-16">
        <div className="w-4 bg-emerald-200 rounded-t h-6" />
        <div className="w-4 bg-emerald-300 rounded-t h-10" />
        <div className="w-4 bg-emerald-500 rounded-t h-14" />
        <div className="w-4 bg-emerald-600 rounded-t h-12" />
      </div>
    </div>
  ),
  'ml-workflow': (
    <div className="w-full max-w-[200px] space-y-1.5">
      <div className="flex items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-2 py-1.5 text-[9px] font-semibold text-violet-800">
        Data
      </div>
      <div className="text-center text-[8px] text-neutral-400">↓</div>
      <div className="flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-2 py-1.5 text-[9px] font-semibold text-sky-800">
        Train
      </div>
      <div className="text-center text-[8px] text-neutral-400">↓</div>
      <div className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-900 px-2 py-1.5 text-[9px] font-semibold text-white">
        Deploy
      </div>
    </div>
  ),
  'prediction-model': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-4 shadow-sm">
      <div className="text-[10px] font-bold text-emerald-700 uppercase mb-2">Accuracy</div>
      <div className="text-2xl font-bold text-neutral-900 mb-1">94.2%</div>
      <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
        <div className="h-full w-[94%] rounded-full bg-emerald-500" />
      </div>
      <div className="grid grid-cols-2 gap-1 mt-3 text-[9px] text-neutral-500">
        <span>Precision</span>
        <span className="text-right font-semibold text-neutral-800">0.91</span>
        <span>Recall</span>
        <span className="text-right font-semibold text-neutral-800">0.89</span>
      </div>
    </div>
  ),
  'data-viz': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-4 shadow-sm">
      <div className="flex items-end justify-center gap-1.5 h-16 mb-2">
        <div className="w-4 h-6 bg-sky-300 rounded-t" />
        <div className="w-4 h-10 bg-sky-400 rounded-t" />
        <div className="w-4 h-14 bg-sky-500 rounded-t" />
        <div className="w-4 h-8 bg-sky-300 rounded-t" />
        <div className="w-4 h-12 bg-neutral-800 rounded-t" />
      </div>
      <div className="h-1 w-full rounded bg-gradient-to-r from-sky-200 via-sky-400 to-neutral-800" />
      <div className="text-[10px] text-neutral-500 mt-2 font-medium text-center">EDA & charts</div>
    </div>
  ),
  'jupyter-notebook': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white overflow-hidden shadow-sm">
      <div className="flex gap-1 px-2 py-1.5 bg-neutral-100 border-b border-neutral-200">
        <div className="w-2 h-2 rounded-full bg-rose-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="p-3 font-mono text-[9px] text-left space-y-1">
        <div className="text-violet-700">In [1]:</div>
        <div className="text-neutral-700">model.predict(X_test)</div>
        <div className="text-emerald-700">Out: array([...])</div>
      </div>
    </div>
  ),
  'web-app-preview': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white overflow-hidden shadow-sm">
      <div className="h-6 bg-neutral-100 border-b border-neutral-200 flex items-center gap-1 px-2">
        <div className="w-2 h-2 rounded-full bg-rose-300" />
        <div className="w-2 h-2 rounded-full bg-amber-300" />
        <div className="w-2 h-2 rounded-full bg-emerald-300" />
      </div>
      <div className="p-3 space-y-2">
        <div className="h-2 w-3/4 rounded bg-neutral-800" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-12 rounded bg-sky-50 border border-sky-100" />
          <div className="h-12 rounded bg-neutral-50 border border-neutral-200" />
        </div>
        <div className="h-6 w-20 rounded-full bg-neutral-900" />
      </div>
    </div>
  ),
  'dashboard-ui': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-3 shadow-sm">
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        <div className="h-8 rounded bg-sky-100 border border-sky-200" />
        <div className="h-8 rounded bg-emerald-100 border border-emerald-200" />
        <div className="h-8 rounded bg-violet-100 border border-violet-200" />
      </div>
      <div className="h-14 rounded-lg bg-neutral-50 border border-neutral-200 flex items-end gap-1 p-2">
        <div className="w-3 h-6 bg-neutral-300 rounded-t" />
        <div className="w-3 h-10 bg-neutral-500 rounded-t" />
        <div className="w-3 h-8 bg-neutral-400 rounded-t" />
        <div className="w-3 h-12 bg-neutral-800 rounded-t" />
      </div>
      <div className="text-[10px] text-neutral-500 mt-2 font-medium">Admin dashboard</div>
    </div>
  ),
  'auth-system': (
    <div className="w-full max-w-[200px] rounded-xl border-2 border-neutral-300 bg-white p-4 shadow-sm">
      <div className="text-[10px] font-bold text-neutral-700 uppercase mb-3 text-center">Sign In</div>
      <div className="h-7 rounded border border-neutral-200 bg-neutral-50 mb-2" />
      <div className="h-7 rounded border border-neutral-200 bg-neutral-50 mb-3" />
      <div className="h-8 rounded-lg bg-neutral-900 text-[10px] text-white font-semibold flex items-center justify-center">
        Login
      </div>
    </div>
  ),
  'api-workflow': (
    <div className="w-full max-w-[200px] flex items-center gap-1">
      <div className="flex-1 rounded-lg border border-sky-200 bg-sky-50 p-2 text-[8px] font-bold text-sky-800 text-center">
        React
      </div>
      <div className="text-[8px] text-neutral-400">↔</div>
      <div className="flex-1 rounded-lg border border-neutral-300 bg-neutral-900 p-2 text-[8px] font-bold text-white text-center">
        API
      </div>
      <div className="text-[8px] text-neutral-400">↔</div>
      <div className="flex-1 rounded-lg border border-emerald-200 bg-emerald-50 p-2 text-[8px] font-bold text-emerald-800 text-center">
        DB
      </div>
    </div>
  ),
  'mern-workflow': (
    <div className="w-full max-w-[200px] flex items-center gap-0.5">
      <div className="flex-1 rounded-lg border border-sky-200 bg-sky-50 p-1.5 text-[7px] font-bold text-sky-800 text-center">
        React
      </div>
      <div className="text-[7px] text-neutral-400">↔</div>
      <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50 p-1.5 text-[7px] font-bold text-amber-900 text-center">
        Node
      </div>
      <div className="text-[7px] text-neutral-400">↔</div>
      <div className="flex-1 rounded-lg border border-emerald-200 bg-emerald-50 p-1.5 text-[7px] font-bold text-emerald-800 text-center">
        Mongo
      </div>
    </div>
  ),
  'responsive-demo': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-3 shadow-sm">
      <div className="flex gap-2 justify-center mb-2">
        <div className="w-14 h-20 rounded border-2 border-neutral-300 bg-neutral-50" />
        <div className="w-24 h-20 rounded border-2 border-neutral-800 bg-white p-1">
          <div className="h-1.5 w-full rounded bg-neutral-200 mb-1" />
          <div className="h-8 rounded bg-sky-50" />
        </div>
      </div>
      <div className="text-[10px] text-center text-neutral-500 font-medium">Mobile · Desktop</div>
    </div>
  ),
  'deployment-showcase': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-4 shadow-sm text-center">
      <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 mx-auto mb-2 flex items-center justify-center text-emerald-700 text-lg">
        ✓
      </div>
      <div className="text-[10px] font-bold text-neutral-800 uppercase mb-1">Live Deploy</div>
      <div className="h-1.5 w-full rounded bg-neutral-100 overflow-hidden">
        <div className="h-full w-full rounded bg-emerald-500 animate-pulse" style={{ width: '88%' }} />
      </div>
      <div className="text-[9px] text-neutral-500 mt-2 font-mono">https://app.live</div>
    </div>
  ),
  'prompt-engineering': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-violet-200 bg-gradient-to-br from-violet-50 to-white p-4 shadow-sm text-left">
      <div className="text-[10px] font-bold text-violet-800 uppercase mb-2">Prompt</div>
      <div className="space-y-1.5 font-mono text-[8px] text-neutral-600">
        <div className="h-2 w-full rounded bg-violet-100" />
        <div className="h-2 w-4/5 rounded bg-violet-200" />
        <div className="h-2 w-full rounded bg-neutral-200" />
      </div>
      <div className="mt-3 h-6 rounded bg-neutral-900 text-[9px] text-white flex items-center justify-center font-semibold">
        CoT → Output
      </div>
    </div>
  ),
  'genai-content': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-3 shadow-sm">
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="h-14 rounded-lg bg-gradient-to-br from-indigo-100 to-violet-100 border border-indigo-200" />
        <div className="h-14 rounded-lg bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200" />
      </div>
      <div className="text-[10px] text-center text-neutral-500 font-medium">Image · Text Gen</div>
    </div>
  ),
  'ai-automation': (
    <div className="w-full max-w-[200px] space-y-1">
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-2 py-1 text-[8px] font-bold text-amber-900 text-center">
        Trigger
      </div>
      <div className="text-center text-[8px] text-neutral-400">↓</div>
      <div className="rounded-lg border border-violet-200 bg-violet-50 px-2 py-1 text-[8px] font-bold text-violet-800 text-center">
        Agent + Tools
      </div>
      <div className="text-center text-[8px] text-neutral-400">↓</div>
      <div className="rounded-lg border border-neutral-300 bg-neutral-900 px-2 py-1 text-[8px] font-bold text-white text-center">
        Automate
      </div>
    </div>
  ),
  'ai-agent-workflow': (
    <div className="w-full max-w-[200px] rounded-lg border-2 border-neutral-300 bg-white p-3 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 text-[8px] flex items-center justify-center font-bold text-indigo-800">
          RAG
        </div>
        <div className="text-[8px] text-neutral-400">→</div>
        <div className="w-8 h-8 rounded-full bg-neutral-900 text-[8px] flex items-center justify-center font-bold text-white">
          LC
        </div>
        <div className="text-[8px] text-neutral-400">→</div>
        <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 text-[8px] flex items-center justify-center font-bold text-emerald-800">
          Out
        </div>
      </div>
      <div className="h-1 w-full rounded bg-gradient-to-r from-indigo-200 via-neutral-400 to-emerald-300" />
      <div className="text-[10px] text-neutral-500 mt-2 text-center font-medium">LangGraph pipeline</div>
    </div>
  ),
}

function BusinessShowcase({ items = [], section = {} }) {
  if (!items.length) return null

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
      {items.map((item) => (
        <article
          key={item.title}
          className="group rounded-xl border border-neutral-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex items-center justify-center min-h-[160px] bg-gradient-to-br from-emerald-50/60 via-neutral-50 to-amber-50/40 p-6 transition-colors group-hover:from-emerald-50/80">
            {previewStyles[item.preview] || previewStyles['startup-idea']}
          </div>
          <div className="p-5 border-t border-neutral-100">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
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

export default BusinessShowcase
