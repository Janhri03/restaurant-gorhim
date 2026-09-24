import aboutImage from '../assets/about.jpg'

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-grid">
        <div className="about-image-wrapper">
          <img
            src={aboutImage}
            alt="Ресторант Горхим"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <p className="eyebrow">ДОБРЕ ДОШЛИ</p>

          <h2>
            Вкусът на
            <br />
            планината
          </h2>

          <p>
            В ресторант Горхим вярваме, че добрата храна е повече
            от вкус. Тя е преживяване, което събира хората около
            една маса.
          </p>

          <p>
            Нашата кухня съчетава традиционни вкусове, внимателно
            подбрани продукти и спокойната атмосфера на природата.
          </p>

          <div className="about-features">
            <span>Традиционна кухня</span>
            <span>Уютна атмосфера</span>
            <span>Подбрани продукти</span>
            <span>Красива природа</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About