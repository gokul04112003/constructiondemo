
import { useState } from "react";
import { projects } from "../data/projects";

export default function ProjectGallery() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Villas", "Houses"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section
      className="section projects-section"
      id="projects"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR PORTFOLIO</p>
          <h2>
            Spaces that <em>inspire.</em>
          </h2>
        </div>

        <p>
          Explore our residential projects and discover ideas
          for your future home.
        </p>
      </div>

      <div className="project-filters" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={
              filter === category
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-info">
              <div>
                <p>{project.location}</p>
                <h3>{project.title}</h3>
              </div>

              <a
                href="#contact"
                aria-label={`Enquire about ${project.title}`}
              >
                ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
