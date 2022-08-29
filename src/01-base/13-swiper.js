import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default class App extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: [1, 2, 3]
            })
        }, 1000)
    }
    componentDidUpdate() {
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    render() {
        return (
            <div>
                <div className="swiper" style={{ background: 'yellow', height: '200px' }}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item =>
                                <div className="swiper-slide" style={{ textAlign: 'center', lineHeight: '200px' }} key={item}>{item}</div>
                            )
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div >
        )
    }
}
