import React, {Component} from 'react'
import request from 'superagent'

export default class DogsListContainer extends Component {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/dog-api/documentation/')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    console.log('DogsListContainer test')
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
}