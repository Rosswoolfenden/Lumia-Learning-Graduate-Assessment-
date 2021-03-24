import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCards from './moviecard';


function Home(props) {
  const [movies, setMovies] = useState();
  const auth = {
    username: 'user',
    password: 'qwerty'
  };
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/movies/mymovies',
      headers: {
        "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
      }
    }).then(res => {
      // What to do we with the resposne
      setMovies((res.data.favourite_movies).split(','))
      // console.log( movies)
    }).catch(err => {
      // Todo - better handling of errors
      console.log(err);
    });
  }, []);

  // faveArrays = (favirotes.favourite_movies).split(',');
  return (
    <>
      <div className="site-layout-content">
        <div className="page-header">
          <h1> Your favirotes! </h1>
        </div>

        <div className="cardlist">
          {/*  */}
          {movies && movies.map(movie => { return( <MovieCards movieid={movie} addrem={"Remove"}/> )})}
        </div>  
      </div>
    </>  
  );
}

export default Home;