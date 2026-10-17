
export default function Hero() {
  return (
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
          Thoughtful design, quality craftsmanship, and homes
          built around the way you live.
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
  );
}
