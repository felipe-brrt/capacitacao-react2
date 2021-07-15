import './style.css'
import {GiPapers} from 'react-icons/gi'
import {FiUserPlus} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import { NavLink, Link } from 'react-router-dom'
import React from 'react'

export default function SideBar(){

    return(
        <div className='sidebarContainer'>
            <div className='optionContainer'>
                <div className= 'optionTitle'>
                    <GiPapers size={26}/>
                    <Link to='/' style={{ textDecoration: 'none', color: 'yellow' }}><h1>Papelaria C&F</h1></Link>
                </div>
            </div>
            <div className='optionContainer'>
                <div className= 'optionTitle'>
                    <FiUserPlus size={20} className='icon'/>
                    <NavLink to='/SignUp' style={{ textDecoration: 'none', color: 'yellow' }}><h2>Cadastro</h2></NavLink>
                </div>
            </div>
            <div className='optionContainer'>
                <div className='optionTitle'>
                    <FiUser size={20} className='icon'/>
                    <NavLink to='/UserInfo' style={{ textDecoration: 'none', color: 'yellow' }}><h2>Funcionários</h2></NavLink>
                </div>
            </div>
            
        </div>
    )
}