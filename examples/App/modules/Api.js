import React from 'react'
import ApiNav from './ApiNav'
import Doc from './Doc'
import Demo from './Demo'
let docEl = document.documentElement;
const apiStyles = {
    container: {
        minWidth: '960px',
        margin: '0 auto',
        overflow: 'hidden',
    },
    nav: {
        width: '17%',
        float: 'left',
    },
    doc: {
        width: '50%',
        float: 'left',
    },
    demo: {
        width: '33%',
        float: 'right',
    }
}
export default class Api extends React.Component {
    render() {
        return (
            <div style={apiStyles.container}>
                <ApiNav style={apiStyles.nav}/>
                <Doc {...this.props} style={apiStyles.doc}/>
                <Demo {...this.props} style={apiStyles.demo}/>
            </div>
        )
    }
}