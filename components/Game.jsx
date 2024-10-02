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
        
        const fq=data.results[0]
        console.log(fq)
        const allAnswers=[
          ...fq.incorrect_answers,
          fq.correct_answer
        ];
        console.log(allAnswers)
        const shuffledAnswers= shuffle(allAnswers)
        console.log(shuffledAnswers)
      });
    },[])
   

    function shuffle(array) {
      let currentIndex = array.length;
      while (currentIndex != 0) {
    
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    }
     
  return (
    <div> Game</div>
    
  )
}

export default Game