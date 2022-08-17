import React, { Component } from "react";
import NavBar from './Navbar'
import TabBar from './Tabber'
export default class App extends Component {
    state = {
        list: [{
            id: 1,
            name: '电影'
        },
        {
            id: 2,
            name: '影院'
        },
        {
            id: 3,
            name: '我的'
        }],
        count: 0
    }
    render() {
        return (
            <div>
                <div><NavBar changeTab={(index) => {
                    this.handleTab(index)
                }}></NavBar></div>
                <div>{
                    this.state.count == 0 ? <div>电影</div> : this.state.count == 1 ? <div>影院</div> : <div>我的</div>
                }</div>
                <div><TabBar list={this.state.list} count={this.state.count} changeTab={(index) => {
                    this.handleTab(index)
                }}></TabBar>
                </div>
            </div>
        )
    }

    handleTab(index) {
        this.setState({
            count: index
        })
    }
}