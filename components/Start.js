import React from "react"


export default function Start ({handleClick}){
    
    return(
        <div className='landing'> 
        <h1> Quizzical</h1>
        <p> some description if needed</p>
        <button onClick={handleClick}>Start Quiz</button>
        
        </div>
    )
}