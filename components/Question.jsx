import { nanoid } from 'nanoid'
import React from 'react'
import { decode } from 'html-entities'
export default function Question(props) {
    
  const choicesElements= props.choices.map((choice) =>
 <button
   key={nanoid()}
   className="choice-btn"
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

