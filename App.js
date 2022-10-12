import React from "react"
import Start from "./components/Start.js"
import Main from "./components/Main.js"


export default function (){
    const [startGame, setStartGame]= React.useState(false)
    
        return(
        <div className='root'> 
            <div className='bckgrd-img '>
                <img className='bckgrd-img-btm ' src='./blobs.png'/>
                <img className='bckgrd-img-top ' src='./blobs-1.png'/>
            </div>
            
            
            {!startGame  && <Start handleClick={()=>setStartGame(prev=>!prev)}/> }
            {startGame && <Main />}
        
        </div>
    )
}