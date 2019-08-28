import React from 'react'
import * as request from 'superagent'
import GameOneList from './GameOneList'


export default class GameOneContainer extends React.Component {
  state = {}

  componentDidMount(){
    request
    .get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      console.log("RESPONSE", response)
      this.setState({random: response.body})
    })
    .catch(console.error)
  }

  render(){
    if(!this.state.random) return "Loading.."
    return <GameOnList random={this.state.random} />
  }
}