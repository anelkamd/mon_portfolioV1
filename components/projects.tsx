"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Tag } from "lucide-react"



export const projects = [
  {
    id: "01",
    slug: "kivu-event",
    title: "Kivu Event",
    description: "Application de Gestion des Événements d’Entreprise",
    fullDescription:
      "Application de Gestion des Événements d’Entreprise (Organisation des séminaires, conférences, et suivi des participants)",
    image: "/kivuevent1.png",
    images: [
      "/kivuevent6.png",
      "/kivuevent2.png",
      "/kivuevent4.png",
    ],
    year: "2024",
    client: "Public",
    role: "Design & Development",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Express.JS"],
    link: "https://github.com/anelkamd/Kivu-Event-V2",
    category: "Web Development",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} id="projects" className="py-20">
      <motion.div variants={titleVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
          SELECTED WORKS / <span className="text-neutral-500 text-xl align-super">(5)</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-24"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={projectVariants} className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-2 mb-4 md:mb-0">
              <div className="text-5xl font-bold text-neutral-800 dark:text-neutral-800">{project.id}.</div>
            </div>

            <div className="col-span-12 md:col-span-10">
              <motion.div variants={imageVariants} className="relative aspect-video overflow-hidden mb-4 group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/50 dark:bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                  >
                    <h3 className="text-2xl font-bold mb-2 text-white dark:text-black">{project.title}</h3>
                    <p className="text-neutral-300 dark:text-neutral-700">{project.description}</p>
                  </motion.div>
                </div>
              </motion.div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <div className="flex items-center text-neutral-500">
                    <Calendar size={14} className="mr-1" />
                    <p>{project.year}</p>
                    <Tag size={14} className="ml-3 mr-1" />
                    <p>{project.category}</p>
                  </div>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm text-neutral-400 hover:text-white dark:hover:text-black flex items-center transition-colors"
                >
                  <span>VIEW</span>
                  <ArrowUpRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

