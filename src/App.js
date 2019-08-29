import React from 'react';
import './App.css';
import Doglist from './doglist'
import { Route, Link } from 'react-router-dom'
import DogImagesContainer from './DogImagesContainer'
import GameOneContainer from './components/GameOneContainer';


export default class App extends React.Component {
  
  render() {
    return (
      <div className="App">
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

