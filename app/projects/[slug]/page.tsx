"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Briefcase, LinkIcon, ChevronRight } from "lucide-react"
import { projects } from "@/components/projects"

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const { slug } = params

  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Trouver le projet correspondant au slug
    const foundProject = projects.find((p) => p.slug === slug)

    if (foundProject) {
      setProject(foundProject)
    } else {
      // Rediriger vers la page d'accueil si le projet n'existe pas
      router.push("/")
    }

    setLoading(false)
  }, [slug, router])

  if (loading || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl">Chargement...</div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-20">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="mb-12">
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-neutral-400 hover:text-white dark:hover:text-black transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Retour aux projets</span>
          </Link>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          {project.title}
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl text-neutral-400 dark:text-neutral-600 mb-8">
          {project.description}
        </motion.p>

        <motion.div variants={imageVariants} className="aspect-video overflow-hidden rounded-lg mb-12">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="col-span-2">
          <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6">
            À propos du projet
          </motion.h2>

          <motion.p variants={itemVariants} className="text-neutral-300 dark:text-neutral-700 mb-6">
            {project.fullDescription}
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {project.images.map((image: string, index: number) => (
              <motion.div key={index} variants={imageVariants} className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium mb-2">Détails du projet</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Calendar size={18} className="text-neutral-500 mr-3 mt-1" />
                <div>
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">Année</span>
                  <span>{project.year}</span>
                </div>
              </li>
              <li className="flex items-start">
                <User size={18} className="text-neutral-500 mr-3 mt-1" />
                <div>
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">Client</span>
                  <span>{project.client}</span>
                </div>
              </li>
              <li className="flex items-start">
                <Briefcase size={18} className="text-neutral-500 mr-3 mt-1" />
                <div>
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">Rôle</span>
                  <span>{project.role}</span>
                </div>
              </li>
              <li className="flex items-start">
                <LinkIcon size={18} className="text-neutral-500 mr-3 mt-1" />
                <div>
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">Lien</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Voir le site
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-neutral-800 dark:bg-neutral-200 text-neutral-300 dark:text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium mb-2">Navigation</h3>
            <div className="space-y-3">
              {projects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className={`flex items-center justify-between p-2 rounded hover:bg-neutral-800/50 dark:hover:bg-neutral-200/50 transition-colors ${
                    p.slug === project.slug ? "bg-neutral-800/30 dark:bg-neutral-200/30" : ""
                  }`}
                >
                  <span>{p.title}</span>
                  {p.slug === project.slug ? (
                    <span className="text-xs text-neutral-500">Actuel</span>
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

