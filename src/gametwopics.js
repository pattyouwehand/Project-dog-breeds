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
        this.updateImages(response.body.message)
      })
      .catch(console.error)
  }

  addBreed = (breed) => this.props.storeBreed(breed)

  updateImages(images) {
    this.props.storeImages(images);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.addBreed(this.state.breed)
  }

  render() {
    return (
      <div>
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
        <footer>
          <p>Made with ❤ at Codaisseur by Lucas and Patty</p>
        </footer>
      </div>
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
  return { type: 'STORE_GAME_IMAGES', payload: images }
}

const storeBreed = (breed) => {
  return { type: 'STORE_BREED', payload: breed }
}

const mapDispatchToProps = { storeImages, storeBreed }

export default connect(mapStateToProps, mapDispatchToProps)(Gametwopics)