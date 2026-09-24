import gallery1 from '../assets/gallery-garden.jpg'
import gallery2 from '../assets/gallery-food.jpg'
import gallery3 from '../assets/gallery-potatoes.jpg'
import gallery4 from '../assets/gallery-playground.jpg'
import gallery5 from '../assets/gallery-entrance.jpg'

function Gallery() {
  return (
    <section className="gallery-section section" id="gallery">
      <div className="container">
        <p className="eyebrow dark-eyebrow">ГАЛЕРИЯ</p>
        <h2>Снимки</h2>

        <div className="gallery-grid">
          <img
            src={gallery1}
            alt="Градината на ресторант Горхим"
            className="gallery-large"
          />

          <img
            src={gallery2}
            alt="Традиционна кухня в ресторант Горхим"
          />

          <img
            src={gallery3}
            alt="Картофи с розмарин"
          />

          <img
            src={gallery4}
            alt="Детска площадка с изглед към планината"
          />

          <img
            src={gallery5}
            alt="Ресторант Горхим"
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery