import React, { Component } from "react";
import axios from 'axios'
import '../css/01.css'
import '../css/basic.scss'
var bus = {
    list: [],
    arr: [],
    publish(text) {
        this.list.forEach(callback => {
            callback && callback(text)
        })
    },
    subscribe(callback) {
        this.list.push(callback)
    }
}
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmsList: [],
            info: ''
        }
        axios.get(`test.json`).then(res => {
            this.setState({
                filmsList: res.data.data.films
            })
        })

    }
    render() {
        return <div>
            <div>{
                this.state.filmsList.map(item =>
                    <Films key={item.filmId} {...item}></Films>)
            }</div>
            <FilmDetail ></FilmDetail>
        </div>
    }
}
class Films extends Component {
    render() {
        const { name, poster, synopsis } = this.props
        return <div onClick={() => {
            bus.publish(synopsis)
        }}>
            <div className="flex-s pl-50 pr-50 color">
                <img src={poster} alt={name}></img>
                <div>{name}</div>
            </div>

        </div>
    }
}
class FilmDetail extends Component {
    state = {
        info: ''
    }
    constructor() {
        super()
        bus.subscribe((value) => {
            this.setState({
                info: value
            })
        })
    }
    render() {
        return <div className="fixed">
            <div className="pl-30 pr-30">
                {this.state.info}
            </div>
        </div>
    }
}