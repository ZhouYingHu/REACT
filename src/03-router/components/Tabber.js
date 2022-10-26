import React from 'react'
import { NavLink } from 'react-router-dom'
import './Taberr.css'
export default function Tabber() {
    return (
        <div>
            <ul>
                <li><NavLink to='/films' activeClassName='active'>电影</NavLink></li>
                <li><NavLink to='/center' activeClassName='active'>个人中心</NavLink></li>
                <li><NavLink to='/cinemas' activeClassName='active'>影院</NavLink></li>
            </ul>
        </div>
    )
}
