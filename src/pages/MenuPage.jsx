import { Link } from 'react-router-dom'
import menuData from './data/menuData'

function MenuPage() {
  return (
    <main className="full-menu-page">
      <header className="menu-page-header">
        <div className="menu-page-nav container">
          <Link to="/" className="logo">
            ГОРХИМ
          </Link>

          <Link to="/" className="back-home">
            ← Начало
          </Link>
        </div>

        <div className="container menu-page-hero">
          <p className="eyebrow">РЕСТОРАНТ ГОРХИМ</p>

          <h1>Нашето меню</h1>

          <p>
            Традиционни ястия, приготвени с внимание и подбрани
            продукти.
          </p>
        </div>
      </header>

      <section className="full-menu-content">
        <div className="container">
          <nav className="menu-categories">
            {menuData.map((section) => (
              <a
                href={`#${section.category.replaceAll(' ', '-')}`}
                key={section.category}
              >
                {section.category}
              </a>
            ))}
          </nav>

          {menuData.map((section) => (
            <section
              className="full-menu-category"
              id={section.category.replaceAll(' ', '-')}
              key={section.category}
            >
              <div className="category-heading">
                <p className="eyebrow dark-eyebrow">ГОРХИМ</p>
                <h2>{section.category}</h2>
              </div>

              <div className="full-menu-list">
                {section.items.map((item) => (
                  <article className="full-menu-item" key={item.name}>
                    <div className="full-menu-info">
                      <h3>{item.name}</h3>

                      {item.description && (
                        <p>{item.description}</p>
                      )}

                      <span>{item.weight}</span>
                    </div>

                    <div className="full-menu-price">
                      <strong>{item.euro}</strong>
                      <span>{item.bgn}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <footer className="menu-page-footer">
        <div className="container">
          <Link to="/" className="footer-logo">
            ГОРХИМ
          </Link>

          <Link to="/">← Обратно към началната страница</Link>
        </div>
      </footer>
    </main>
  )
}

export default MenuPage