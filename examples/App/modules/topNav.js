import React from 'react'
import NavLink from './NavLink'

export default class TopNav extends React.Component {
    render() {
        return (
            <ul role="nav">
                <li><NavLink to="/main">首页</NavLink></li>
                <li><NavLink to="/api">组件</NavLink></li>
                <li><NavLink to="/about">关于我们</NavLink></li>
            </ul>
        )
    }
}