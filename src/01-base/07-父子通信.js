

import React, { Component } from "react";
import '../css/01.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={() => {

                    this.props.show()
                }}>隐藏</button>
            </div>
        )
    }
}
export default class App extends Component {
    state = {
        isShow: true
    }
    render() {

        return (
            <div>
                <Navbar show={() => {
                    this.hidden()
                }}></Navbar>
                {this.state.isShow && <ul className='ye'>
                    <li>1111</li>
                    <li>1111</li>
                    <li>111</li>
                    <li>11</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>111</li>
                    <li>111</li>
                </ul>}
            </div>
        )
    }
    hidden() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

}