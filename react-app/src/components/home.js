import '../App.css';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MovieCards from './moviecard';
import { UserContext } from '../contexts/usercontext';
import { Redirect } from 'react-router';

function Home(props) {

  const { auth } = useContext(UserContext);
  
  const [movies, setMovies] = useState();
  const auth1 = {
    username: 'user',
    password: 'qwerty'
  };
  useEffect(() => {
    console.log(auth.username);
    console.log(auth.password);
    if(!auth) {
      return;
    }
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
      alert("Failed to collect");
      console.log(err);
    });
  }, []);

  const redirect = () => {
    console.log("Redirecting")
  }

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