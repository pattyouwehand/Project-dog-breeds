import React from 'react'

export default function Gametwo(props) {

  const { images, breeds } = props;

  console.log("IMAGES in Gametwo", images)

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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
      <p> Let's practice our knowledge. </p>
      <form onSubmit={this.handleSubmit}>
        <label>
          Breed:
            <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.props.name}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  )

}