import { Code2, Database, Globe2, BarChart3, Cloud, Cpu } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Full‑Stack', items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express'] },
  { icon: Database, title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Prisma', 'SQL'] },
  { icon: Globe2, title: 'Web', items: ['HTML5', 'CSS3', 'Tailwind', 'Accessibility', 'SEO'] },
  { icon: BarChart3, title: 'Data', items: ['Python', 'Pandas', 'NumPy', 'Visualization', 'ETL'] },
  { icon: Cloud, title: 'Cloud & DevOps', items: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Netlify'] },
  { icon: Cpu, title: 'Other', items: ['Git', 'Testing', 'Design Systems', 'REST & GraphQL'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Skills</h2>
            <p className="mt-2 text-gray-600">A blend of engineering and analytics to ship end‑to‑end products</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gray-900 p-2 text-white"><Icon className="h-5 w-5"/></div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
