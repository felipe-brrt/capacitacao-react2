import React from "react";
import './style.css'
import Calendario from '../../assets/images/calendar.svg'
import user from '../../assets/images/user.png'

export default function Card({props, setSelected}){
    return(
        <div className='cardContainer'>
            <div id='userImg'>
            <img alt='user' src={user} width={100} height={100}/>
            </div>
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