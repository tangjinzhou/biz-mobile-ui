import React from 'react'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'
export default function Header(props) {
    const type = props.pathname.split('/')[1]
    return (
        <nav className="main-nav">
            <IndexLink to={'/'} activeClassName="active">BizMobile</IndexLink>
            <NavLink to={'/start'} className={type == 'api' ? 'active' : ''}>H5 框架</NavLink>
            <NavLink to={'/h5tools'} className={type == 'h5tools' ? 'active' : ''}>H5 制作</NavLink>
            <NavLink to={'/service'} className={type == 'service' ? 'active' : ''}>公共服务</NavLink>
            <NavLink to={'/ios'} className={type == 'ios' ? 'active' : ''}>iOS 开发</NavLink>
            <NavLink to={'/android'} className={type == 'android' ? 'active' : ''}>Android 开发</NavLink>
        </nav>
    )
}