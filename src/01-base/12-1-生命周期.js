// @ts-nocheck
import React, { Component } from "react";
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default class App extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        axios.get(`test.json`).then(res => {
            this.setState({
                list: res.data.data.films
            })
        })
    }
    render() {
        return <div id='myreact' style={{ width: '100%', height: '100px', backgroundColor: 'yellow', overflow: 'hidden' }}>
            <ul>
                {this.state.list.map(item => <li key={item.filmId}>
                    {item.name}
                </li>)}
            </ul>

        </div>
    }
    componentDidUpdate() {
        new BetterScroll('#myreact')
    }
}