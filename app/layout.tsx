import type React from "react"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Cursor } from "@/components/cursor"
import { Footer } from "@/components/footer"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "Anelka MD | Portfolio",
  description: "Portfolio personnel présentant mes projets et compétences",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} font-sans bg-black text-white antialiased selection:bg-neutral-800 selection:text-white dark:bg-white dark:text-black dark:selection:bg-neutral-200 dark:selection:text-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Cursor />
          <div className="flex min-h-screen flex-col">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'