export default function Projects() {
  const projects = [
    {
      title: "FDM Timesheets",
      image: "/fdmtimesheets.png",
      techStack: ["React", "Express", "TypeScript", "Prisma ORM"],
      description: "A full-stack FDM Timesheets + leave management system built as part of ECS506 Software Engineering Project. Winner of Best Project for Timesheets out of 7 groups."
    },
    {
      title: "Aviation Weather App",
      image: "/weatherapp.png",
      techStack: ["React", "OpenWeatherMap API", "Figma"],
      description: "A responsive weather application for pilots that uses the OpenWeatherMap API to fetch and display data based on location as part of ECS522 Graphical User Interfaces. Parses a JSON file to map a 4 digit aviation GPS code to a city. Prototyped designs using Figma."
    },
    {
      title: "Sprout Lands",
      image: "/sproutlands.png",
      techStack: ["Python", "Pygame"],
      description:
        "A 2D farming simulation game where players can plant, harvest, and sell crops while managing resources, built using Pygame to enhance object-oriented design and programming skills.",
    },
    {
      title: "Inventory Management",
      image: "/pantrypal.png",
      techStack: ["React", "Next.js", "Firebase"],
      description: "A web-based inventory management system for tracking stock, suppliers, and real-time updates.",
    },
    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      techStack: ["HTML", "CSS", "JavaScript"],
      description: "A responsive and interactive personal portfolio website showcasing my projects and experience.",
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title gradient-text">Projects</h2>
        <div className="project-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={`${project.title} Project`} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <p className="description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
