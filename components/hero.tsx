"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const currentDate = new Date()
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "2-digit",
  })
      .format(currentDate)
      .toUpperCase()

  // We'll use a mix of framer-motion for some elements and CSS animations for others
  const scrollVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
      <section ref={ref} id="hero" className="min-h-screen flex flex-col justify-between pt-20 py-10 px-6 md:px-12 lg:px-16">
        <div className="w-full">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-reveal">
            ANELKA MD<span className="align-super text-3xl md:text-4xl">©</span>
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-8 md:mt-16">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="flex flex-col gap-6">
              <div className="text-neutral-500 fade-in" style={{ animationDelay: "0.1s" }}>
                <ArrowDown className="rotate-[-135deg] mb-4" size={24} />
              </div>

              <p className="text-xl md:text-2xl leading-relaxed fade-in" style={{ animationDelay: "0.2s" }}>
                Helping ambitious brands and startups stand out with premium, conversion-focused websites.
              </p>

              <div className="mt-6 fade-in" style={{ animationDelay: "0.3s" }}>
                <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-neutral-200 transition-colors dark:bg-black dark:text-white dark:hover:bg-neutral-800"
                >
                  BOOK A CALL <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-7 mt-8 md:mt-0">
            <div
                className="relative aspect-[3/4] w-full max-w-[350px] mx-auto md:mx-0 scale-in"
                style={{ animationDelay: "0.4s" }}
            >
              <Image
                  src="/profil.jpg"
                  alt="Portrait"
                  width={450}
                  height={600}
                  className="object-cover grayscale"
                  priority
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-10 mt-8 lg:mt-0">
            <div className="flex flex-col items-start lg:items-end">
              <p className="uppercase mb-2 fade-in" style={{ animationDelay: "0.5s" }}>
                Available for freelance work
              </p>
              <p className="text-5xl md:text-6xl font-bold fade-in" style={{ animationDelay: "0.6s" }}>
                {formattedDate}
              </p>
            </div>
          </div>
        </div>

        <motion.div
            variants={scrollVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-16 flex justify-center"
        >
          <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="text-neutral-500" size={24} />
          </motion.div>
        </motion.div>
      </section>
  )
}

