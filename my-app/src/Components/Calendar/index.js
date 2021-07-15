import './style.css'
import React from 'react'

export default function Calendar({props}){

    return(
        <div className='calendarContainer'>
            <div>
                <p className='calendarTitle'>Dia: {props.dia}</p>
            </div> 
            <div>
                <p className='calendarTitle'>Entrada: {props.enter}</p>
            </div> 
            <div>
                <p className='calendarTitle'>Saída: {props.leave}</p>
            </div>
        </div>
    )
}