import React, { Component } from "react";
class Field extends Component {
    state = {
        value: ''
    }
    clear() {
        this.setState({
            value: ''
        })
    }
    render() {
        return <div>
            <label htmlFor={this.props.name}>{this.props.name}</label>
            <input id={this.props.name} type={this.props.type} value={this.state.value} onChange={
                (event) => {
                    this.setState({
                        value: event.target.value
                    })
                }
            } ></input>
        </div>
    }
}
export default class App extends Component {
    username = React.createRef()
    password = React.createRef()
    render() {
        return <div>
            <Field type='text' name="姓名" ref={this.username}></Field>
            <Field type="password" name="密码" ref={this.password} ></Field>
            <button onClick={() => {
                console.log(this.username.current.state.value)
                console.log(this.password.current.state.value)
            }}>登录</button>
            <button onClick={() => {
                this.username.current.clear()
                this.password.current.clear()
            }}>取消1111</button>

        </div>
    }
}