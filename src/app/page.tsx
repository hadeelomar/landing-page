"use client"

import { useState } from "react"
import TerminalLoader from "../../components/TerminalLoader"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Experience from "../../components/Experience"
import Education from "../../components/Education"
import Projects from "../../components/Projects"
import Footer from "../../components/Footer"
import ParticlesBackground from "../../components/ParticlesBackground"
import CursorEffects from "../../components/CursorEffects"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <TerminalLoader onComplete={handleLoadingComplete} />}

      <div
        id="main-content"
        style={{ opacity: isLoading ? 0 : 1 }}
        className={!isLoading ? "main-content-fade-in" : ""}
      >
        <ParticlesBackground />
        <Header />
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Footer />
        <CursorEffects />
      </div>
    </>
  )
}
