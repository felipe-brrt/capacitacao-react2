import react, {useState} from 'react'
import './style.css'
import Card from '../../Components/Card'
import Calendar from '../../Components/Calendar'
import SideBar from '../../Components/SideBar'
import Search from '../../Components/Search'

const oldList=[
    {
        name: 'Felipe Barreto',
        cpf: '111.292.333-67',
        age: '21',
        email: 'exemplo@gmail.com',
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
        name: 'David Castro',
        cpf: '111.422.333-67',
        age: '21',
        email: 'exemplo@gmail.com',
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
        cpf: '121.222.333-67',
        age: '21',
        email: 'exemplo@gmail.com',
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
    }
]

export default function UserInfo(){

    // const [name,setName]=useState('');
    // const [cpf,setCpf]=useState('');
    // const [age,setAge]=useState(0);
    // const [email,setEmail]=useState('');
    const [selected, setSelected]=useState([])

    const renderList=oldList.map((item,index)=>(

        <li key={index} className='listCard'>
            <Card props={item}/>
        </li>
    ))
    console.log('primeiro item da lista: ', oldList[0])
    const renderSchedule=selected.horarios?.map((item,index)=>(

        <li key={index} className='listCard'>
            <Calendar props={item}/>
        </li>
    ))

    return (
        <div className='body'>
          <SideBar/>

          <div className='information'>
            <Search id='searchContainer'/>

            <div className='container'>
                <div className='title-container'>
                    <p>{renderList}</p>
                </div>
            </div>
          </div>
          <div className='schedule'>
            <div className='container'>
                    <div className='title-container'>
                        <p>{renderSchedule}</p>
                    </div>
            </div>
          </div>
        </div>

    )
}