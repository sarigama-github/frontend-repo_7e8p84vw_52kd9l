import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Your Name — Full‑Stack Developer & Data Analyst</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
            <a href="#" className="hover:text-gray-900">GitHub</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
