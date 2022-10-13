import React from "react"
import Questions from "./Questions.js"
import ShowAnswers from "./ShowAnswers.js"


export default function Main (){

     const [quizData, setQuizData]              = React.useState    ([])
     const [formData, setFormData]              = React.useState    ({ })
     const [answersArray, setAnswersArray]      = React.useState    ([])
     const [correctAns, setCorrectAnswer]       = React.useState    ({})
     const [revealAnswers, setRevealAnswers]    = React.useState    (false)
     const [score, setScore]                    = React.useState    (0)
     const [newGame, setNewGame]                = React.useState    (true)
     const [loaded, setLoaded]                  = React.useState    (false)
    
     
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

    function handleChange(event){
        const {name,value}= event.target
        setFormData(prevState=>({...prevState, [name]:value}))
    }
    
    function handleShowAnswers(){
        setRevealAnswers(prevState=>!prevState)
        setScore(()=>compareAnswers(formData,correctAns))
    }
    
    function compareAnswers(ObjectA,ObjectB){
        let score=0
        Object.keys(ObjectA).forEach(element => {
            if (ObjectA[element]===ObjectB[element]){score++}else{return}
        });
        return score
    }
    
    function startnewGame(){
        setNewGame(prev=>!prev)
        setRevealAnswers(false)
        setScore(0)
        setCorrectAnswer({})
        setQuizData([])
        setLoaded(false)
        
    }
    function convertHTMLEntity(text){
         text=text||''
        const span = document.createElement('span');
    
        return text
        .replace(/&[#A-Za-z0-9]+;/gi, (entity,position,text)=> {
            span.innerHTML = entity;
            return span.innerText;
        });
    }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

    React.useEffect(()=>{
        let link= "https://opentdb.com/api.php?amount=5&type=multiple"
        fetch(link).then(response=>response.json()).then(data=>{
            setQuizData(data.results) //api data fetched and saved to state
            setAnswersArray(()=>{
                let newArray=[]
                data.results.map((quiz,index)=>{  
                    
                   setCorrectAnswer((prevState)=>({...prevState,[index]:quiz.correct_answer})) //saves correct answers to memory
                    let ans=[...quiz.incorrect_answers,quiz.correct_answer] //merging options
                    newArray.push(ans.sort(() => Math.random() - 0.5)); return '' //shuffling options
                })      
                return newArray //saves shuffled options to answersArray --more of an answers object now lol
            }); setLoaded(true)
    })}  ,[ newGame   ] ) 

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/*Question iterator in return begins*/ 
    let questions = quizData.map((quiz,index)=>{
        let answers=answersArray[index]||[]
        return (
            <Questions
                key={index}
                question={convertHTMLEntity( quiz.question)}
                option1={ convertHTMLEntity (answers[0])}
                option2={ convertHTMLEntity (answers[1])}
                option3={ convertHTMLEntity (answers[2])}
                option4={ convertHTMLEntity (answers[3])}
                name={index}
                handleChange={handleChange}
                value= {formData[index]}
                revealAnswers={revealAnswers}
                correctOption={correctAns[index]}
             />)  
        })
/*Question iterator ends*/ 
        
     

  
/////////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////   Component return Gangan   ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

        
    return(
        <div className='main'>
            <div className='questions-container'> 
            
                <div>
                {questions}
                </div>
            
                <ShowAnswers
                handleClick={handleShowAnswers} 
                revealAnswers={revealAnswers}
                newGame={startnewGame} 
                score={score }
                loaded={loaded}
                />
                
            
            </div>
        </div>
    )
}





