import react from 'react'
import './style.css'

export default function UserInfo(){

    const [name,setName]=useState()
    const [cpf,setCpf]=useState()
    const [age,setAge]=useState()
    const [email,setEmail]=useState()

    const oldList=[
        {
            nome: 'Felipe Barreto',
            CPF: '111.222.333-67',
            Idade: '21',
            Email: 'exemplo@gmail.com',
        },
        {
            nome: 'David Castro',
            CPF: '111.222.333-67',
            Idade: '21',
            Email: 'exemplo@gmail.com',
        },
        {
            nome: 'Luiz Almeida',
            CPF: '111.222.333-67',
            Idade: '21',
            Email: 'exemplo@gmail.com',
        }
    ]

    const renderList=oldList.map((item,index)=>(
        <li key={index}>
        </li>
    ))

    return(
        <div className='container'>
            <div className='title-container'>
                <h1>teste</h1>
            </div>
        </div>

    )
}