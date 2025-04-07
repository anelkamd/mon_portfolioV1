import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { ScrollProgress } from "@/components/scroll-progress"


export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Header />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  )
}

