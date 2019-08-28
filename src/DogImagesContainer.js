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
    console.log("TOTAL IMAGES", images.length)
    const newImages = images.slice(0, 10)
    console.log("NEW IMAGES", newImages)
     this.props.storeImages(newImages);
    // this.setState({
    //   images: newImages
    // })
  }

  render() {
    console.log("RENDERING", this.props.images)
    return <main><DogImages className="dog-breed-images" images={this.props.images} /></main>
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps")
  console.log("mapStateToProps2", state)
  return {
    images: state.dogimages
  }
}

const storeImages = (newImages) => {
  console.log("storeImages", newImages)
  return { type: 'STORE_IMAGES', payload: newImages }
}

const mapDispatchToProps = { storeImages }

export default connect(mapStateToProps, mapDispatchToProps)(DogImagesContainer)