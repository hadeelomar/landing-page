"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Hello, I'm Hadeel :)"

  useEffect(() => {
    const typeText = () => {
      let i = 0
      setDisplayedText("")
      setIsTypingComplete(false)
      setShowCursor(true)

      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayedText(fullText.slice(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
          setIsTypingComplete(true)

          
          setTimeout(() => {
            setShowCursor(false)
            setTimeout(() => {
              typeText() 
            }, 2000)
          }, 1000)
        }
      }, 100)
    }

    
    typeText()
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="gradient-text">
            {displayedText}
            {showCursor && <span className="typing-cursor">|</span>}
          </h2>
          <p className={`hero-description ${isTypingComplete ? "fade-in" : "hidden"}`}>
            Aspiring Software Developer entering my final year studying Computer Systems Engineering at Queen Mary,
            University of London with a strong interest in the intersection of technology and media streaming.
          </p>
          <div className={`profile-links ${isTypingComplete ? "fade-in" : "hidden"}`}>
            <a href="/HadeelCV.pdf" target="_blank" className="btn btn-primary" rel="noreferrer">
              <i className="fas fa-file-download"></i> Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/hadeel-omar-40a388255/"
              target="_blank"
              className="btn btn-secondary"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
