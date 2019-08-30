import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Player extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name, score, id } = this.props
    return (
      <ul className="players">
        <p className="name"> {name}</p>
        <p className="name"> Score: {score}</p>
        <p className="name"> ID: {id} </p>
        {/* <button onClick={() => incrementScore(name)}>Add Points +</button> */}
      </ul>
    )
  }
}

// const { name, score, id, incrementScore } = this.props
