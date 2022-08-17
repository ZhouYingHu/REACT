import React, { Component } from "react"
export default class App extends Component {
    state = {
        list: ["11", "222", "44"],
    }
    inputValue = React.createRef()

    render() {
        return (
            <div>
                <input ref={this.inputValue} />{" "}
                <button onClick={this.handlAdd}> add </button>{" "}
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                onClick={() => {
                                    this.handlDel(index)
                                }}
                            >
                                del
                            </button>
                        </li>
                    ))}
                </ul>
                {this.state.list.length === 0 ? <div>暂无待办事项</div> : null}
            </div>
        )
    }
    handlAdd = () => {
        let newList = [...this.state.list]
        newList.push(this.inputValue.current.value)
        this.setState({
            list: newList,
        })
        this.inputValue.current.value = ''
    }
    handlDel(i) {
        this.setState({
            list: this.state.list.filter((item, index) => index !== i),
        })
    }
}
