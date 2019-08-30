import React from 'react'
import { Link } from 'react-router-dom'

export default function DogImages (props) {

  const { images, breed } = props;


  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images and Details</h1>

      This page will show up to 10 images of the <b>{ breed }</b> breed.
      <div>
        <br />
        {images && images.map(url => <img className="dog-breed-images" key={url} src={url} alt="Dog" />)}
        {!images && 'Loading...'}
      </div>
      <br />
      <Link to="/"><br />< br/>Go back to the index</Link>
      <br />
      <br />
      <br />
    </div>
  )
}