"use client"

import { useEffect } from "react"

export default function CursorEffects() {
  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Create dark theme cursor trail with random chance
      if (Math.random() < 0.3) {
        const trail = document.createElement("div")
        trail.innerHTML = ["⚡", "💫", "🔹", "◆", "✦"][Math.floor(Math.random() * 5)]
        trail.style.position = "fixed"
        trail.style.left = mouseX + Math.random() * 20 - 10 + "px"
        trail.style.top = mouseY + Math.random() * 20 - 10 + "px"
        trail.style.pointerEvents = "none"
        trail.style.fontSize = "10px"
        trail.style.zIndex = "9999"
        trail.style.color = "#2c5aa0"
        trail.style.animation = "dark-fade 1.5s ease-out forwards"

        document.body.appendChild(trail)

        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail)
          }
        }, 1500)
      }
    }

    const handleClick = (e: MouseEvent) => {
      const clickEffect = document.createElement("div")
      clickEffect.innerHTML = "◉"
      clickEffect.style.position = "fixed"
      clickEffect.style.left = e.clientX + "px"
      clickEffect.style.top = e.clientY + "px"
      clickEffect.style.pointerEvents = "none"
      clickEffect.style.fontSize = "16px"
      clickEffect.style.zIndex = "9999"
      clickEffect.style.color = "#2c5aa0"
      clickEffect.style.animation = "dark-ripple 0.6s ease-out forwards"

      document.body.appendChild(clickEffect)

      setTimeout(() => {
        if (clickEffect.parentNode) {
          clickEffect.parentNode.removeChild(clickEffect)
        }
      }, 600)
    }

    // Wait for terminal to finish before adding cursor effects
    setTimeout(() => {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("click", handleClick)
    }, 5000)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
