import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Question from './Question';
import React from 'react'
 
function Game( ) {
  const [quizData, setQuizData]= useState([])
  const [formattedQuestions,setFormattedQuestions] = useState([])
  const [warningMsg,setWarningMsg]=useState(false)
  const [correctAnswers, setCorrectAnswers]= useState(0)
  const [resultMsg,setResultMsg]=useState(false)
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

    function selectAnswer(currentQuestion,answer){
      setFormattedQuestions(
        formattedQuestions.map((questionObject)=>{
        return questionObject.question === currentQuestion ?
        {...questionObject, selectedAnswer: answer}:
        questionObject;
      }))
    }

    function allChoicesSelected() {
      const notAllSelected = formattedQuestions.some((questionObject) => questionObject.selectedAnswer === "")
      setWarningMsg(notAllSelected)
       if(!notAllSelected){
        formattedQuestions.forEach((questionObject) =>{
          if(questionObject.selectedAnswer === questionObject.correctAnswer)
          {
            setCorrectAnswers((prevNum)=>prevNum +1 )
          }
        })
        setResultMsg(true)
     }
    }
   
    
     
  const questionElement= formattedQuestions.map((questionObject)=>
  <Question
    key={questionObject.id}
    question={questionObject.question}
    choices={questionObject.shuffledAnswers}
    selectedAnswer={questionObject.selectedAnswer}
    selectAnswer={selectAnswer}
    correctAnswer={questionObject.correctAnswer}
    resultMsg={resultMsg}
  />)
   
   
  return (
    
    <>
    <div className="questions-container">
     {questionElement}
    </div>
    <div className="text-center">
      {warningMsg && (
      <p className='warning-msg'>There are questions not answered yet 
      </p>
      )}

      {quizData.length >0 && !resultMsg ?(
      <button
      className='check-btn'
      onClick={allChoicesSelected}
      >
        Check answers
      </button>
      ):null}
    </div>

    { resultMsg && (
    <div className="result-container">
     <p className='result-msg'>
      You scored {correctAnswers}/5 correct answers
     </p>
     <button className='play-again-btn' > Play again </button>
    </div>
    )}

    </>
    
  )
}

export default Game