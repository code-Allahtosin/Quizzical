import React from "react"


export default function ShowAnswers(props){
  return (  
     <div> 
        {props.revealAnswers && <span className="revealAnswers"> You scored {props.score}/5 correct answers </span>}
        {!props.revealAnswers && <button className='confirm-answers' onClick={props.handleClick} >
         {props.loaded?'Check answers': 'L o a d i n g . . . ' }</button>}
        {props.revealAnswers && <button className='confirm-answers' onClick={props.newGame} >
         Play Again</button>}
        </div>
     )
}