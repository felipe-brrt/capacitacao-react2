import './style.css'
import Lupa from '../../assets/images/search.svg'
import React from 'react'

export default function Search(){
    return(
        <div className="pesquisar">
            <img src={Lupa} width="20" alt="lupa" />
            <input id="box" type="text" placeholder="Buscar"></input>
        </div>
)}