import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from './Main';
let styles = {
    header: {
        height: '50px',
        borderBottom: '1px solid rgb(238, 238, 238)',
    }
}
export default class App extends React.Component {
    render() {
        const {location: {pathname}} = this.props;
        const isDemo = pathname.split('/')[1] == 'demo';
        return (
            <div style={{height: 'inherit'}}>
                {!isDemo ?<Header pathname={pathname}/>:null}
                {this.props.children || <Main/>}
                {!isDemo ? <Footer/> : null}
            </div>
        )
    }
}