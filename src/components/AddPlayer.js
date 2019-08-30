import React, { Component } from 'react';

export default class AddPlayer extends Component {
  state = { name: '' }

  handleChange = (event) => {
    console.log("EVENT", event)
    console.log("EVENT Target Name", event.target.name)
    console.log("EVENT Target Value", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log("handleSubmit", this.props.player)
    console.log("handleSubmit event", event)
    console.log("Handle Submit",this.state.player)
    event.preventDefault()
    console.log(`Submitting form with name ${this.state.name}`)
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