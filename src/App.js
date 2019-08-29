import React from 'react';
import './App.css';
import Gif from './Gif'
import Doglist from './doglist'
import { Route, Link } from 'react-router-dom'
// import DogImages from './dogimages'
import DogImagesContainer from './DogImagesContainer'
import Scoreboard from './Components/Scoreboard';
import Gametwopics from './gametwopics';
import Homepage from './homepage'


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
        <Scoreboard />
        <p> (Under Construction...) </p>
      </header>
      <main>
        <br />
        <br />
        {/* <Doglist /> */}
        <Link className="link-button" to="/"> Home </Link>
        <Link className="link-button" to="/dog-list"> Dog List </Link>
        <Link className="link-button" to="/game-two"> Game Two </Link>
        <Route path="/dog-list" component={Doglist} />
        {/* <Route path="/dog-breeds/:breed" component={DogImages } /> */}
        <Route path="/dog-breeds/:breed" component={DogImagesContainer} />
        <Route path="/game-two" component={Gametwopics} />
        <Route exact path="/" component={Homepage}/>
        <br />
        <br />
      </main>
      <aside>
      {/* <p>Made with ❤ at Codaisseur by Lucas and Patty</p>  */}
      </aside>
      <footer>
        {/* <p>Made with ❤ at Codaisseur by Lucas and Patty</p> */}
      </footer>
    </div>
  );
};

export default App;
