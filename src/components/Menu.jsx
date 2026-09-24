const menuItems = [
  {
    name: 'Шопска салата',
    description: 'Домати, краставици, сирене, чушки и лук',
    price: '12 лв.',
  },
  {
    name: 'Катък с печени чушки',
    description: 'Домашен катък, печени чушки и свежи подправки',
    price: '11 лв.',
  },
  {
    name: 'Телешки суджук',
    description: 'Поднесен с гарнитура и домашен хляб',
    price: '18 лв.',
  },
  {
    name: 'Свински врат на скара',
    description: 'С картофи, сезонни зеленчуци и сос',
    price: '22 лв.',
  },
]

function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="container menu-container">
        <div className="menu-heading">
          <div>
            <p className="eyebrow">НАШЕТО МЕНЮ</p>
            <h2>Нашата кухня</h2>
          </div>

          <p className="menu-intro">
            Подбрани ястия, вдъхновени от българската кухня
            и вкусовете на планината.
          </p>
        </div>

        <div className="menu-list">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

              <span>{item.price}</span>
            </div>
          ))}
        </div>

        <a href="#" className="menu-link">
          Разгледай цялото меню →
        </a>
      </div>
    </section>
  )
}

export default Menu