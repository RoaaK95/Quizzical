import { useState, useEffect } from 'react'
import Main from '../components/Main'
import Game from '../components/Game'
import { nanoid } from 'nanoid'
function App() {
   
  const [GameOn,setIsGameOn]= useState(false)
  return (
    <>
      <Main />
    </>
  )
}

export default App
