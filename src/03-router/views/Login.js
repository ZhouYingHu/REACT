import React from 'react'
import { useHistory } from 'react-router-dom'
export default function Login() {
    const history = useHistory()

    return (
        <div>
            <h1>登录界面</h1>
            <input type='text' />
            <button onClick={() => {
                localStorage.setItem('token', '111')
                history.replace({ pathname: '/center' })
            }}>
                登录
            </button>
        </div >
    )


}
