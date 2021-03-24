import '../App.css';

import{ PageHeader, Input} from 'antd';
import { useState } from 'react';


const {Search} = Input;



function AddMovies() {

  const [input, setInput] =  useState();

  async function search() {
    console.log("We are searching");
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
        </div>
      </>  
    );
}


export default AddMovies;