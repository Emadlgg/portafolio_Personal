// src/components/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('Mensaje enviado con éxito!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-tag mb-3">// fig. 05 — contact</div>
          <h2 className="font-display font-bold text-4xl mb-16">Get in Touch</h2>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-1">
              {[
                { icon: <FiMail />, label: 'email', value: 'osman.edlg04@gmail.com', href: 'mailto:osmanemanuel2004@gmail.com' },
                { icon: <FiPhone />, label: 'phone', value: '+502 4197 2946', href: 'https://wa.me/50241972946' },
                { icon: <FiMapPin />, label: 'location', value: 'Guatemala, Guatemala', href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 py-4 border-b border-base-line">
                  <span className="text-blue-400">{item.icon}</span>
                  <div>
                    <div className="font-mono text-[11px] uppercase text-muted">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-6">
                {[
                  { icon: <FaGithub size={18} />, href: 'https://github.com/Emadlgg/' },
                  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/osman-edlg/' },
                  { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/emadlg_/' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-base-line text-muted hover:text-blue-400 hover:border-blue-400 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 border border-base-line bg-base-panel p-6 space-y-5">
              <div className="label-tag pb-3 border-b border-base-line">send_message()</div>

              <div>
                <label htmlFor="name" className="block mb-2 font-mono text-xs text-muted uppercase">name</label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full p-3 bg-base-bg border border-base-line focus:border-blue-400 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-mono text-xs text-muted uppercase">email</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full p-3 bg-base-bg border border-base-line focus:border-blue-400 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-mono text-xs text-muted uppercase">message</label>
                <textarea
                  id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required
                  className="w-full p-3 bg-base-bg border border-base-line focus:border-blue-400 outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-400 text-base-bg font-mono text-sm font-medium hover:bg-blue-500 transition-colors w-full sm:w-auto"
              >
                submit →
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
