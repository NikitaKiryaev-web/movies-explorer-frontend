import './SavedMovies.css';
import '../SearchForm/SearchForm';
import '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MovieCardList/MovieCardList';

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <SearchForm
        isShortMovies={props.isShortMovies}
        handleShortMovies={props.handleShortMovies}
        handleSearchSavedMovies={props.handleSearchSavedMovies}
        isSavedMovies={true}
      />
      <MoviesCardList 
        isSavedMovies={true}
        movies={props.movies}
        handleDeleteMovie={props.handleDeleteMovie}
      />
    </section> 
  )
}

export default SavedMovies;