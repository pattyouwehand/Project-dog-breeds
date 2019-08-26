import React, {Component} from 'react'
import request from 'superagent'

export default class Doglist extends Component {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {console.log("RESPONSE", response.body.message)}
      ) 
      .catch(console.error)
  } 

  render() {
    return <p> Test </p> 
  }
}