import React from 'react';
import './App.css';
import Gif from './Gif'
import Doglist from './doglist'
import { Route, Link } from 'react-router-dom'
// import DogImages from './dogimages'
import DogImagesContainer from './DogImagesContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <title> Dog-Breeds App </title>
       <h1> Dog Breeds App </h1>
       <p> Under Construction... </p>
       <p> Check our dog list with pictures! </p>
       <br />
       <Gif />
       <br />
      </header>
      <main>
      {/* <Doglist /> */}
      <Link className="link-button" to="/"> Home </Link>
      <Link className="link-button" to="/dog-list"> Dog List </Link>
      <Route path="/dog-list" component={Doglist} />
      {/* <Route path="/dog-breeds/:breed" component={DogImages } /> */}
      <Route path="/dog-breeds/:breed" component={DogImagesContainer} />
      </main>
      <aside>
        
      </aside>
    </div>
  );
};

export default App;
