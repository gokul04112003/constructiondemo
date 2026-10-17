
import { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/site";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "New house construction",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "Hello! I would like to enquire about your construction services.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Project location: ${form.location}`,
      `Project type: ${form.projectType}`,
      `Requirements: ${form.message || "Not provided"}`,
    ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
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
  );
}
