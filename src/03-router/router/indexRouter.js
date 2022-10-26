import React, { Component } from 'react'
import {BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Center from '../views/Center'
import Cinemas from '../views/Cinemas'
import Films from '../views/Films'
import Error from '../views/Error'
import Tabber from '../components/Tabber'
import Login from '../views/Login'
function getToken() {
    return localStorage.getItem('token')
}
export default class indexRouter extends Component {
    state = {
        show: true
    }
    render() {
        return (
            <div>
                <BrowserRouter       >
                    <Tabber></Tabber>
                    <Switch>
                        <Route path='/center' render={
                            () => {
                                return getToken() ? <Center /> : <Login />
                            }}></Route>
                        <Route path='/cinemas' component={Cinemas}></Route>
                        <Route path='/films' component={Films}></Route>

                        <Route path='/login' component={Login}></Route>
                        <Redirect from='/' to='/films' exact />
                        <Route path='*' component={Error}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
