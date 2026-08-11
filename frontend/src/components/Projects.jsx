// Projects grid rendered from API data
export default function Projects({ projects }) {
  return (
    <section id="projects">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">Projects</h2>

        {/* Project cards */}
        <div className="project-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              className="project-card"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              {/* Project title */}
              <h3>{project.title}</h3>

              {/* Project description */}
              <p>{project.description}</p>

              {/* Tech tags */}
              <ul className="tech-list">
                {project.tech.map((techName) => (
                  <li key={techName} className="tech-tag">
                    {techName}
                  </li>
                ))}
              </ul>

              {/* Project link label */}
              <span className="project-card-label">
                {project.linkLabel}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
