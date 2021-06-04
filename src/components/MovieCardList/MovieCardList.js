import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  return (
    <section className="movies-list"> 
      <Preloader/>
      <ul className="movies-list__items">
        {props.movies.map((movie) => {
          return (
          <li className="movies-list__list-item" key={props.isSavedMovies ? movie.movieId : movie.id}>
            <MoviesCard 
              movie={movie}
              handleSaveMovie={props.handleSaveMovie}
              handleDeleteMovie={props.handleDeleteMovie}
              isSavedMovies={props.isSavedMovies}
            />
          </li>
          )
        })}
      </ul>
      <button className={props.isSavedMovies ? 'movies-list__add-btn movies-list__add-btn_disabled' : 'movies-list__add-btn'}>Ещё</button>
    </section>
  )
}

export default MoviesCardList;