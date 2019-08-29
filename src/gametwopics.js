import React, { Component } from 'react'
import request from 'superagent'
import Gametwo from './gametwo'
import { connect } from 'react-redux'

class Gametwopics extends Component {
  state = { breed: null }

  componentDidMount() {
    
    request
      .get(`https://dog.ceo/api/breeds/image/random/3`)
      .then(response => {
        console.log("RESPONSE", response.body.message)
        this.updateImages(response.body.message)
      })
      .catch(console.error)
  }

  addBreed = (breed) => this.props.storeBreed(breed)

  updateImages(images) {
    console.log("TOTAL IMAGES", images.length)
    console.log("UPDATE IMAGES", images)
    this.props.storeImages(images);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Submitting form with breed ${this.state.breed}`)
    this.addBreed(this.state.breed)
  }

  render () {
    console.log("RENDERING", this.props.images)
    return (
      <main>
      <Gametwo className="dog-breed-images" images={this.props.images} />
      <form onSubmit={this.handleSubmit}>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              onChange={this.handleChange}
              value={this.state.breed}
            />
          </label>
          <input type="submit" value="Test" />
        </form>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.gametwoimg,
    breed: state.breedgametwo
  }
}

const storeImages = (images) => {
  console.log("storeImages", images)
  return { type: 'STORE_GAME_IMAGES', payload: images }
}

const storeBreed = (breed) => {
  console.log("Breed in storePlayer", breed)
  return {type: 'STORE_BREED', payload: breed}
}

const mapDispatchToProps = { storeImages, storeBreed }

export default connect(mapStateToProps, mapDispatchToProps)(Gametwopics)