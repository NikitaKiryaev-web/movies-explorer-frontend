import './AboutMe.css';
import aboutMeAvatar from '../../images/aboutMeAvatar.jpg';
import Section from '../Section/Section';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe(props) {
  return (
    <Section title="Студент">
      <div className="about-me__wrapper">
        <div className="about-me__info">
          <h3 className="about-me__name">Никита</h3>
          <p className="about-me__title">Фронтенд-разработчик, 20 лет</p>
          <p className="about-me__subtitle">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__social">
            <li className="about-me__social-item">
              <a className="about-me__social-link" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li className="about-me__social-item">
              <a className="about-me__social-link" href="https://github.com/NikitaKiryaev-web" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__avatar" alt="Аватар" src={aboutMeAvatar}/>
      </div>
      <Portfolio />
    </Section>
  )
}

export default AboutMe;