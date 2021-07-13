import react from 'react'
import './style.css'

export default function Calendar({props}){

    console.log('props:',props);
    return(
        <div className='calendarContainer'>
            <div>
                <p className='calendarTitle'>Dia</p>: {props.dia}
            </div> 
            <div>
                <p className='calendarTitle'>Entrada</p>: {props.enter}
            </div> 
            <div>
                <p className='calendarTitle'>Saída</p>: {props.leave}
            </div>
        </div>
    )
}