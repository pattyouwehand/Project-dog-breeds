import React, { Component } from "react";
import Player from "./Player";
import AddPlayer from "./AddPlayer"

export default class Scoreboard extends Component {

  state = {
    player: [
      { name: '', score: 0, id: 0 }
    ]
  }

  incrementScore = (name) => {
    console.log('INSIDE SCOREBOARD', name)
    //calculate score
    const newPlayer = this.state.player.map(player => {
      if (player.name === name) {
        //this person scored
        return {
          name: player.name,
          score: player.score + 1,
          id: player.id
        }
      }
      //no score
      return player
    })
    console.log("NAME in Increment Store", name)
    console.log("NEW PLAYER in IncrementScore", newPlayer)
    this.setState({ player: newPlayer })
  }

  addPlayer = (name) => {
    const player = {
      id: Math.round(Math.random() * 100000),
      name,
      score: 0
    }
    console.log("PLAYER in addPlayer", player)
    this.setState({
      player: this.state.player.concat(player)
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <h3>Scoreboard:</h3>
        <AddPlayer addPlayer={this.addPlayer}></AddPlayer>
          {
            [...this.state.player]
              .sort((a, b) => b.score - a.score)
              .map(({ name, score, id }) => {
                return <Player
                  key={name}
                  name={name}
                  score={score}
                  id={id}
                  incrementScore={this.incrementScore}
                />
              })
          }
          <br></br>
      </div>
    )
  }
}