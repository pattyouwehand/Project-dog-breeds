import React from 'react';
import './App.css';
import Gif from './Gif'
import Doglist from './doglist'
import { Route } from 'react-router-dom'
// import DogImages from './dogimages'
import DogImagesContainer from './DogImagesContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <title> Dog-Breeds App </title>
       <h1> Dog Breeds App </h1>
       <p> Under Construction </p>
       <br />
       <Gif />
       <br />
      </header>
      <main>
      {/* <Doglist /> */}
      <Route exact path="/" component={Doglist} />
      {/* <Route path="/dog-breeds/:breed" component={DogImages } /> */}
      <Route path="/dog-breeds/:breed" component={DogImagesContainer} />
      </main>
    </div>
  );
};

export default App;
