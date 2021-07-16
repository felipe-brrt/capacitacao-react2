import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import UserInfo from '../Pages/UserInfo'
import About from '../Pages/About'

export default function Routes(){
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/UserInfo' component={UserInfo}/>
                <Route path='/SignUp' component={SignUp}/>
                <Route path='/About' component={About}/>
            </Switch>
        </BrowserRouter>
        </>
    )
}