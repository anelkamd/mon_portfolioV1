"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.footer
      className="py-8 border-t border-neutral-900 dark:border-neutral-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="text-neutral-500 text-sm">© {currentYear} Anelka MD. All rights reserved</p>
          </div>

          <div className="col-span-6 md:col-span-4">
            <h3 className="text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-neutral-500 text-sm">
              <li>
                <a
                  href="mailto:anelkadevs@gmail.com"
                  className="hover:text-white dark:hover:text-black transition-colors flex items-center"
                >
                  <Mail size={14} className="mr-2" />
                  anelkadevs@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+243999260169" className="hover:text-white dark:hover:text-black transition-colors">
                  +243 999260169
                </a>
              </li>
              <li>Goma, RD Congo</li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <h3 className="text-sm font-medium mb-4">Réseaux</h3>
            <motion.div className="flex space-x-4" variants={socialVariants}>
              <motion.a
                href="https://github.com/anelkamd"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-500 hover:text-white dark:hover:text-black transition-colors"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/anelkamd"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-500 hover:text-white dark:hover:text-black transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://x.com/Anelka_MD"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-500 hover:text-white dark:hover:text-black transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="mailto:anelkadevs@gmail.com"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-500 hover:text-white dark:hover:text-black transition-colors"
              >
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

