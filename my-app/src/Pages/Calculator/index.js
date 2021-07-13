import React from 'react'
import './style.css'

export default function Calculator (){

    const[counter, setCounter]=useState(0)
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        if(counter===0){
            console.log('contador é zero')
        }
        else{
            setCounter(counter-1)
        }
    }

    function reset(){
        setCounter(0)
    }

    return(
        <div className='container'>
            <div className='title-container'>
                <h1>Calculadora</h1>
                <button onClick={increment}>Aumentar</button>
                <button onClick={decrement}>Diminuir</button>
                <button onClick={reset}>Diminuir</button>
                
            </div>
        {counter}
        </div>
    )
}