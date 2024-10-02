import { useEffect, useState } from 'react';
import React from 'react'
 
function Game( ) {
  const [quizData, setQuizData]= useState([])
  useEffect(()=>
    {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data.results);
      });
    },[])
    console.log(quizData)
  return (
    <div> Game</div>
    
  )
}

export default Game