
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

export default function Services() {
  return (
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

            <a href="#contact">
              Learn more ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
