import './SearchForm.css';
import {useState} from 'react';
import searchIcon from '../../images/searchIcon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const [searchInput, setSearchInput] = useState('');
  const [isSearchFormValid, setIsSearchFormValid] = useState(true);

  function handleChange(e) {
    setSearchInput(e.target.value);
    setIsSearchFormValid(e.target.checkValidity());
  }

  function onSubmit(e) {
    e.preventDefault();
    props.handleSearchMovies(searchInput);
  }

  function onSubmitSavedMovies(e) {
    e.preventDefault();
    props.handleSearchSavedMovies(searchInput);
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={props.isSavedMovies ? onSubmitSavedMovies : onSubmit}>
        <img className="search__icon" src={searchIcon} alt="Поиск"/>
        <input className="search__input" type="text" name="search" placeholder="Фильм" onChange={handleChange} required/>
        <span className={`search__input-error ${isSearchFormValid ? 'search__input-error_hidden' : ''}`}>Это поле обязательно</span>
        <button className="search__submit" type="submit"></button>
        <div className="search__separator"></div>
        <FilterCheckbox handleShortMovies={props.handleShortMovies} isShortMovies={props.isShortMovies}/>
      </form>
    </section>
  )
}

export default SearchForm;