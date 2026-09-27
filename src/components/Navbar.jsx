import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        ГОРХИМ
      </a>

      <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#about" onClick={closeMenu}>
          За нас
        </a>

        <a href="#menu" onClick={closeMenu}>
          Меню
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Галерия
        </a>

        <a href="#location" onClick={closeMenu}>
          Контакти
        </a>

        <a
          href="#location"
          className="mobile-nav-contact"
          onClick={closeMenu}
        >
          Намерете ни
        </a>
      </nav>

      <a href="#location" className="nav-contact">
        Намерете ни
      </a>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Отвори меню"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Navbar