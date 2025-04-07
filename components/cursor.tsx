"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseDown = () => setCursorVariant("click")
    const mouseUp = () => setCursorVariant("default")
    const mouseEnterLink = () => setCursorVariant("hover")
    const mouseLeaveLink = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink)
      link.addEventListener("mouseleave", mouseLeaveLink)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink)
        link.removeEventListener("mouseleave", mouseLeaveLink)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: mounted && theme === "dark" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
      border: mounted && theme === "dark" ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid rgba(255, 255, 255, 0.1)",
      mixBlendMode: theme === "dark" ? "normal" : "difference",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: mounted && theme === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
      border: mounted && theme === "dark" ? "1px solid rgba(0, 0, 0, 0.2)" : "1px solid rgba(255, 255, 255, 0.2)",
      mixBlendMode: theme === "dark" ? "normal" : "difference",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: mounted && theme === "dark" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)",
      border: mounted && theme === "dark" ? "1px solid rgba(0, 0, 0, 0.3)" : "1px solid rgba(255, 255, 255, 0.3)",
      mixBlendMode: theme === "dark" ? "normal" : "difference",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  }

  // Only show custom cursor on desktop
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile || !mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={{ mixBlendMode: theme === "dark" ? "normal" : "difference" }}
      variants={variants}
      animate={cursorVariant}
    />
  )
}

