import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! I will get back to you soon.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Contact</h2>
          <p className="mt-2 text-gray-600">Have a project or role in mind? Let’s talk.</p>
        </div>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input name="name" required placeholder="Your name" className="rounded-lg border border-gray-300 bg-white/70 px-4 py-3 outline-none backdrop-blur focus:ring-2 focus:ring-gray-900" />
          <input name="email" required type="email" placeholder="Email" className="rounded-lg border border-gray-300 bg-white/70 px-4 py-3 outline-none backdrop-blur focus:ring-2 focus:ring-gray-900" />
          <textarea name="message" required placeholder="Tell me about your project..." rows="5" className="md:col-span-2 rounded-lg border border-gray-300 bg-white/70 px-4 py-3 outline-none backdrop-blur focus:ring-2 focus:ring-gray-900" />
          <div className="md:col-span-2 flex items-center justify-between">
            <span className="text-sm text-gray-600">I reply within 24 hours.</span>
            <button className="rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">Send Message</button>
          </div>
          {status && <p className="md:col-span-2 text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
