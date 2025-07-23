"use client"

import { useEffect } from "react"

export default function ParticlesBackground() {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement("div")
      star.className = "animated-star"

      // Random properties
      const size = Math.random() * 3 + 1
      const duration = Math.random() * 3 + 2
      const delay = Math.random() * 2

      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `

      document.querySelector(".stars-container")?.appendChild(star)

      setTimeout(
        () => {
          if (star.parentNode) {
            star.parentNode.removeChild(star)
          }
        },
        (duration + delay) * 1000,
      )
    }

    for (let i = 0; i < 50; i++) {
      setTimeout(() => createStar(), i * 100)
    }

    const starInterval = setInterval(createStar, 200)

    return () => {
      clearInterval(starInterval)
    }
  }, [])

  return (
    <div className="simple-grid-background">

      <div className="simple-grid">
        <div className="grid-lines">
          {/* Horizontal lines */}
          {Array.from({ length: 25 }, (_, i) => (
            <div key={`h-${i}`} className="grid-line horizontal" style={{ top: `${i * 4}%` }} />
          ))}

          {Array.from({ length: 25 }, (_, i) => (
            <div key={`v-${i}`} className="grid-line vertical" style={{ left: `${i * 4}%` }} />
          ))}
        </div>
      </div>

      <div className="stars-container">

        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="static-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="shooting-stars">
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
      </div>

      <div className="gradient-overlay"></div>
    </div>
  )
}
