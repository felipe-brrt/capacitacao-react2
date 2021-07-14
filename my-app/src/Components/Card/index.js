import React from "react";
import './style.css'
import Calendario from '../../assets/images/calendar.svg'

export default function Card({props, setSelected}){
    return(
        <div className='cardContainer'>
            <div>
                <h3>
                    <strong className='cardTitle'>Nome</strong>: {props.name}
                </h3> 
                <h3>
                    <strong className='cardTitle'>CPF</strong>: {props.cpf}
                </h3> 
                <h3>
                    <strong className='cardTitle'>Idade</strong>: {props.age}
                </h3>
                <h3>
                    <strong className='cardTitle'>Email</strong>: {props.email}
                </h3>
            </div>
            <div className='buttonContainer'>
                <button><img src={Calendario} alt="Calendario" onClick={setSelected}/></button>
            </div>
        </div>
    )
}