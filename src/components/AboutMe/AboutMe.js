import './AboutMe.css';
import aboutMeAvatar from '../../images/avatarka.jpg';
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
            Я начинающий веб разработчик, учусь на 4 курсе института МТУСИ. Киноман и баскетболист.
            Начал кодить 3 года назад.
            После того, как прошел курсы по веб-разработке, начал активно искать работу
            и развиваться в своем ремесле.
            На данный момент изучаю Redux и TypeScript.
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