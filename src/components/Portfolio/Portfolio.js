import "./Portfolio.css"

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://nikitakiryaev-web.github.io/how-to-learn/" target="_blank">Статичный сайт</a>
        </li>
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://nikitakiryaev-web.github.io/russian-travel/" target="_blank">Адаптивный сайт</a>
        </li>
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://nikitakiryaev-web.github.io/react-mesto-auth" target="_blank">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;