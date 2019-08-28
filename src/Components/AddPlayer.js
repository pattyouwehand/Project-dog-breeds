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
    console.log(`Submitting form with name ${this.state.name}`)
    this.props.addPlayer(this.state.name)
  }

  render() {
    return (
      <div className="add-player">
        <p> Write your name to start playing:</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}