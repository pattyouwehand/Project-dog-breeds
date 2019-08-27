import React from 'react'
import Question from './Question'
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOptions'

export default function GameOne (props) {

  return(
    <div className="quiz">
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      />
      <h1>Which dog breed is this?</h1>
      <Question content={props.question}/> {/*PUT IN DOG RANDOM IMAGES*/}
        <ul className="answerOptions">
          {props.AnswerOptions.map(renderAnswerOptions)}
        </ul>
    </div>
  )
}