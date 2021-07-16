import React from 'react'
import './style.css'
import Header from '../../Components/Header'
import SideBar from '../../Components/SideBar'

export default function About(){
    return (
        <div className='body'>
        <SideBar/>

        <div className='information'>
            <Header/>
            <div id='sobreContainer'>
                <div id='sobre'>
                    <p>Somos duas amigas, Carolina e Fernanda,</p>
                    <p>e sempre fomos apaixonadas por papelaria.</p> 
                    <p>Essa paixão é tão forte que queremos compartilhar com vocês.</p>
                    <p>Você ficará encantado com nosso atendimento personalizado feito com carinho</p>
                    <p>sempre pensando no bem estar dos nossos clientes. nosso escritório fica na gamboa</p>
                    <p>e estamos ansiosas para recebê-los em nossa empresa!</p>

                </div>
            </div>
        </div>
            <div className='schedule'>
            </div>
        </div>

    )
}