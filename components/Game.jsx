import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Question from './Question';
import React from 'react'
 
function Game( ) {
  const [quizData, setQuizData]= useState([])
  const [formattedQuestions,setFormattedQuestions] = useState([])
  useEffect(()=>
    { 
      async function getData(){
        const res = await  fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        const data= await res.json()
        setQuizData(data.results);
        formatQuestion(data.results)
      } 
       getData()
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
     
  const questionElement= formattedQuestions.map((questionObject)=>
  <Question
    key={questionObject.id}
    question={questionObject.question}
    choices={questionObject.shuffledAnswers}
  />)
  return (
    
    <>
    <div className="questions-container">
     {questionElement}
    </div>
    </>
    
  )
}

export default Game