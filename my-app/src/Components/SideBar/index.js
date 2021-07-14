import './style.css'
import {GiPapers} from 'react-icons/gi'
import {FiUserPlus} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'

export default function SideBar(){
    return(
        <div className='sidebarContainer'>
            <div className='optionContainer'>
                <div className= 'optionTitle'>
                    <GiPapers size={26}/>
                    <h1>Papelaria C&F</h1>
                </div>
            </div>
            <div className='optionContainer'>
                <div className= 'optionTitle'>
                    <FiUserPlus size={20} className='icon'/>
                    <h2>Cadastro</h2>
                </div>
            </div>
            <div id='selected'>
                <div className='optionTitle'>
                    <FiUser size={20} className='icon'/>
                    <h2>Funcionários</h2>
                </div>
            </div>
            
        </div>
    )
}