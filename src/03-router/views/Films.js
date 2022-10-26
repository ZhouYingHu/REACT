import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Tab from './films/Tab'
import Detail from './films/Detail'
export default function Films() {
    return (
        <div>
            <Switch>
                <Route path='/films/tab' component={Tab}></Route>
                <Route path='/films/detail' component={Detail}></Route>
                <Redirect from='/films' to='/films/detail' />
            </Switch>
        </div>
    )
}
