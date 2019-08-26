import React, {Component} from 'react'
import request from 'superagent'
import List from './list'

export default class Doglist extends Component {
  state = { dogBreed: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      // .then(response => {return console.log(response.body.message)}
      // ) 
      // console.log("RESPONSE", response.body.message)
      .then(response => {
        const doglist = Object.keys(response.body.message)
        this.updateBreed(doglist)
        console.log(doglist)
      })
      .catch(console.error)
      // const doglist = response.body.message
  } 

  updateBreed(doglist) {
    this.setState({
      dogBreed : doglist
    })
  }


  render() {
    return (
      <div className="doglist">
      {/* { this.state.dogBreed === null && 'Loading...' } */}
      <List dogBreed={this.state.dogBreed} />
      </div>
    )
  }
}