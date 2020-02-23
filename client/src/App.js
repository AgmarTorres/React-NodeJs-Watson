import React from 'react';
import logo from './logo.svg';
import axios from 'axios';

import HeaderBlog from './components/HeaderBlog'
import SideBarBlog from './components/SideBars'
import FooterBlog from  './components/FooterBlog'
import ContentBlog from './components/ContentBlog'
import MetisMenu from 'react-metismenu';


import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  
    axios
    .get('/postagens')
    .then(resultados => console.log(resultados))
    .catch(function(error){
      console.log(error)
    })
    
    axios
    .get('/comentarios/teste ')
    .then(resultados => console.log(resultados))
    .catch(function(error){
      console.log(error)
    })
  
  
  }

  render(){
    return (
      <div className="App">
        <HeaderBlog></HeaderBlog>
        <SideBarBlog></SideBarBlog>
        <ContentBlog></ContentBlog>
        <FooterBlog/>
      </div>
    );
  }
}

export default App;
