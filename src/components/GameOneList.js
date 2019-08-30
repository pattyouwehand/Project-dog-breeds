import React from 'react'


export default class GameOneList extends React.Component {


  handleEvent = (e) => {
    if(e.target.value === this.props.random.correct){
      this.props.reloadPage()
      alert("You are correct!")
    }else{
      this.props.reloadPage()
      alert(`Nope that's wrong. The correct answer is ${this.props.random.correct}`)
    }
  }

  render(){
    const {image, answers} = this.props.random
    if(!answers) return "Loading.."
    const button = answers.map(answer =>(<button className="button-container" value={answer} onClick={this.handleEvent}> {answer}</button>))

    <div className="game-container">
      <h1>Test your knowledge</h1>
      <form onSubmit={handleSubmit}>
        <h3>Which dog breed is on this picture?</h3>
        <img className="dog-breed-images" alt='randomPicture' src={props.random}/>
        <ul>
          <li>
            <input type="radio" name="dog" value="answer" />
            name
          </li>
        </ul>
        <button type="submit">Make your choice</button>
      </form>
      <footer>
      <p>Made with ❤ at Codaisseur by Lucas and Patty</p>
      </footer>
    </div>
  )
}