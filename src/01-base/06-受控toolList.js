// @ts-nocheck
import React, { Component } from "react";
export default class App extends Component {
    state = {
        name: '',
        list: [{
            id: 1,
            name: '无敌',
            isChecked: false
        },
        {
            id: 2,
            name: '是多么',
            isChecked: false
        },
        {
            id: 3,
            name: '寂寞',
            isChecked: false
        }]
    }
    render() {
        var bg = {
            listStyleType: 'square'
        }

        return (<div>
            <input type="text" value={this.state.name} onChange={(event) => {
                this.setState({
                    name: event.target.value
                })

            }}></input>
            <button onClick={() => {
                this.handleAdd()
            }}>add</button>
            <ul style={bg}>
                {
                    this.state.list.map((item, index) =>
                        <li key={item.id}><input type="checkbox" checked={item.isChecked} onChange={
                            () => {
                                this.changeCheck(index)
                            }
                        } /><span style={{ textDecoration: item.isChecked ? 'line-through' : '' }}>{item.name}</span><button onClick={() => {
                            this.handleDel(index)
                        }}>del</button></li>
                    )
                }
            </ul>
        </div >)
    }
    handleAdd() {
        let newList = this.state.list
        newList.push({
            name: this.state.name,
            id: this.state.list.at(-1).id ? this.state.list.at(-1).id + 1 : 1,
            isChecked: false

        })
        this.setState({
            list: newList,
            name: ''
        })


    }
    changeCheck(index) {
        let newList = this.state.list
        newList[index].isChecked = !newList[index].isChecked
        this.setState({
            list: newList
        })

    }
    handleDel(index) {
        let newList = this.state.list
        if (this.state.list.length === 1) {
            console.log('最后一个禁止删除')
            return false
        } else {
            console.log(this.state.list)
            newList.splice(index, 1)
            this.setState({
                list: newList
            })
        }

    }
}