import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import React from 'react'
 
function Game( ) {
  const [quizData, setQuizData]= useState([])
  const [formattedQuestions,setFormattedQuestions] = useState([])
  useEffect(()=>
    {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data.results);
        formatQuestion(data.results)
       
     });
    },[])
   
    function formatQuestion(array){
      setFormattedQuestions(
        array.map((questionObject) => {
        return{
          id: nanoid(),
          question: questionObject.question,
          shuffledAnswers: shuffle(
            [...questionObject.incorrect_answers,
            questionObject.correct_answer]),
          correctAnswer: questionObject.correct_answer,
          selectedAnswer: ""
        };
      }

      ))
    }
    function shuffle(array) {
      let currentIndex = array.length;
      while (currentIndex != 0) {
    
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
     
  console.log(formattedQuestions)
  return (
    <div> Game</div>
    
  )
}

export default Game