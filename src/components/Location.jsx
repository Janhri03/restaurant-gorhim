function Location() {
  return (
    <section className="location-section" id="location">
      <div className="container location-grid">
        <div className="map">
          <iframe
            title="Ресторант Горхим"
            src="https://www.google.com/maps?q=%D0%93%D0%BE%D1%80%D1%85%D0%B8%D0%BC%2C%20%D0%94%D1%83%D0%BF%D0%BD%D0%B8%D1%86%D0%B0%2C%20Bulgaria&output=embed"
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
                Местност Горхим
                <br />
                2600 Дупница, България
              </p>
            </div>
          </div>

          <div className="contact-row">
            <span className="contact-icon">☎</span>

            <div>
              <h3>Телефон</h3>
              <p>+359 878 101 218</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Горхим+Дупница+България"
            target="_blank"
            rel="noreferrer"
            className="button button-gold location-button"
          >
            Отвори в Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location