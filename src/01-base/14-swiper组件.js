// @ts-nocheck
import React, { Component } from 'react'
import axios from 'axios'
import Zswiper from './Zswiper'
import ZswiperItem from './Zswiper-item'
export default class App extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        axios({
            url: '/test.json',
            method: 'get'
        }).then(res => {
            this.setState({
                list: res.data.data.films
            })
        })
    }
    render() {
        return (
            <div>
                <Zswiper loop={true}>
                    {
                        this.state.list.map(item =>
                            <ZswiperItem key={item.filmId}>
                                <img alt={item.filmId} src={item.poster} style={{ height: '200px', width: '100%' }}></img>
                            </ZswiperItem>)
                    }
                </Zswiper>
            </div>
        )
    }
}
