import React, { Component } from 'react'
import request from 'superagent'
import Gametwo from './gametwo'
import { connect } from 'react-redux'

class Gametwopics extends Component {
  state = { images: null }

  componentDidMount() {
    
    request
      .get(`https://dog.ceo/api/breeds/image/random/3`)
      .then(response => {
        console.log("RESPONSE", response.body.message)
        this.updateImages(response.body.message)
      })
      .catch(console.error)
  }

  updateImages(images) {
    console.log("TOTAL IMAGES", images.length)
    console.log("UPDATE IMAGES", images)
    return this.props.storeImages(images);
  }

  render () {
    console.log("RENDERING", this.props.images)
    return (
      <main><Gametwo className="dog-breed-images" images={this.props.images} /></main>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps")
  console.log("mapStateToProps2", state)
  return {
    images: state.gametwoimg
  }
}

const storeImages = (images) => {
  console.log("storeImages", images)
  return { type: 'STORE_GAME_IMAGES', payload: images }
}

const mapDispatchToProps = { storeImages }

export default connect(mapStateToProps, mapDispatchToProps)(Gametwopics)