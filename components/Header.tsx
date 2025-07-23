"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuToggle = document.querySelector(".menu-toggle")
      const navMenu = document.querySelector("nav ul")

      if (
        menuToggle &&
        navMenu &&
        !menuToggle.contains(event.target as Node) &&
        !navMenu.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <header>
      <div className="container">
        <h1 className="logo">Hadeel Omar</h1>
        <nav>
          <ul className={isMenuOpen ? "active" : ""}>
            <li>
              <a href="#hero" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#education" onClick={closeMenu}>
                Education
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </header>
  )
}
