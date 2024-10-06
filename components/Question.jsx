import { nanoid } from 'nanoid'
import React from 'react'
import { decode } from 'html-entities'
export default function Question(props) {
    
  function clickChoice(currentQuestion,answer){
    props.selectAnswer(currentQuestion,answer)
  }
  const choicesElements= props.choices.map((choice) =>
 <button
   key={nanoid()}
   className={`choice-btn ? ${choice === props.selectedAnswer ? "selected": ""} `}
   onClick={()=> clickChoice(props.question,choice)}
 >
      {decode(choice)} 
 </button>)
  return (
    <div className='question-container'>
      <h1 className='question'>
         {decode(props.question)}
      </h1>
      
      <div className='choices-container'>
      {choicesElements}
      </div>
    </div>
  )
}

