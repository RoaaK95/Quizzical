import React from 'react'

export default function Question() {
    const choices=["a","b","c","d"];
    const choicesElements= choices.map((choice) =>
 <button
   key={choice.id}
   className="choice-btn"
 >
    {choice}
 </button>)
  return (
    <div className='question-container'>
      <h1 className='question'>
           An example of a question?
      </h1>
      
      <div className='choices-container'>
      {choicesElements}
      </div>
    </div>
  )
}

