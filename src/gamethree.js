import React, { Component } from 'react'
import Gametwopics from './gametwopics'
import GameOneContainer from './components/GameOneContainer'

export default class GameThree extends Component {

  render() {
    return (
      <div>
      <h3> Welcome to Game Three: </h3>
      <GameOneContainer />
      <br />
      <Gametwopics />
      </div>
    )
  }

}