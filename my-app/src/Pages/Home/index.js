import SideBar from "../../Components/SideBar";
import paper from "../../assets/images/paper.jpg"
import Header from "../../Components/Header";
import './style.css'
import React from "react";

export default function Home(){

    return (
        <div className='body'>
        <SideBar/>

        <div className='information'>
            <Header/>
            <div className='container'>
                <div className='title-container'>
                <div id='imgContainer'>
                    <img alt='paper' src={paper}/>
                </div>
                </div>
            </div>
        </div>
        <div className='schedule'>
                <div className='scheduleTitle'>
                    <h1>Bem Vindos</h1>
                    <div id='lema'>
                        <h2>O papel da nossa </h2>
                        <h2>empresa é te ajudar!</h2>
                    </div>
                    <div id='endereco'>
                        <p>Estamos localizados em:</p>
                        <p>Rua Mortona, 35 - Gamboa</p>
                    </div>
                </div>
        </div>
        </div>

    )
}