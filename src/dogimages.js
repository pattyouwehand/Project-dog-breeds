import React from 'react'
import { Link } from 'react-router-dom'

export default function DogImages (props) {

  const { images, breed } = props;

  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images and Details</h1>

      This page will show up to 10 images of the <b>{ breed }</b> breed.

      <Link to="/"><br />< br/>Go back to the index</Link>

      <div>
        <br />
        {images && images.map(url => <img src={url} alt="Dog" />)}
        {!images && 'Loading...'}
      </div>

    </div>
  )
}