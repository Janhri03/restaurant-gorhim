import { Link } from 'react-router-dom'

const menuItems = [
  {
    name: 'Салата „Горхим“',
    description:
      'Зеле, домати, краставици, царевица, кашкавал, рулца от раци и сос',
    euro: '9.20 €',
    bgn: '17.99 лв.',
  },
  {
    name: 'Гювече по Родопски',
    description:
      'Пилешко филе, гъби, бекон, сметана, картофено пюре и кашкавал',
    euro: '8.90 €',
    bgn: '17.41 лв.',
  },
  {
    name: 'Пилешко със зеленчуци на плоча',
    description:
      'Пилешко месо със свежи зеленчуци, приготвени на плоча',
    euro: '9.80 €',
    bgn: '19.17 лв.',
  },
  {
    name: 'Пъстърва на скара',
    description:
      'Прясна пъстърва, приготвена на скара',
    euro: '8.90 €',
    bgn: '17.41 лв.',
  },
]

function Menu() {
  return (
    <section className="menu-section reveal" id="menu">
      <div className="container menu-container">
        <div className="menu-heading">
          <div>
            <p className="eyebrow">ЛЮБИМИ НА ГОСТИТЕ</p>

            <h2>Най-поръчвани</h2>
          </div>

          <p className="menu-intro">
            Четири от ястията, които най-добре представят вкуса на Горхим.
          </p>
        </div>

        <div className="menu-list">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

              <div className="menu-preview-price">
                <strong>{item.euro}</strong>
                <span>{item.bgn}</span>
              </div>
            </div>
          ))}
        </div>

        <Link to="/menu" className="menu-link">
          Разгледай цялото меню →
        </Link>
      </div>
    </section>
  )
}

export default Menu