// src/components/Contact.jsx

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Formulario enviado:', formData)
    alert('¡Mensaje enviado con éxito!')

    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'email',
      value: 'osman.edlg04@gmail.com',
      href: 'mailto:osman.edlg04@gmail.com',
    },
    {
      icon: <FiPhone />,
      label: 'teléfono',
      value: '+502 4197 2946',
      href: 'https://wa.me/50241972946',
    },
    {
      icon: <FiMapPin />,
      label: 'ubicación',
      value: 'Guatemala, Guatemala',
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      label: 'GitHub',
      href: 'https://github.com/Emadlgg/',
    },
    {
      icon: <FaLinkedin size={18} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/osman-edlg/',
    },
    {
      icon: <FaInstagram size={18} />,
      label: 'Instagram',
      href: 'https://www.instagram.com/emadlg_/',
    },
  ]

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* ENCABEZADO */}
          <div className="label-tag mb-3">
            // fig. 05 — contacto
          </div>

          <h2 className="font-display font-bold text-4xl mb-4">
            Hablemos
          </h2>

          <p className="text-muted max-w-2xl mb-16 leading-relaxed">
            ¿Tienes una idea, proyecto u oportunidad en mente? Puedes
            contactarme directamente o enviarme un mensaje.
          </p>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* ─────────────────────────────
                INFORMACIÓN DE CONTACTO
            ───────────────────────────── */}
            <div className="lg:col-span-2 space-y-1">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 py-4 border-b border-base-line"
                >
                  <span className="text-green-400 text-lg">
                    {item.icon}
                  </span>

                  <div>
                    <div className="font-mono text-[11px] uppercase text-muted">
                      {item.label}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* REDES SOCIALES */}
              <div className="flex gap-3 pt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="
                      p-3
                      border border-base-line
                      text-muted
                      hover:text-green-400
                      hover:border-green-400
                      transition-colors
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ─────────────────────────────
                FORMULARIO
            ───────────────────────────── */}
            <form
              onSubmit={handleSubmit}
              className="
                lg:col-span-3
                border border-base-line
                bg-base-panel
                p-6
                space-y-5
              "
            >
              <div className="label-tag pb-3 border-b border-base-line">
                enviar_mensaje()
              </div>

              {/* NOMBRE */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-mono text-xs text-muted uppercase"
                >
                  nombre
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    p-3
                    bg-base-bg
                    border border-base-line
                    focus:border-green-400
                    outline-none
                    transition-colors
                  "
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-mono text-xs text-muted uppercase"
                >
                  email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    p-3
                    bg-base-bg
                    border border-base-line
                    focus:border-green-400
                    outline-none
                    transition-colors
                  "
                />
              </div>

              {/* MENSAJE */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-mono text-xs text-muted uppercase"
                >
                  mensaje
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    p-3
                    bg-base-bg
                    border border-base-line
                    focus:border-green-400
                    outline-none
                    transition-colors
                    resize-none
                  "
                />
              </div>

              {/* BOTÓN */}
              <button
                type="submit"
                className="
                  px-6
                  py-3
                  bg-green-400
                  text-base-bg
                  font-mono
                  text-sm
                  font-medium
                  hover:bg-green-500
                  transition-colors
                  w-full
                  sm:w-auto
                "
              >
                enviar →
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}