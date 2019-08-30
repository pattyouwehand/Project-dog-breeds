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
    

    updateImages = (images) => {
      console.log("TOTAL IMAGES", images.length)
      console.log("UPDATE IMAGES", images[1])
      this.props.storeImages(images)
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      console.log(`Submitting form with breed ${this.state.breed}`)
      this.addBreed(this.state.breed);
    }

    render() {

      console.log("RENDERING", this.props.images);
      const secondurlcoded = this.props.images[1];
      console.log("SECOND URL", secondurlcoded);
      const thirdurlcoded = this.props.images[2]
      const firsturlcoded = this.props.images[0]
      const firsturl = encodeURIComponent(firsturlcoded)
      const secondurl = encodeURIComponent(secondurlcoded)
      const thirdurl = encodeURIComponent(thirdurlcoded)
      console.log("second url decoded", secondurl)
      const splitted = secondurl.split('%2F')
      const splitted2 = thirdurl.split('%2F')
      const splitted0 = firsturl.split('%2F')
      console.log("SPLITTED", splitted)
      const spliced = splitted.splice(4, 1)
      const spliced2 = splitted2.splice(4, 1)
      const spliced0 = splitted0.splice(4, 1)
      console.log("SPLICED", spliced);

      const compareResult = () => {
      if (spliced === this.props.breed) {
        console.log("COMPARISSON", this.props.breed)
        return this.props.players.score =+ 1
      }}
      console.log("COMPARARESULT", compareResult)

      return (
        <div>
          <main>
            <Gametwo className="dog-breed-images" images={this.props.images} />
            <p> Tip: {spliced}, {spliced2} or {spliced0}</p>
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
    console.log("storeImages", images)
    return { type: 'STORE_GAME_IMAGES', payload: images }
  }

  const storeBreed = (breed) => {
    console.log("Breed in storePlayer", breed)
    return { type: 'STORE_BREED', payload: breed }
  }

  const mapDispatchToProps = { storeImages, storeBreed }

  export default connect(mapStateToProps, mapDispatchToProps)(Gametwopics)