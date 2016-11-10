import React from 'react'
import NavLink from './NavLink'
import allAPI from '../apiConfig'
import _ from 'lodash'
import {colors} from '@bizfe/biz-mobile-ui'
let navStyles = {
    container: {
        padding: '10px 0',
        background: colors.grey_50,
        color: colors.black_dark,
        borderRight: '1px solid '+colors.grey_200,
    }
}
export default class ApiNav extends React.Component {
    render() {
        const links = [];
        _.forIn(allAPI,function(api, key){
            let path = '/api/' + key;
            links.push(<li key={key}><NavLink to={path}>{key + ' ' + api.name}</NavLink></li>);
        })
        const {style} = this.props;
        return (
            <ul className="api-nav" style={Object.assign({}, navStyles.container, style)}>
                {links}
            </ul>
        )
    }
}