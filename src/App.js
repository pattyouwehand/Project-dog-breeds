import React from 'react';
import './App.css';
import Gif from './Gif'
import Doglist from './doglist'
import { Route, Link } from 'react-router-dom'
// import DogImages from './dogimages'
import DogImagesContainer from './DogImagesContainer'
import GameOneContainer from './components/GameOneContainer';


export default class App extends React.Component {
  
  render() {
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
      <Route exact path="/" component={Doglist} />
      <Route path="/dog-breeds/:breed" component={DogImagesContainer} />
      <Route path="/game-one" component={GameOneContainer} />
      <Link className="gameButton" to="/game-one"><button>Game One</button></Link>
      </main>
    </div>
    )
  }
}

