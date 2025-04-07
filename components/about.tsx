"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"


export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const textVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  }

  const listItemVariants = {
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
    <section ref={ref} id="about" className="py-20">
      <motion.div variants={titleVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
          DESIGNER,
          <br />
          DEVELOPER,
          <br />
          CREATOR /
        </h2>
      </motion.div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="/profil.jpg"
              alt="Portrait"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 text-neutral-550"
          >
            <p>
              I’m a designer and developer passionate about crafting exceptional digital experiences.
              With a user-centered approach, I design and build websites and applications that blend aesthetics
              with functionality.
            </p>
            <p>
              My journey has allowed me to gain expertise in various areas of design and web development,
              enabling me to deliver complete and innovative solutions.
            </p>
            <p>
              I firmly believe that design should not only be beautiful,
              but also functional and accessible to everyone. That’s why I strive to create
              experiences that meet users' needs while adhering to industry standards.
            </p>
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-12 grid grid-cols-2 gap-8"
          >
            <div>
              <h3 className="text-lg font-medium mb-4">Compétences</h3>
              <ul className="space-y-2 text-neutral-400">
                <motion.li variants={listItemVariants}>UI/UX Design</motion.li>
                <motion.li variants={listItemVariants}>Web Development</motion.li>
                <motion.li variants={listItemVariants}>Responsive Design</motion.li>
                <motion.li variants={listItemVariants}>Frontend Development</motion.li>
                <motion.li variants={listItemVariants}>Backend Development</motion.li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Technologies</h3>
              <ul className="space-y-2 text-neutral-400">
                <motion.li variants={listItemVariants}>HTML/CSS/JavaScript</motion.li>
                <motion.li variants={listItemVariants}>React/Next.js</motion.li>
                <motion.li variants={listItemVariants}>Tailwind CSS</motion.li>
                <motion.li variants={listItemVariants}>Node.js/Express.JS</motion.li>
                <motion.li variants={listItemVariants}>Figma/Adobe XD</motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

