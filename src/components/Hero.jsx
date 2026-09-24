import heroImage from '../assets/hero.jpg'

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <p className="eyebrow">РЕСТОРАНТ</p>

        <h1>Горхим</h1>

        <p className="hero-text">
          Вкусът на планината, съчетан с уют,
          традиция и незабравима атмосфера.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="button button-gold">
            Виж менюто
          </a>

          <a href="#about" className="button button-transparent">
            За нас
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero