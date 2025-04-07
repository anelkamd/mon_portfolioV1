"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "PHP", "MySQL", "MongoDB"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX", "Responsive Design"],
  },
  {
    category: "Outils",
    items: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel", "Netlify"],
  },
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Compétences</h2>
          <p className="text-gray-200 text-center max-w-2xl mx-auto mb-16">
            Un aperçu des technologies et outils que j'utilise pour créer des expériences web exceptionnelles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <motion.li key={skill} variants={itemVariants} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

