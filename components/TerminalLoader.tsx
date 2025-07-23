"use client"

import { useState, useEffect } from "react"

interface TerminalLoaderProps {
  onComplete: () => void
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [displayedCommands, setDisplayedCommands] = useState<string[]>(["", "", ""])
  const [displayedOutputs, setDisplayedOutputs] = useState<string[]>(["", "", ""])
  const [showLines, setShowLines] = useState<boolean[]>([false, false, false, false, false, false, false])
  const [showLoadingBar, setShowLoadingBar] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const commands = [
    { cmd: "whoami", output: "hadeel-omar" },
    { cmd: "ls -la ~/projects", output: "fdm-timesheets aviation-weather portfolio.html  sprout-lands/  inventory-mgmt/  cv.pdf" },
    { cmd: "cat ~/about.txt", output: "Computer Systems Engineering Student | Aspiring Software Developer" },
  ]

  const typeCommand = (text: string, index: number) => {
    let i = 0
    const typing = setInterval(() => {
      setDisplayedCommands((prev) => {
        const newCommands = [...prev]
        newCommands[index] = text.slice(0, i + 1)
        return newCommands
      })
      i++
      if (i >= text.length) {
        clearInterval(typing)
        setTimeout(() => {
          setShowLines((prev) => {
            const newLines = [...prev]
            newLines[index * 2 + 1] = true
            return newLines
          })
          showOutput(commands[index].output, index)
        }, 500)
      }
    }, 50)
  }

  const showOutput = (text: string, index: number) => {
    setDisplayedOutputs((prev) => {
      const newOutputs = [...prev]
      newOutputs[index] = text
      return newOutputs
    })

    setTimeout(() => {
      if (index < commands.length - 1) {
        setShowLines((prev) => {
          const newLines = [...prev]
          newLines[index * 2 + 2] = true
          return newLines
        })
        executeCommand(index + 1)
      } else {
        setShowLoadingBar(true)
        setShowLines((prev) => {
          const newLines = [...prev]
          newLines[6] = true
          return newLines
        })
        setTimeout(() => {
          setFadeOut(true)
          setTimeout(() => {
            onComplete()
          }, 800)
        }, 3500)
      }
    }, 800)
  }

  const executeCommand = (index: number) => {
    typeCommand(commands[index].cmd, index)
  }

  useEffect(() => {
    setShowLines((prev) => {
      const newLines = [...prev]
      newLines[0] = true
      return newLines
    })

    setTimeout(() => {
      executeCommand(0)
    }, 1000)
  }, [])

  return (
    <div className={`futuristic-terminal-loader ${fadeOut ? "terminal-fade-out" : ""}`}>
      <div className="terminal-bg-animation">
        <div className="terminal-grid">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={`h-${i}`} className="terminal-grid-line horizontal" style={{ top: `${i * 7}%` }} />
          ))}
          {Array.from({ length: 15 }, (_, i) => (
            <div key={`v-${i}`} className="terminal-grid-line vertical" style={{ left: `${i * 7}%` }} />
          ))}
        </div>

        <div className="terminal-stars">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="terminal-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>

        <div className="terminal-particles">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="terminal-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="futuristic-terminal-window">
        <div className="futuristic-terminal-header">
          <div className="terminal-buttons">
            <span className="btn-close"></span>
            <span className="btn-minimize"></span>
            <span className="btn-maximize"></span>
          </div>
          <div className="terminal-title">
            <span className="terminal-icon">⚡</span>
            hadeel@portfolio:~$
            <span className="terminal-status">CONNECTED</span>
          </div>
        </div>
        <div className="futuristic-terminal-body">
          <div className="terminal-scan-line"></div>

          {showLines[0] && (
            <div className="terminal-line">
              <span className="prompt">
                <span className="prompt-user">hadeel</span>
                <span className="prompt-at">@</span>
                <span className="prompt-host">portfolio</span>
                <span className="prompt-path">:~$</span>
              </span>
              <span className="command">{displayedCommands[0]}</span>
              <span className="cursor">█</span>
            </div>
          )}
          {showLines[1] && (
            <div className="terminal-line">
              <span className="output">{displayedOutputs[0]}</span>
            </div>
          )}
          {showLines[2] && (
            <div className="terminal-line">
              <span className="prompt">
                <span className="prompt-user">hadeel</span>
                <span className="prompt-at">@</span>
                <span className="prompt-host">portfolio</span>
                <span className="prompt-path">:~$</span>
              </span>
              <span className="command">{displayedCommands[1]}</span>
              <span className="cursor">█</span>
            </div>
          )}
          {showLines[3] && (
            <div className="terminal-line">
              <span className="output">{displayedOutputs[1]}</span>
            </div>
          )}
          {showLines[4] && (
            <div className="terminal-line">
              <span className="prompt">
                <span className="prompt-user">hadeel</span>
                <span className="prompt-at">@</span>
                <span className="prompt-host">portfolio</span>
                <span className="prompt-path">:~$</span>
              </span>
              <span className="command">{displayedCommands[2]}</span>
              <span className="cursor">█</span>
            </div>
          )}
          {showLines[5] && (
            <div className="terminal-line">
              <span className="output">{displayedOutputs[2]}</span>
            </div>
          )}
          {showLines[6] && (
            <div className="terminal-line">
              <div className="futuristic-loading-container">
                <div className="loading-header">
                  <span className="loading-icon">🚀</span>
                  <span className="loading-text">Initialising Portfolio Systems</span>
                </div>
                <div className="loading-systems">
                  <div className="system-line">
                    <span className="system-name">Neural Network</span>
                    <span className="system-status">ONLINE</span>
                  </div>
                  <div className="system-line">
                    <span className="system-name">Quantum Processor</span>
                    <span className="system-status">ACTIVE</span>
                  </div>
                  <div className="system-line">
                    <span className="system-name">Holographic Display</span>
                    <span className="system-status">READY</span>
                  </div>
                </div>
                <div className="futuristic-progress-container">
                  <div className="progress-label">
                    <span>Loading Portfolio</span>
                    <span className="progress-percentage">100%</span>
                  </div>
                  <div className="futuristic-progress-bar">
                    <div className="progress-fill"></div>
                    <div className="progress-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
