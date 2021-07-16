import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div id='header'>
            <div className='infoContainer'>
                <h4>Fale Conosco</h4>
                <Link to='/About' style={{ textDecoration: 'none', color: 'black' }}><h4>Quem Somos</h4></Link>
            </div>
                
        </div>
    )
}