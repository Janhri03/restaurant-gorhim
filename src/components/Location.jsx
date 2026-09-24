function Location() {
  return (
    <section className="location-section" id="location">
      <div className="container location-grid">
        <div className="map">
          <iframe
            title="Gorhim location"
            src="https://www.google.com/maps?q=Bulgaria&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="location-content">
          <p className="eyebrow">КОНТАКТИ</p>

          <h2>Намерете ни</h2>

          <div className="contact-row">
            <span className="contact-icon">⌖</span>

            <div>
              <h3>Адрес</h3>
              <p>
                Добавете реалния адрес
                <br />
                на ресторант Горхим
              </p>
            </div>
          </div>

          <div className="contact-row">
            <span className="contact-icon">◷</span>

            <div>
              <h3>Работно време</h3>
              <p>
                Понеделник – Неделя
                <br />
                10:00 – 23:00
              </p>
            </div>
          </div>

          <div className="contact-row">
            <span className="contact-icon">☎</span>

            <div>
              <h3>Телефон</h3>
              <p>+359 88 000 0000</p>
            </div>
          </div>

          <a href="#" className="button button-gold location-button">
            Направи резервация
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location