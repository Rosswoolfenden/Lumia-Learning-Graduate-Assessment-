import '../App.css';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MovieCards from './moviecard';
import { UserContext } from '../contexts/usercontext';
import { Redirect } from 'react-router';

function Home(props) {

  const { auth } = useContext(UserContext);
  
  // Hook states to store movie list.
  const [movies, setMovies] = useState();
  useEffect(() => {
    if(!auth) {
      return;
    }
    // Call api for movie list.
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/movies/mymovies',
      headers: {
        "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
      }
    }).then(res => {
      console.log(res);
      if(!res.data.favourite_movies) {
        alert("You have no faviroute movies! Use the search to discover!");
      } else {
        setMovies((res.data.favourite_movies).split(','))
      }
      // What to do we with the resposne
      
      // console.log( movies)
    }).catch(err => {
      // Todo - better handling of errors
      alert("Failed to collect");
      console.log(err);
    });
  }, []);


  // faveArrays = (favirotes.favourite_movies).split(',');
  return (
    <>
      
        {!auth  ? (
          <Redirect to={{pathname: "/login"}} />
        ) : (
          <div className="site-layout-content">
          <div className="page-header">
            <h1> Your favourites! </h1>
          </div>

          <div className="cardlist">
            {/*  */}
            {movies && movies.map(movie => { return( <MovieCards movieid={movie} addrem={"Remove"}/> )})}
          </div>  
      </div>
        )}
        
    </>  
  );
}

export default Home;