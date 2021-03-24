import '../App.css';
import { Card, Button } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import PostGrid from './postgrid';

const { Meta } =  Card;
function MovieCards(props) {
  const [movie, setMovie] =  useState();
  const [addrem, setAddrem] =  useState();

  useEffect(() => {
    console.log(props)
    let url  = props.movieid.toString();
    axios.get('http://www.omdbapi.com/?apikey=59d90756&i=' + props.movieid)
      .then(res => {
        setMovie(res.data);
      }).catch(err =>{
        console.log("An error occured");
        console.log(err);
      });
      setAddrem(props.addrem)
      console.log(addrem);

  }, []);

  return (
    <>
      <div className="moviecard">
        {movie ? (
          <div className= "movierow">
            <Card cover={<img src={movie.Poster} /> } >
            </Card>
            <Card>
              <Meta title={movie.Title  + "  -  " + movie.Year} />
              <Meta description={"Director: " + movie.Director} />
              <Meta description={"Genre:  " + movie.Genre} />
              <p>Plot: {movie.Plot} </p>
              <Button className="addremove"> {addrem} </Button>
              
            </Card>
          </div> 

        ) : (
          <h1> Loading... </h1>
        )}
        
      </div>
    </>  
  );
}

async function add_remove_movie(){
  
  console.log("I have been pressed yay");
}

export default MovieCards;
