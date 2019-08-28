import React, { Component } from "react";
import Player from "./Player";
import AddPlayer from "./AddPlayer"
import { connect } from 'react-redux';

class Scoreboard extends Component {

  state = {
    players: [
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
    this.props.storePlayer(newPlayer)
    // this.setState({ player: newPlayer })
  }

  addPlayer = (name) => {
    const player = {
      id: Math.round(Math.random() * 100000),
      name,
      score: 0
    }
    console.log("PLAYER in addPlayer", player)
    console.log("Name in addPlayer", player)
    this.props.storePlayer(player)
    // this.setState({
    //   player: this.state.player.concat(player)
    // })
  }

  render() {
    //this.addPlayer
    console.log('this.props.players test:', this.props.player)
    console.log("this.state.player", this.state.player)
    return (
      <div className="scoreboard">
        <h3>Scoreboard:</h3>
        <AddPlayer addPlayer={this.addPlayer}></AddPlayer>
          {
            this.props.players
              .sort((a, b) => b.score - a.score)
              .map(({ name, score, id }) => 
              {
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

const storePlayer = (player) => {
  console.log("PLAYER in storePlayer", player)
  return {type: 'STORE_PLAYER', payload: player}
}
const mapDispatchToProps = { storePlayer }

const mapStateToProps = (state) => {
  console.log('state test:', state)
  return {
    players: state.playersname 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard)