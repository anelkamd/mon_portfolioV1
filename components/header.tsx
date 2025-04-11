"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8])
  const headerBlur = useTransform(scrollYProgress, [0, 0.05], [0, 8])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur.get()}px)`,
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.nav
          className="flex items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <motion.div variants={logoVariants} className="flex items-center">
            <Link href="/" className="flex items-center group">
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xl font-bold tracking-tighter group-hover:opacity-0 transition-opacity duration-300">
                  ANELKA MD<sup className="text-xs ml-1">©</sup>
                </span>
                <span className="absolute inset-0 text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ANELKA MD<sup className="text-xs ml-1">©</sup>
                </span>
              </motion.div>
            </Link>
          </motion.div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6 text-sm">
              <Link href="#services" className="text-neutral-400 hover:text-black transition-colors relative group">
                SERVICES
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#projects" className="text-neutral-400 hover:text-black transition-colors relative group">
                PROJETS
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#about" className="text-neutral-400 hover:text-black transition-colors relative group">
                À PROPOS
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#contact" className="text-neutral-400 hover:text-black transition-colors relative group">
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            <motion.div variants={socialVariants} className="hidden md:flex items-center space-x-4">
              <motion.a
                href="https://github.com/anelkamd"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-400 hover:text-black transition-colors"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/anelkamd"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-400 hover:text-black transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://x.com/Anelka_MD"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-400 hover:text-black transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </motion.a>
            </motion.div>

            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="text-neutral-400 hover:text-black transition-colors"
                aria-label={theme === "dark" ? "Passer au mode clair" : "Passer au mode sombre"}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            )}

            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-800">
              <Image
                src="/profil.JPG"
                alt="Profile"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <button
              className="md:hidden text-neutral-400 hover:text-black"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/95 dark:bg-white/95 pt-20 px-4 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col space-y-8 items-start text-2xl"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={menuItemVariants}>
                <Link
                  href="#services"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  SERVICES
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="#projects"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  PROJETS
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="#about"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  À PROPOS
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="#contact"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </Link>
              </motion.div>

              <motion.div variants={socialVariants} className="flex items-center space-x-6 pt-8">
                <motion.a
                  href="https://github.com/anelkamd"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  <Github size={24} />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/anelkamd"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://x.com/Anelka_MD"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </motion.a>
                <motion.a
                  href="mailto:anelkadevs@gmail.com"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
                >
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

