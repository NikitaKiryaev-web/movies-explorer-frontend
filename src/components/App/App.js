import {useState, useEffect} from 'react';
import '../../index.css';
import './App.css';
import '../Header/Header';
import {Route, Redirect, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import * as moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';


function App() {

const [isLoading, setIsLoading] = useState(false);
const [movies, setMovies] = useState([]);
const [savedMovies, setSavedMovies] = useState([]);
const [isShortMovies, setIsShortMovies] = useState(false);

function handleShortMovies(e) {
  setIsShortMovies(e.target.checked);
}

function searchMoviesByKeyword(movies, keyword) {
  let foundMovies = [];

  movies.forEach((movie) => {
    if(movie.nameRU.indexOf(keyword) > -1) {
      if(isShortMovies) {
        movie.duration <= 40 && foundMovies.push(movie);
      }
      else {
        foundMovies.push(movie);
      }
    }
  })

  return foundMovies;
}

function searchMovies(keyword) {
  setIsLoading(true);
  setMovies([]);
  
  moviesApi.getMovies()
    .then(resMovies => {
      const searchResult = searchMoviesByKeyword(resMovies, keyword);
      setMovies(searchResult);
      localStorage.setItem('movies', JSON.stringify(searchResult));
    })

    .finally(() => {
      setIsLoading(false);
    })
}

function searchSavedMovies(keyword) {
  const movies = JSON.parse(localStorage.getItem('savedMovies'));
  const searchResult = searchMoviesByKeyword(movies, keyword);
  setSavedMovies(searchResult); 
}

function saveMovie(movie) {
  mainApi.saveMovie(movie)
    .then((data) => {
      const movies = [...savedMovies, data];
      setSavedMovies(prev => ([...prev, data]));
      localStorage.setItem('savedMovies', JSON.stringify(movies))
      console.log(movie);
    })
    .catch(err => console.log(`Error: ${err}`));
}

function deleteMovie(movieId) {
  mainApi.deleteMovie(movieId)
    .then((res) => {
      const filteredsavedMovies = savedMovies.filter((item) => {
        return item._id !== movieId
      });
      setSavedMovies(filteredsavedMovies);
      localStorage.setItem('savedMovies', JSON.stringify(filteredsavedMovies));
    })
    .catch(err => console.log(`Error: ${err}`));
}

  return (
    <div className='app'>
      <div className='app__container'>

        <Switch>
          <Route exact path='/'>
            <Header/>
            <Main/>
            <Footer/>
          </Route>
          <Route path='/profile'>
            <Header isLoggedIn={true}/>
            <Profile/>
          </Route>
          <Route path="/movies">
            <Header isLoggedIn={true}/>
            <Movies
              handleSearchMovies={searchMovies}
              movies={movies} 
              handleShortMovies={handleShortMovies}
              isShortMovies={isShortMovies}
              handleSaveMovie={saveMovie}
              handleDeleteMovie={deleteMovie}
            />
            <Footer/>
          </Route>
          <Route path="/saved-movies">
            <Header isLoggedIn={true}/>
            <SavedMovies
              movies={savedMovies}
              handleSearchSavedMovies={searchSavedMovies}
              isShortMovies={isShortMovies}
              handleDeleteMovie={deleteMovie}
              handleShortMovies={handleShortMovies}
            />
            <Footer/>
          </Route>
          <Route path='/signup'>
              <Register/>
          </Route>
          <Route path='/signin'>
              <Login/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
