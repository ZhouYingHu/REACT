import React, { Component } from 'react'
import Router from './router/indexRouter'
export default class App extends Component {
    render() {
        return (
            <div>
                <Router />
                <div>路由</div>
            </div>
        )
    }
}
