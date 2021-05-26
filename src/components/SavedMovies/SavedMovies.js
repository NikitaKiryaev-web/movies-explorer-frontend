import './SavedMovies.css';
import '../SearchForm/SearchForm';
import '../MovieCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MovieCardList/MovieCardList';

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList savedMovies={true} isSaved={true}/>
    </section>
  )
}

export default SavedMovies;