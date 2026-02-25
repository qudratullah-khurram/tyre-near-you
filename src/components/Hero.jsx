//Hero.jsx
import hero from '../assets/Hero.jpg'

function Hero() {
  return (
    <section className="hero">
      <img src={hero} alt="Mobile tyre service" className="hero-img" />

      <div className="hero-content">
        <h1>Mobile Tyre Emergency Service</h1>
        <p>
          We connect you with the nearest mobile tyre service —
          fast help, wherever you are in England.
        </p>

        <div className="hero-buttons">
          <a href="tel:+447897760073" className="btn primary">
            Call Now
          </a>
          <a
            href="https://wa.me/447897760073"
            className="btn secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
