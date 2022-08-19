import React, { Component } from "react";
import axios from 'axios'
import '../css/01.css'
import '../css/basic.scss'
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
                    <Films key={item.filmId} {...item} event={
                        (value) => {
                            this.setState({
                                info: value
                            })
                        }
                    }></Films>)
            }</div>
            <FilmDetail info={this.state.info}></FilmDetail>
        </div>
    }
}
class Films extends Component {
    render() {
        const { name, poster, synopsis } = this.props
        return <div onClick={() => {
            this.props.event(synopsis)
        }}>
            <div className="flex-s pl-50 pr-50 color">
                <img src={poster} alt={name}></img>
                <div>{name}</div>
            </div>

        </div>
    }
}
class FilmDetail extends Component {
    render() {
        return <div className="fixed">
            <div className="pl-30 pr-30">{this.props.info}</div>
        </div>
    }
}