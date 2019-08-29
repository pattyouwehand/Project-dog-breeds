import React from 'react'
import GameOneContainer from './GameOneContainer'


export default function GameOneList (props) {
  return(

    <div className="game-container">
      <h1>Test your knowledge</h1>
      <form onSubmit={this.handleSubmit}>
        <h3>Which dog breed is on this picture?</h3>
        <img alt='randomPicture'>{this.state.random}</img>
        <ul>
          <li>
            <input type="radio" value="answer">Hey</input>
          </li>
        </ul>
        <button type="submit">Make your choice</button>
      </form>
    </div>
  )
}