import { useEffect, useState } from 'react'

const featured = [
  {
    title: 'SaaS Dashboard',
    desc: 'Role-based analytics platform with real-time charts and billing.',
    tags: ['React', 'Node', 'Postgres', 'Stripe'],
    link: '#'
  },
  {
    title: 'E‑commerce API',
    desc: 'Headless storefront with search, checkout, and admin.',
    tags: ['FastAPI', 'MongoDB', 'Redis'],
    link: '#'
  },
  {
    title: 'Data Insights',
    desc: 'ETL pipeline with interactive reports and forecasting.',
    tags: ['Python', 'Pandas', 'Plotly'],
    link: '#'
  }
]

export default function Projects() {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState(featured)

  useEffect(() => {
    // Placeholder: could fetch from backend later
    setLoading(false)
  }, [])

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Projects</h2>
            <p className="mt-2 text-gray-600">Selected work that blends solid engineering with crisp UX</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur transition hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
