import React, {Component} from 'react'
import DogImages from './dogimages'
import request from 'superagent'

export default class DogImagesContainer extends Component {
  state = { images: null }

  componentDidMount() {
    const breed = this.props.match.params.breed
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => this.updateImages(response.body.message))
      .catch(console.error)
  }

  updateImages(images) {
    this.setState({
      images: images
    })
  }

  render() {
    return <DogImages images={ this.state.images } />
  }
}