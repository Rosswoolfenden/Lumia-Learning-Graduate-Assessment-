import '../App.css';
import { Card, Button } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import PostGrid from './postgrid';

const { Meta } =  Card;
function MovieCards(props) {
  const [movie, setMovie] =  useState();
  const [addrem, setAddrem] =  useState();
  const [id, setId] =  useState();

  const auth = {
    username: 'user',
    password: 'qwerty'
  };

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?apikey=59d90756&i=' + props.movieid )
      .then(res => {
        setMovie(res.data);
        console.log(movie)
      }).catch(err =>{
        console.log("An error occured");
        alert("Failed to collect movie data")
        console.log(err);
      });
      setAddrem(props.addrem)
      setId(props.movieid);

  }, []);

  async function add_remove_movie(){
    let url;
    let action;
    let message;
    console.log(id)
    if(addrem === "Remove") {
        url = "http://localhost:8080/api/movies/delmovie";
        action =  'delete';
        message = "Succsefully removed movie!";
    } else  if( addrem === "Add") {
        url = "http://localhost:8080/api/movies/addmovie";
        action = 'post';
        message = "Succsesfully added movie!";
    }

    axios({
        method: action,
        url: url,
        headers: {
            "Authorization": "Basic " + btoa(auth.username + ":" + auth.password),
        },
        data: {
            "movie": id.toString()
        },
        
    }).then(res => {
        console.log(res)

        alert(message)
    }).catch(err => {
        alert(message);
    });
  }
  

  return (
    <>
      <div className="moviecard">
        {movie ? (
          <div className= "movierow">
            <Card className = "imagecard"cover={<img src={movie.Poster} /> } >
            </Card>
            <Card>
              <Meta title={movie.Title  + "  -  " + movie.Year} />
              <Meta description={"Director: " + movie.Director} />
              <Meta description={"Genre:  " + movie.Genre} />
              <p>Plot: {movie.Plot} </p>
              <Button onClick={add_remove_movie} className="addremove"> {addrem} </Button>
              
            </Card>
          </div> 

        ) : (
          <h1> Loading... </h1>
        )}
        
      </div>
    </>  
  );
}


export default MovieCards;
