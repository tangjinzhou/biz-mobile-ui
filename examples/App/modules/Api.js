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
    },
    nav: {
        width: '17%',
        float: 'left',
        height: clientHeight - 50 + 'px',
        overflow: 'scroll',
    },
    doc: {
        width: '50%',
        float: 'left',
        height: clientHeight - 50 + 'px',
        overflow: 'scroll',
    },
    demo: {
        width: '33%',
        float: 'right',
        height: clientHeight - 50 + 'px',
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
                        <iframe style={{display: 'block', margin: '0 auto'}} src={"/#/demo/" + name} width="335" height="590"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}