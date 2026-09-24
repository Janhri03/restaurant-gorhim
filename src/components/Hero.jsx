import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">РЕСТОРАНТ</p>

        <h1>Горхим</h1>

        <p className="hero-description">
          Насладете се на автентична кухня, уютна атмосфера
          и красивата природа около нас.
        </p>

        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">
            Виж менюто
          </a>

          <a href="#about" className="btn btn-secondary">
            За нас
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero