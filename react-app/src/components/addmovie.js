import '../App.css';

import{ PageHeader, Input} from 'antd';
import { useState } from 'react';
import axios from 'axios';
import MovieCards from './moviecard';


const {Search} = Input;



function AddMovies() {

  const [input, setInput] =  useState();
  const [movies, setMovies] =  useState();

  async function search() {
    console.log("We are searching");

    axios.get('https://www.omdbapi.com/?s=' + input + '&apikey=4a3b711b')
      .then(res => {
        addToState(res.data.Search);
      }).catch(err => {
        console.log("Search Failed");
        alert("Movie search failed");
      })
  }
  async function addToState (movieList) {
    console.log(movieList);
    const idlist = [];
    for(const i in movieList) {
      idlist.push(movieList[i].imdbID)
    }
    setMovies(idlist);
    if(idlist.length === 0 ) {
      alert("No movies match your search")
    }
  }
  const inputChange = (e) => {
    setInput(e.target.value);
    console.log(input)
  }

  return (
      <>
        <div className="site-layout-content">
          <div style={{ padding: '2% 20%' }}>
            <Search placeholder="Search for a movie! "
              allowClear
              enterButton="Search"
              size="large"
              onChange={inputChange}
              onSearch={search}/>
            <PageHeader className="site-page-header"
              title="Add to my Favirote Movies"
              subTitle="Welcome to my favirote movies"/>
          </div> 
          <div className="cardlist">
            {movies && movies.map(movie => { return( <MovieCards movieid={movie} addrem={"Add"}/> )})}
            
          </div>
        </div>
      </>  
    );
}


export default AddMovies;