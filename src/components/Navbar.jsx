function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        ГОРХИМ
      </a>

      <nav className="nav-links">
        <a href="#about">За нас</a>
        <a href="#menu">Меню</a>
        <a href="#gallery">Галерия</a>
        <a href="#location">Контакти</a>
      </nav>

      <a href="#location" className="nav-reservation">
        Резервация
      </a>
    </header>
  )
}

export default Navbar