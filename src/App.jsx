import { useState, useEffect } from 'react'
import Main from '../components/Main'
import Game from '../components/Game'
import { nanoid } from 'nanoid'
function App() {
   
  const [gameOn,setGameOn]= useState(false)
  const [quizData, setQuizData]=useState([])
 
  useEffect(()=>
    {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        setQuizData(formatData(data.results))
      });
    },[gameOn])
  
 
     
    console.log(quizData)
     function formatData(array)
     {
      const formattedData = array.map((item) =>{
        return({
         id: nanoid(),
         question: item.question,
         correctAnswers: item.correct_answer,
         choices: item.incorrect_answers,
         })
        });
      return formattedData
     }
   
   
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
