export default function Experience() {
  const experiences = [
    {
      date: "June 2025 - August 2025",
      title: "Software Development Engineer Intern",
      company: "Warner Bros. Discovery",
      description:
        "Interned in Global Tech & Products and was responsible for refactoring features, fixing bugs and conducting comprehensive software testing related to UI components for the HBO Max and discovery+ apps across iOS, tvOS and visionOS using Swift, UIKit and XCTest",
    },
    {
      date: "September 2024 - December 2024",
      title: "Teaching Assistant/Demonstrator",
      company: "Queen Mary, University of London",
      description:
        "Selected due to high academic achievement to deliver weekly tutorials for the module Electronic Engineering Mathematics 1 to over 100 students, mark weekly assignments, both formative and summative and provide feedback to over 20 students. Topics covered include complex numbers, vectors, calculus, hyperbolic functions, sequences and series.",
    },
    {
      date: "July 2024",
      title: "Xperience Tech Intern",
      company: "BNY",
      description:
        "Shadowed software engineers, FX traders and learnt more about the bank's in-house generative AI model Eliza, powered by NVIDIA's DGX SuperPOD and its uses in banking.",
    },
  ]

  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <h2 className="section-title gradient-text">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="date">{exp.date}</span>
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
