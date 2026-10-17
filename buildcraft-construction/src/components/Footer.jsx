
export default function Footer() {
  return (
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
  );
}
