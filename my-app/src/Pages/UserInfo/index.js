import React, {useState} from 'react'
import './style.css'
import Card from '../../Components/Card'
import Calendar from '../../Components/Calendar'
import SideBar from '../../Components/SideBar'
import Search from '../../Components/Search'
import Header from '../../Components/Header'

const defaultList=[
    {
        name: 'Felipe Barreto',
        cpf: '111.292.333-67',
        age: '21',
        email: 'felipe123@gmail.com',
        horarios: [
            {
                dia: '12/05/2021',
                enter: '9:00',
                leave: '17:00'
            },
            {
                dia: '13/05/2021',
                enter: '9:00',
                leave: '17:00'
            },
            {
                dia: '14/05/2021',
                enter: '9:00',
                leave: '17:00'
            }
        ]
    },
    {
        name: 'David Castro',
        cpf: '111.422.333-67',
        age: '30',
        email: 'dcastro@hotmail.com',
        horarios: [
            {
                dia: '12/05/2021',
                enter: '8:00',
                leave: '16:00'
            },
            {
                dia: '13/05/2021',
                enter: '8:00',
                leave: '16:00'
            },
            {
                dia: '14/05/2021',
                enter: '8:00',
                leave: '16:00'
            }
        ]
    },
    {
        name: 'Luiz Almeida',
        cpf: '121.223.263-26',
        age: '47',
        email: 'lhaa@gmail.com',
        horarios: [
            {
                dia: '12/05/2021',
                enter: '10:00',
                leave: '18:00'
            },
            {
                dia: '13/05/2021',
                enter: '10:00',
                leave: '18:00'
            },
            {
                dia: '14/05/2021',
                enter: '10:00',
                leave: '18:00'
            }
        ]
    }
]


export default function UserInfo(){

    let novoFuncionario = JSON.parse(localStorage.getItem('newWorker'))
    if(novoFuncionario){
        defaultList.push(novoFuncionario)
        localStorage.removeItem('newWorker')
    }

    const [selected, setSelected]=useState({})

    const renderList=defaultList.map((item, index)=>(

        <li key={index} className='listCard'>
            <Card props={item} setSelected={()=>{setSelected(item)}} />
        </li>
    ))
    const renderSchedule=selected.horarios?.map((item,index)=>(

        <li key={index} className='listCard'>
            <Calendar props={item}/>
        </li>
    ))

    return (
        <div className='body'>
          <SideBar/>

          <div className='information'>
            <Header/>
            <Search id='searchContainer'/>

            <div className='container'>
                <div className='title-container'>
                    <div>{renderList}</div>
                </div>
            </div>
          </div>
          <div className='schedule'>
                <div className='scheduleTitle'>
                    <h1>Calendário de Presença</h1>
                    <p id='selectedName'>Selecionado: {selected.name}</p>
                    <div>{renderSchedule}</div>
                </div>
          </div>
        </div>

    )
}