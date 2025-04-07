"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormState({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} id="contact" className="py-20">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">LET'S MAKE IT HAPPEN</h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border-b border-neutral-800 focus:border-black transition-colors focus:outline-none text-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border-b border-neutral-800 focus:border-white transition-colors focus:outline-none text-black"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-transparent border-b border-neutral-800 focus:border-black transition-colors focus:outline-none text-black resize-none"
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-3 border border-white/20 rounded-full text-black font-medium hover:bg-black/10 transition-colors flex items-center space-x-2 disabled:opacity-70"
            >
              <span>{isSubmitting ? "Envoi en cours..." : "Envoyer un message"}</span>
              <ArrowRight size={16} className={isSubmitting ? "opacity-0" : "opacity-100"} />
            </motion.button>
          </div>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-400 text-sm mt-4"
            >
              Votre message a été envoyé avec succès !
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

