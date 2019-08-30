import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Doglist from './doglist'

export default class List extends Component {

  renderDogBreed(doglist) {
    return <li key={doglist}>
      <Link to={`/dog-breeds/${doglist}`}>
        {doglist}</Link></li>
    // console.log("Breed", breed)
  }

  render() {

    const { dogBreed } = this.props;

    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {<ul className="list-style">
          {!dogBreed && 'Loading...'}
          {
            dogBreed &&
            <ul>{dogBreed.map(this.renderDogBreed)}</ul>
          }
        </ul>}
        <footer>
          <p>Made with ❤ at Codaisseur by Lucas and Patty</p>
        </footer>
      </div>
    )
  }
}