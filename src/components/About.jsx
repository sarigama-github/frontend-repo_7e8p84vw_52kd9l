export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">About</h2>
            <p className="mt-4 text-gray-600">
              I build end‑to‑end digital products: from clean, responsive frontends to reliable, scalable backends and insightful analytics. I enjoy turning complex problems into simple, delightful experiences.
            </p>
            <p className="mt-3 text-gray-600">
              When I'm not coding, I'm exploring data stories, sketching UI ideas, or reading about systems design and product strategy.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-gray-200 bg-white/70 p-4">
                <div className="text-2xl font-bold text-gray-900">5+ yrs</div>
                <div className="text-gray-600">Experience</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white/70 p-4">
                <div className="text-2xl font-bold text-gray-900">20+ </div>
                <div className="text-gray-600">Projects shipped</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white/70 p-4">
                <div className="text-2xl font-bold text-gray-900">100% </div>
                <div className="text-gray-600">Remote ready</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white/70 p-4">
                <div className="text-2xl font-bold text-gray-900">Fast</div>
                <div className="text-gray-600">Communication</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 p-8">
            <ul className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              {['Full‑Stack Apps','APIs & Integrations','Data Pipelines','Dashboards','Cloud & DevOps','Testing & QA','Design Systems','Performance'].map(i => (
                <li key={i} className="rounded-lg border border-gray-200 bg-white/70 px-3 py-2 text-gray-800">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
