import React from 'react';
import './App.css';
import Gif from './Gif'
import Doglist from './doglist'
import { Route, Link } from 'react-router-dom'
import DogImagesContainer from './DogImagesContainer'
import GameOneContainer from './components/GameOneContainer';
import Scoreboard from './components/Scoreboard';
import Gametwopics from './gametwopics';
import Homepage from './homepage'
// import GameThree from './gamethree'

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
        <br />

      </header>

      <main>
        <br />
        <br />
        <Link className="link-button" to="/"> Home </Link>
        <Link className="link-button" to="/dog-list"> Dog List </Link>
        <Link className="link-button" to="/game-one"> Game One </Link>
        <Link className="link-button" to="/game-two"> Game Two </Link>
        {/* <Link className="link-button" to="game-three"> Game Three </Link> */}
        <Route path="/dog-list" component={Doglist} />
        <Route path="/dog-breeds/:breed" component={DogImagesContainer} />
        <Route path="/game-two" component={Gametwopics} />
        <Route path="/game-one" component={GameOneContainer} />
        <Route exact path="/" component={Homepage}/>
        {/* <Route path="game-three" component={GameThree}/> */}
        <br />
        <br />
      </main>
      
    </div>
    );
  };
  
 export default App;

