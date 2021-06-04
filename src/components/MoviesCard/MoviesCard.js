import "./MoviesCard.css";
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import mainApi from '../../utils/MainApi';

function MoviesCard(props) {

  const [isSaved, setIsSaved] = useState(false);

  const film = {
    country : props.movie.country || 'Страна',
    director: props.movie.director || 'Режиссер',
    duration: props.movie.duration || 0,
    year: props.movie.year || 'Не указано',
    description: props.movie.description || 'Описание',
    image: `https://api.nomoreparties.co${props.movie.image?.url}`,
    trailer: props.movie?.trailerLink,
    nameRU: props.movie.nameRU || 'Название',
    nameEN: props.movie.nameEN || 'Англ название',
    thumbnail: `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`,
    movieId: props.movie.id,
}
  const location = useLocation();
  const savedFilms = JSON.parse(localStorage.getItem('savedMovies'));
  let thisFilm = {};

  // написать функцию с использование mainApi.getSavedMovies для удаления лайков с фильмов
  
  if(savedFilms) {
    thisFilm = savedFilms.find(film => film.description === props.movie.description);
  }

  function handleSaveMovie() {
    props.handleSaveMovie(film);
    console.log(film);
    setIsSaved(true);
  }
  function handleDislikeMovie() {
    setIsSaved(false);
    props.handleDeleteMovie(props.movie._id);
  }

  function handleDeleteMovie() {
    if(thisFilm) {
      props.handleDeleteMovie(thisFilm._id);
      setIsSaved(false);
    }
  }

  useEffect(() => {
    if(thisFilm) {
      setIsSaved(true);
    }
  }, [location, thisFilm]);

  return (
    <div className="card">
      <div className="card__wrapper">
      <h2 className="card__title">{props.movie.nameRU}</h2>
      <p className="card__time">{`${props.movie.duration} минут`}</p>
      </div>
      <img className="card__image" src={props.isSavedMovies ? props.movie.image : film.image} alt="Картинка фильма" />
      {props.isSavedMovies ? 
       <button className="card__delete-button" type="button" onClick={handleDislikeMovie}></button>
      :  
      <button className={isSaved ? 'active-btn' : 'card__save-button'} onClick={!isSaved ? handleSaveMovie : handleDeleteMovie } type="button">{isSaved? '' : 'Сохранить'}</button>}

    </div>
  )
}

export default MoviesCard;