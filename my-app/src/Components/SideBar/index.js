import react from 'react'
import './style.css'


export default function SideBar(){
    return(
        <div className='sidebarContainer'>
            <div className='optionContainer'>
                <div className= 'optionTitle'>
                    <h1>Papelaria C&F</h1>
                </div>
            </div>
            <div className='optionContainer'>
                <div className= 'optionTitle'>
                    <h2>Cadastro</h2>
                </div>
            </div>
            <div id='selected'>
                <div className='optionTitle'>
                    <h2>Funcionários</h2>
                </div>
            </div>
            
        </div>
    )
}