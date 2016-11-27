import React from 'react'
import ApiNav from './ApiNav'
import Doc from './Doc'
import Demo from './Demo'
let clientHeight = document.documentElement.getBoundingClientRect().height;
const apiStyles = {
    container: {
        minWidth: '960px',
        margin: '0 auto',
        overflow: 'hidden',
        height: 'inherit',
        paddingTop: '50px',
        position: 'relative',
        top: '-50px',
    },
    nav: {
        width: '17%',
        float: 'left',
        height: 'inherit',
        overflow: 'scroll',
    },
    doc: {
        width: '50%',
        float: 'left',
        height: 'inherit',
        overflow: 'scroll',
    },
    demo: {
        width: '33%',
        float: 'right',
        height: 'inherit',
        overflow: 'scroll',
    },
    demoBg: {
        margin: '20px 20px 0',
        backgroundImage: 'url(/App/images/phone.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: 1584/2 + 'px',
        padding: '100px 16px',
        width: '365px',
    },
    iframe: {
        display: 'block',
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        borderRadius: '3px',
        overflow: 'hidden',
    }
}
export default class Api extends React.Component {
    render() {
        const {style, params: {name}} = this.props;
        return (
            <div style={apiStyles.container}>
                <ApiNav style={apiStyles.nav}/>
                <Doc {...this.props} style={apiStyles.doc}/>
                <div style={apiStyles.demo}>
                    <div style={apiStyles.demoBg}>
                        <iframe style={apiStyles.iframe} src={"/#/demo/" + name} width="335" height="590"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}