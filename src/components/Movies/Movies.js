import './Movies.css';
import '../SearchForm/SearchForm';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MovieCardList/MovieCardList';

function Movies(props) {
  return (
  <section className="movies">
    <SearchForm
      handleSearchMovies={props.handleSearchMovies}
      isShortMovies={props.isShortMovies}
      handleShortMovies={props.handleShortMovies}
    />
    <MoviesCardList 
      movies={props.movies}
      handleSaveMovie={props.handleSaveMovie}
      handleDeleteMovie={props.handleDeleteMovie}
    />
  </section>
  )
}

export default Movies;