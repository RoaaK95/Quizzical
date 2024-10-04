import { nanoid } from 'nanoid'
import React from 'react'

export default function Question(props) {
    
  const choicesElements= props.choices.map((choice) =>
 <button
   key={nanoid()}
   className="choice-btn"
 >
     {choice} 
 </button>)
  return (
    <div className='question-container'>
      <h1 className='question'>
         {props.question}
      </h1>
      
      <div className='choices-container'>
      {choicesElements}
      </div>
    </div>
  )
}

