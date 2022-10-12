import React from "react"


export default function Questions (props){
    
    return(
        <div>
            <div className= {`question-element `}>
                <p>{props.question}</p>
                <div className='input'>
                    
                    <input  type="radio"
                            id={props.option1}
                            name={props.name}
                            value={props.option1}
                            checked={props.value === props.option1}
                            onChange={()=>props.handleChange(event)}
                            
                        /><label htmlFor={props.option1}  className={`${props.revealAnswers&&(props.correctOption==props.option1 )? 'correctAnswer' : undefined}  ${props.revealAnswers && !(props.value === props.option1) && (props.correctOption!=props.option1 )? 'wrongAnswer' : undefined    }  ${props.revealAnswers && (props.value === props.option1) && (props.correctOption!=props.option1 )? 'checkedWrongAnswer' : undefined    }  `}><span>{props.option1+' '}</span></label>   
                    <input type="radio"
                            id={props.option2}
                            name={props.name}
                            value={props.option2}
                            checked={props.value  === props.option2}
                            onChange={props.handleChange}
                        /><label htmlFor={props.option2}  className={`${props.revealAnswers&&(props.correctOption==props.option2 )? 'correctAnswer' : undefined}  ${props.revealAnswers && !(props.value === props.option2) && (props.correctOption!=props.option2 )? 'wrongAnswer' : undefined    } ${props.revealAnswers && (props.value === props.option2) && (props.correctOption!=props.option2 )? 'checkedWrongAnswer' : undefined    } `}><span >{props.option2+' '}</span></label>
                    <input type="radio"
                            id={props.option3}
                            name={props.name}
                            value={props.option3}
                            checked={props.value === props.option3}
                            onChange={props.handleChange}
                        /><label htmlFor={props.option3} className={`${props.revealAnswers&&(props.correctOption==props.option3 )? 'correctAnswer' : undefined}  ${props.revealAnswers && !(props.value === props.option3) && (props.correctOption!=props.option3 )? 'wrongAnswer' : undefined } ${props.revealAnswers && (props.value === props.option3) && (props.correctOption!=props.option3 )? 'checkedWrongAnswer' : undefined    } `}><span>{props.option3+' '} </span></label>
                    <input type="radio"
                            id={props.option4}
                            name={props.name}
                            value={props.option4}
                            checked={props.value === props.option4}
                            onChange={props.handleChange}
                        /><label htmlFor={props.option4} className={`${props.revealAnswers&&(props.correctOption==props.option4 )? 'correctAnswer' : undefined}  ${props.revealAnswers && !(props.value === props.option4) && (props.correctOption!=props.option4 )? 'wrongAnswer' : undefined } ${props.revealAnswers && (props.value === props.option4) && (props.correctOption!=props.option4 )? 'checkedWrongAnswer' : undefined    } `}><span>{props.option4}</span></label></div>
                         
                </div> {/*end of Question div}*/}
             </div>   
    )
}
    
