import React from 'react'
import { History } from 'react-router';
import NavLink from './NavLink'
import allAPI from '../apiConfig'
import _ from 'lodash'
import {Icon,Panel, colors} from '@bizfe/biz-mobile-ui'
import {px2rem, deviceHeight, htmlFontSize} from '@bizfe/biz-mobile-ui/build/util/util';

function getStyles(){
    const pc  = {
        container: {
            padding: '10px 0',
            background: colors.grey_50,
            color: colors.black_dark,
            borderRight: '1px solid '+colors.grey_200,
            listStyle: 'none',
        }
    }
    return pc
}
export default class ApiNav extends React.Component {
    render() {
        const style = isMobile? {}: this.props.style
        const navStyles  = getStyles()
        const hash = location.hash.split('?')[0]
        return (
            <div style={style}>
                <ul className={isMobile ? 'mo-nav' : 'pc-nav'} style={Object.assign({}, navStyles.container)}>
                    <li style={navStyles.li || {}} key='start'><NavLink to="/start/">使用说明</NavLink></li>
                    {allAPI.map((item, index)=>
                        <li style={navStyles.li || {}} key={index}><NavLink to={"/api/"+item.key}>{item.key + ' ' + item.name}</NavLink></li>
                    )}
                </ul>
            </div>
        )
    }
}