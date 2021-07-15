import React, {useState} from 'react'
import './style.css'
import SideBar from '../../Components/SideBar'
import Header from '../../Components/Header'


export default function SignUp(){
    const [name, setName] = useState('')
    const [cpf, setCPF] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const object={name: name, cpf: cpf, age: age, email: email, horarios: []}     

    return (
        <div className='body'>
          <SideBar/>

          <div className='information'>
            <Header/>

            <div className='container'>
                <div id='containerCadastro'>
                    <p id='titleCadastro'>Cadastro</p>
                    <div className='inputContainer'>
                        <input 
                        className="box" 
                        type="text" 
                        placeholder="Nome"
                        onChange={(e)=>setName(e.currentTarget.value)}
                        />
                        <input 
                        className="box" 
                        type="text" 
                        placeholder="CPF"
                        onChange={(e)=>setCPF(e.currentTarget.value)}
                        />
                        <input 
                        className="box" 
                        type="text" 
                        placeholder="Idade"
                        onChange={(e)=>setAge(e.currentTarget.value)}
                        />
                        <input 
                        className="box" 
                        type="text" 
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div className='signUpBContainer'>
                        <button id='signUpButton' onClick={()=>localStorage.setItem('newWorker', JSON.stringify(object))}>Cadastrar</button>
                    </div>
                </div>
            </div>
          </div>
          <div className='rightBarContainer'>
                <div className='rightBarTitle'>
                    <h1>Presença</h1>
                </div>
          </div>
        </div>

    )
}