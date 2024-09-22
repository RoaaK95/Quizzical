import { useState, useEffect } from 'react'
import Main from '../components/Main'
import Game from '../components/Game'
import { nanoid } from 'nanoid'
function App() {
   
  const [gameOn,setGameOn]= useState(false)

  function startGame()
  {
    setGameOn(true)
  }
  return (
    <>
    {!gameOn ? 
     <Main
       startGame={startGame} 
    />
    :
    <Game 
    />
    }
    </>
  )
}

export default App
