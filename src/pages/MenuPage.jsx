import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import menuData from '../data/restaurantMenu.js'

function MenuPage() {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [])

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

          <div className="menu-hero-divider"></div>

          <p className="menu-hero-description">
            Традиционни ястия, приготвени с внимание, подбрани продукти
            и вкус, вдъхновен от планината.
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

          {menuData.map((section, sectionIndex) => (
            <section
              className="full-menu-category"
              id={section.category.replaceAll(' ', '-')}
              key={section.category}
            >
              <div className="category-heading">
                <div>
                  <p className="eyebrow dark-eyebrow">
                    {String(sectionIndex + 1).padStart(2, '0')}
                  </p>

                  <h2>{section.category}</h2>
                </div>

                <span className="category-count">
                  {section.items.length} предложения
                </span>
              </div>

              <div className="full-menu-list">
                {section.items.map((item) => (
                  <article className="full-menu-item" key={item.name}>
                    <div className="full-menu-info">
                      <div className="menu-item-title-row">
                        <h3>{item.name}</h3>
                        <span className="menu-item-line"></span>
                      </div>

                      {item.description && (
                        <p>{item.description}</p>
                      )}

                      <span className="menu-weight">{item.weight}</span>
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

          <p>Традиция, вкус и планинска атмосфера.</p>

          <Link to="/">← Начало</Link>
        </div>
      </footer>
    </main>
  )
}

export default MenuPage