import React from 'react'
import TopNav from './TopNav'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div><h1>biz-mobile-ui</h1></div>
                {this.props.children}
            </div>
        )
    }
}