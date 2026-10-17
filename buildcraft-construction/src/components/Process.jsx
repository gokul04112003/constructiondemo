
const steps = [
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
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="process-inner">
        <p className="eyebrow hero-eyebrow">HOW WE WORK</p>

        <h2>
          From idea to <em>home.</em>
        </h2>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-item" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
