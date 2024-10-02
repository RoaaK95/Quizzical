import { useState, useEffect } from 'react'
import Main from '../components/Main'
import Game from '../components/Game'
import { nanoid } from 'nanoid'
 
function App() {
 
  const [gameOn,setGameOn]= useState(false)
  
   
     
  return (
    <>
    {!gameOn ? 
     <Main
       setGameOn={setGameOn} 
    />
    :
    <Game 
    
    />
    }
    </>
  )
}

export default App
