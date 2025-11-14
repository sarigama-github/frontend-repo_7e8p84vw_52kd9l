import { Code, Database, Server, BarChart3, Sparkles, ExternalLink } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a full‑stack developer with a strong focus on developer experience and product impact. I design
              scalable systems, craft delightful UIs, and bring ideas to life with clean, maintainable code. I also love turning
              raw data into insights with modern analytics tooling.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { icon: <Code className="h-5 w-5" />, label: 'Frontend' },
                { icon: <Server className="h-5 w-5" />, label: 'Backend' },
                { icon: <Database className="h-5 w-5" />, label: 'Databases' },
                { icon: <BarChart3 className="h-5 w-5" />, label: 'Data Analysis' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-lg border p-3">
                  <span className="text-gray-700">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-fuchsia-500 blur opacity-20" />
            <div className="relative rounded-2xl border bg-white p-6">
              <p className="text-sm text-gray-600">
                Tech I enjoy: React, Tailwind, Node, Python, FastAPI, MongoDB, PostgreSQL, Next.js, Vite, Pandas, Airflow,
                dbt, and more. I care about performance, accessibility, and great developer ergonomics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    'React', 'Next.js', 'Vite', 'Tailwind', 'TypeScript', 'Node.js', 'FastAPI', 'Python', 'MongoDB', 'PostgreSQL', 'Pandas', 'NumPy', 'Airflow', 'dbt', 'Docker', 'AWS'
  ]
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-indigo-600" /> {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    {
      title: 'Analytics Dashboard',
      desc: 'Full‑stack dashboard with FastAPI, MongoDB, and React charts.',
      link: '#',
      tags: ['FastAPI', 'MongoDB', 'React']
    },
    {
      title: 'E‑commerce Platform',
      desc: 'Headless storefront with Next.js, Stripe, and PostgreSQL.',
      link: '#',
      tags: ['Next.js', 'Stripe', 'PostgreSQL']
    },
    {
      title: 'Data Pipeline',
      desc: 'Batch ETL with Airflow, dbt, and warehouse modeling.',
      link: '#',
      tags: ['Airflow', 'dbt']
    }
  ]
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1">View all <ExternalLink className="h-4 w-4" /></a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative rounded-2xl border bg-white p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <span className="text-xs rounded-full bg-gray-50 px-2 py-1 border">Case Study</span>
              </div>
              <p className="mt-3 text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Let’s work together</h2>
            <p className="mt-4 text-gray-600">I’m open to full‑time roles, freelance projects, and collabs. Tell me about your idea and I’ll get back shortly.</p>
            <div className="mt-6 space-y-2 text-sm text-gray-700">
              <p>Email: <a href="mailto:you@example.com" className="text-indigo-600">you@example.com</a></p>
              <p>Location: Remote / On‑site</p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border bg-white p-6">
            <div className="grid grid-cols-1 gap-4">
              <input className="w-full rounded-lg border px-4 py-3" placeholder="Name" required />
              <input type="email" className="w-full rounded-lg border px-4 py-3" placeholder="Email" required />
              <textarea rows="4" className="w-full rounded-lg border px-4 py-3" placeholder="Your message" required />
            </div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-gray-800">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
