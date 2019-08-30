import React from 'react'

export default function Gametwo(props) {

  const { images, breeds } = props;


  return (
    <div>
      <br />
      <h3>Game two</h3>
      <br />
      <p>This page will show 3 random images of {breeds} dog breeds.</p>
      <p> Welcome to game two! </p>
      <br />
      {images && images.map(url => <img className="dog-breed-images" key={url} src={url} alt="Game Two Img" />)}
      {!images && 'Loading...'}
      <br />
      <p> Let's practice our knowledge.</p>
      <br />
      <p><b> Write down the second picture's breed: </b></p>
    </div>
  )
}