function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ГОРХИМ</div>

      <div className="navbar-links">
        <a href="#home">Начало</a>
        <a href="#about">За нас</a>
        <a href="#menu">Меню</a>
        <a href="#gallery">Снимки</a>
        <a href="#contact">Контакти</a>
      </div>

      <a href="#contact" className="navbar-button">
        Резервация
      </a>
    </nav>
  )
}

export default Navbar