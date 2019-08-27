import React, { Component } from 'react'
import DogImages from './dogimages'
import request from 'superagent'
import { connect } from 'react-redux'

class DogImagesContainer extends Component {
  state = { images: null }

  componentDidMount() {

    const breed = this.props.match.params.breed
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => {
        console.log("RESPONSE", response.body.message)
        this.updateImages(response.body.message)
      })
      .catch(console.error)
  }

  updateImages(images) {
    console.log("IMAGES", images.length)
    const newImages = images.slice(0, 10)
    console.log("NEW IMAGES", newImages)
  //  this.props.storeImages(newImages);
    this.setState({
      images: newImages
    })
  }

  render() {
    return <DogImages images={this.state.images} />
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.newImages
  }
}

const storeImages = (newImages) => {
  console.log("kelley")
  this.props.dispatch({type: 'STORE_IMAGES' , payload: this.state.newImages})
}

const mapDispatchToProps = { storeImages }

export default connect(mapStateToProps, mapDispatchToProps)(DogImagesContainer)