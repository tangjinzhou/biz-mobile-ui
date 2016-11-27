import React from 'react'
import TopNav from './TopNav'
let styles = {
    header: {
        height: '50px',
        borderBottom: '1px solid rgb(238, 238, 238)',
    }
}
export default class App extends React.Component {
    render() {
        const {location: {pathname}} = this.props;
        console.log(pathname);
        const isDemo = pathname.split('/')[1] == 'demo';
        return (
            <div style={{height: 'inherit'}}>
                {isDemo? null : <header style={styles.header}><h1>biz-mobile-ui</h1></header>}
                {this.props.children}
            </div>
        )
    }
}