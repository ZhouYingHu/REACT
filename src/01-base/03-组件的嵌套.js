import React, { Component } from "react"
class Child extends Component {
    render() {
        return <h1 > 大儿子--类组件 < /h1>
    }
}

function SmallChild() {
    return <h2 > 小儿子-- - 函数组件 < /h2>
}

export default class App extends Component {
    render() {
        return ( <
            div >
            <
            Child > < /Child> <SmallChild> </SmallChild > { " " } <
            /div>
        )
    }
}