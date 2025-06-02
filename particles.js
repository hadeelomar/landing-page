if (typeof particlesJS !== 'undefined') {
    particlesJS("particles", {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.8,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
} else {
    console.warn("particlesJS is not defined. Make sure particles.js library is included.");
}

// cursor effects
document.addEventListener('DOMContentLoaded', function() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // cursor trail with random chance
        if (Math.random() < 0.3) { 
            const trail = document.createElement('div');
            trail.innerHTML = ['⚡', '💫', '🔹', '◆', '✦'][Math.floor(Math.random() * 5)];
            trail.style.position = 'fixed';
            trail.style.left = (mouseX + Math.random() * 20 - 10) + 'px';
            trail.style.top = (mouseY + Math.random() * 20 - 10) + 'px';
            trail.style.pointerEvents = 'none';
            trail.style.fontSize = '10px';
            trail.style.zIndex = '9999';
            trail.style.color = '#4a90e2';
            trail.style.animation = 'dark-fade 1.5s ease-out forwards';
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 1500);
        }
    });
    
    // subtle click effects
    document.addEventListener('click', function(e) {
        const clickEffect = document.createElement('div');
        clickEffect.innerHTML = '◉';
        clickEffect.style.position = 'fixed';
        clickEffect.style.left = e.clientX + 'px';
        clickEffect.style.top = e.clientY + 'px';
        clickEffect.style.pointerEvents = 'none';
        clickEffect.style.fontSize = '16px';
        clickEffect.style.zIndex = '9999';
        clickEffect.style.color = '#4a90e2';
        clickEffect.style.animation = 'dark-ripple 0.6s ease-out forwards';
        
        document.body.appendChild(clickEffect);
        
        setTimeout(() => {
            if (clickEffect.parentNode) {
                clickEffect.parentNode.removeChild(clickEffect);
            }
        }, 600);
    });
});

// update CSS animations
const darkCursorStyles = document.createElement('style');
darkCursorStyles.textContent = `
    @keyframes dark-fade {
        0% {
            opacity: 0.8;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.3);
        }
    }
    
    @keyframes dark-ripple {
        0% {
            opacity: 0.8;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(3);
        }
    }
`;
document.head.appendChild(darkCursorStyles);
