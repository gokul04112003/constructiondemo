
import { useState } from "react";
import "./App.css";

const WHATSAPP_NUMBER = "918072750055"; // Replace with client's number

const services = [
  {
    number: "01",
    title: "House Construction",
    description:
      "Build a home tailored to your lifestyle, space, and requirements.",
  },
  {
    number: "02",
    title: "Turnkey Projects",
    description:
      "Coordinate your construction project from planning to handover.",
  },
  {
    number: "03",
    title: "Renovation",
    description:
      "Transform existing spaces with thoughtful improvements and design.",
  },
];

const projects = [
  {
    id: 1,
    title: "Contemporary Villa",
    category: "Villas",
    location: "Project location",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Modern Family Home",
    category: "Houses",
    location: "Project location",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Luxury Residence",
    category: "Villas",
    location: "Project location",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "New house construction",
    message: "",
  });

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enquiryMessage = [
      "Hello! I would like to enquire about your construction services.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Project location: ${form.location}`,
      `Project type: ${form.projectType}`,
      `Requirements: ${form.message || "Not provided"}`,
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(enquiryMessage);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <header className="navbar" id="home">
        <a className="brand" href="#home" aria-label="BuildCraft home">
          <span className="brand-logo">B.</span>
          <span className="brand-text">
            <strong>BUILDCRAFT</strong>
            <small>HOMES & CONSTRUCTION</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
        </nav>

        <a className="nav-button" href="#contact">
          Get a Quote <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              RESIDENTIAL CONSTRUCTION
            </p>

            <h1>
              Building dreams.
              <br />
              <em>Creating homes.</em>
            </h1>

            <p className="hero-description">
              Thoughtful design, quality craftsmanship, and homes built
              around the way you live.
            </p>

            <div className="hero-actions">
              <a className="button button-gold" href="#projects">
                Explore Projects <span aria-hidden="true">↗</span>
              </a>

              <a className="button button-outline" href="#contact">
                Let's Talk
              </a>
            </div>

            <p className="hero-caption">
              YOUR VISION. OUR CRAFTSMANSHIP.
            </p>
          </div>
        </section>

        <section className="trust-strip">
          <span>Thoughtful Planning</span>
          <span>Quality Craftsmanship</span>
          <span>Customer-Focused Service</span>
        </section>

        <section className="section about-section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
              alt="Contemporary residential home"
              loading="lazy"
            />
            <div className="image-label">
              <span>OUR APPROACH</span>
              <strong>Designed around you.</strong>
            </div>
          </div>

          <div className="about-content">
            <p className="eyebrow">ABOUT OUR COMPANY</p>

            <h2>
              Every home has
              <br />
              <em>a story.</em>
            </h2>

            <p>
              We believe building a home should be an exciting experience.
              Our approach focuses on understanding your needs, planning
              carefully, and delivering quality at every stage.
            </p>

            <a className="text-link" href="#contact">
              Start your project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR SERVICES</p>
              <h2>
                Built with <em>purpose.</em>
              </h2>
            </div>

            <p>
              Construction solutions designed around your property,
              priorities, and vision.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-divider" />

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a
                  href="#contact"
                  aria-label={`Enquire about ${service.title}`}
                >
                  Learn more ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR PORTFOLIO</p>
              <h2>
                Spaces that <em>inspire.</em>
              </h2>
            </div>

            <p>
              Explore residential design examples. Replace these demo
              entries with your client's real projects before launch.
            </p>
          </div>

          <div className="project-filters" aria-label="Filter projects">
            {["All", "Villas", "Houses"].map((category) => (
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

        <section className="process-section">
          <div className="process-inner">
            <p className="eyebrow hero-eyebrow">HOW WE WORK</p>

            <h2>
              From idea to <em>home.</em>
            </h2>

            <div className="process-grid">
              {[
                {
                  number: "01",
                  title: "Consultation",
                  description: "Understand your ideas and requirements.",
                },
                {
                  number: "02",
                  title: "Planning",
                  description: "Discuss design, specifications, and budget.",
                },
                {
                  number: "03",
                  title: "Construction",
                  description: "Turn the approved plans into reality.",
                },
                {
                  number: "04",
                  title: "Handover",
                  description: "Prepare your home for its next chapter.",
                },
              ].map((step) => (
                <article className="process-item" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-content">
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>
              Let's build your
              <br />
              <em>dream home.</em>
            </h2>

            <p>
              Tell us a little about your project. Submit your details
              and continue the conversation through WhatsApp.
            </p>

            <div className="contact-promise">
              <span>✦</span>
              <div>
                <strong>Every great home starts with a conversation.</strong>
                <p>Share your idea with our team.</p>
              </div>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <h3>Project enquiry</h3>

            <label htmlFor="name">Full name *</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="name"
              required
            />

            <label htmlFor="phone">Phone number *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              autoComplete="tel"
              required
            />

            <label htmlFor="location">Project location *</label>
            <input
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="City or area"
              required
            />

            <label htmlFor="projectType">Project type</label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
            >
              <option>New house construction</option>
              <option>Villa construction</option>
              <option>Turnkey construction</option>
              <option>Home renovation</option>
              <option>Other</option>
            </select>

            <label htmlFor="message">Project requirements</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
            />

            <button className="button button-dark" type="submit">
              Continue to WhatsApp <span aria-hidden="true">↗</span>
            </button>

            <p className="form-note">
              WhatsApp will open with your enquiry ready to send.
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-logo">B.</span>
          <span className="brand-text">
            <strong>BUILDCRAFT</strong>
            <small>HOMES & CONSTRUCTION</small>
          </span>
        </a>

        <p>Thoughtfully built. Made to last.</p>

        <span>
          © {new Date().getFullYear()} BuildCraft. All rights reserved.
        </span>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hello! I would like to enquire about your residential construction services."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.26-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93a11.84 11.84 0 0 0-3.5-8.42ZM12.09 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.84 9.84 0 0 1-1.51-5.25c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.81 9.81 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </>
  );
}

export default App;
