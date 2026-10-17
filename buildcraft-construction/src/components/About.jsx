
export default function About() {
  return (
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
          We believe building a home should be an exciting
          experience. Our approach focuses on understanding
          your needs, planning carefully, and delivering
          quality at every stage.
        </p>

        <a className="text-link" href="#contact">
          Start your project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
