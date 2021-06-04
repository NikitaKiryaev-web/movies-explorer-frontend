import './Promo.css';
import promoImage from '../../images/promoImage.svg';

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__image" src={promoImage} alt="Промо"></img>
      </div>
    </section>
  )
}

export default Promo;