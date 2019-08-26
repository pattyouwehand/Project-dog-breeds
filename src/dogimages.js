import React from 'react'
import { Link } from 'react-router-dom'

export default function DogImages (props) {
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      This page will show images of the { props.match.params.breed } breed.

      <Link to="/"><br />< br/>Go back to the index</Link>
    </div>
  )
}