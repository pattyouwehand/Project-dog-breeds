import React from 'react'
// import GameOneContainer from './components/GameOneContainer'

export default function GameOneList (props) {

  function handleSubmit(event){
    event.preventDefault()
  }

  return(

    <div className="game-container">
      <h1>Test your knowledge</h1>
      <form onSubmit={handleSubmit}>
        <h3>Which dog breed is on this picture?</h3>
        <img alt='randomPicture' src={props.random}/>
        <ul>
          <li>
            <input type="radio" name="dog" value="answer" />
            name
          </li>
        </ul>
        <button type="submit">Make your choice</button>
      </form>
    </div>
  )
}