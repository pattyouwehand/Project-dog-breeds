import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Player extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    console.log("Player Props", this.props)
    const { name, score, id, incrementScore } = this.props
    return (
      <ul className="player">
        <p className="name">{name}</p>
        <p className="name"> SCORE: {score}</p>
        <p className="name"> ID: {id} </p>
        <button onClick={() => incrementScore(name)}>Add Points +</button>
      </ul>
    )
  }
}
