import React from 'react'
import NavLink from './NavLink'
import allAPI from '../apiConfig'
import _ from 'lodash'

export default class ApiNav extends React.Component {
    render() {
        const links = [];
        _.forIn(allAPI,function(api, key){
            let path = '/api/' + key;
            links.push(<li key={key}><NavLink to={path}>{key + ' ' + api.name}</NavLink></li>);
        })
        const {style} = this.props;
        return (
            <ul style={style}>
                {links}
            </ul>
        )
    }
}