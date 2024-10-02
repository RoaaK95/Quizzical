import React from 'react'

function Main(props) {
  return (
    <main className='main-container'>
      <h2 className='main--title'>Quizzical</h2>
      <div className='main-sub-title'>Let's play a game!</div>
      <button 
      className='main-button'
      onClick={()=> props.setGameOn(true)}
      >
      Start Quiz
      </button>
    </main>
  )
}

export default Main