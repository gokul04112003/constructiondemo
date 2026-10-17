
export default function Navbar() {
  return (
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
  );
}
