import React from "react";
import './style.css'
import Calendario from '../../assets/images/calendar.svg'
import setSelected from '../../Pages/UserInfo/index'

export default function Card({props}){
    
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
                <button><img src={Calendario} alt="Calendario" onClick={setSelected(props.horarios)}/></button>
            </div>
        </div>
    )
}