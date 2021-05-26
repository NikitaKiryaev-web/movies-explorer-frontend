import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__vendors">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom-row">
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
          </li>
          <li className="footer__links-item">
            <a className="footer__link" href="https://github.com/NikitaKiryaev-web" target="_blank">Github</a>
          </li>
          <li className="footer__links-item">
            <a className="footer__link" href="https://facebook.com" target="_blank">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;