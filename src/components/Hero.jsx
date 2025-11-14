import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.15),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.15),transparent_40%)]" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-10 pt-28 md:grid-cols-2 md:pt-36">
        <div>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            Available for freelance & full-time
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Full‑Stack Developer • Web Developer • Data Analyst
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            I design and build modern, scalable web apps and turn data into decisions. I blend engineering discipline with analytical thinking to deliver beautiful, reliable products.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">View Projects</a>
            <a href="#contact" className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Get in Touch</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative h-[420px] w-full md:h-[520px]">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
          <div className="h-full w-full overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
