import React, { Component } from 'react'
export default class ZswiperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>
        )
    }
}
