import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import gallery5 from '../assets/gallery-5.jpg'

function Gallery() {
  return (
    <section className="gallery-section section" id="gallery">
      <div className="container">
        <p className="eyebrow dark-eyebrow">ГАЛЕРИЯ</p>
        <h2>Снимки</h2>

        <div className="gallery-grid">
          <img
            src={gallery1}
            alt="Природа около ресторанта"
            className="gallery-large"
          />

          <img src={gallery2} alt="Храна" />
          <img src={gallery3} alt="Ястие" />
          <img src={gallery4} alt="Интериор" />
          <img src={gallery5} alt="Планината" />
        </div>
      </div>
    </section>
  )
}

export default Gallery