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
        <p> Check our dog list with pictures! </p>
        <br />
        <Gif />
        <br />
        <p> (Under Construction...) </p>
      </header>
      <main>
        <br />
        <br />
        {/* <Doglist /> */}
        <Link className="link-button" to="/"> Home </Link>
        <Link className="link-button" to="/dog-list"> Dog List </Link>
        <Route path="/dog-list" component={Doglist} />
        {/* <Route path="/dog-breeds/:breed" component={DogImages } /> */}
        <Route path="/dog-breeds/:breed" component={DogImagesContainer} />
        <br />
        <br />
        {/* <h4> Enjoy the app. You can start by checking our breed list. Click in 'Dog List' for more information. </h4> */}
      </main>
      <aside>
      </aside>
      <footer>
        <br />
        <br />
        <br />
        {/* <p>Made with ❤ at Codaisseur by Lucas and Patty</p> */}
      </footer>
    </div>
  );
};

export default App;
