export default function Education() {
  return (
    <section id="education" className="timeline-section">
      <div className="container">
        <h2 className="section-title gradient-text">Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="date">2023 - 2026</span>
              <h3>Queen Mary University of London</h3>
              <p className="degree">BEng Computer Systems Engineering (Hons)</p>
              <div className="education-details">
                <div className="year-details">
                  <h4>
                    First Year: <span className="highlight">1st Class achieved (83%)</span>
                  </h4>
                  <p>
                    Modules: Procedural Programming, Engineering Skills and Practice, Electronic Engineering Mathematics
                    1, Object-Oriented Programming, Signals and Information, Communications and Networks, Analogue
                    Electronic Systems, Digital Circuit Design.
                  </p>
                </div>
                <div className="year-details">
                  <h4>
                    Second Year: <span className="highlight">1st Class achieved (79%)</span>
                  </h4>
                  <p>
                    Modules: Software Engineering, Algorithms and Data Structures, Communications Systems,
                    Microprocessors Systems Design, Software Engineering Project, Graphical User Interfaces, Digital
                    Systems Design, Operating Systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="date">2020 - 2022</span>
              <h3>London Academy</h3>
              <p className="degree">A Levels: Chemistry (A*), Mathematics (A*), Physics (B)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
