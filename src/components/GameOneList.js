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

    return(

      <div className="game-container">
       <h1>Test your knowledge</h1>
          <h3>Which dog you see on this picture?</h3>
          <div className="image">
            {image && <img className="gameOneImage" src={image} alt="Dog" />}
          </div>
    
            {button}
      </div>
    )
  }
}