"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const services = [
  {
    id: "01",
    title: "Web Development",
    skills: ["Frontend Development", "Backend Development", "Responsive Design", "Performance Optimization"],
  },
  {
    id: "02",
    title: "Web Design",
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    id: "03",
    title: "SEO",
    skills: ["Technical SEO", "Content Optimization", "Link Building", "Performance Analysis"],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -10 },
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
    <section ref={ref} id="services" className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-12 gap-4"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={serviceVariants} className="col-span-12 md:col-span-4 mb-16 md:mb-0">
            <div className="text-neutral-500 text-sm mb-2">{service.id}</div>
            <h2 className="text-xl font-medium mb-6">{service.title}</h2>
            <motion.ul className="space-y-3 text-neutral-400" variants={containerVariants}>
              {service.skills.map((skill, index) => (
                <motion.li key={index} variants={skillVariants} className="flex items-center">
                  <span className="w-1 h-1 bg-neutral-500 rounded-full mr-2"></span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

