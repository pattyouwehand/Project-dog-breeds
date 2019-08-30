import React, { Component } from 'react';

export default class AddPlayer extends Component {
  state = { name: '' }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPlayer(this.state.name)
  }

  render() {
    console.log("this.props.name in render AddPlayer", this.props.name)
    return (
      <div className="add-player">
        <p> Write down your name to start playing:</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.props.name}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}