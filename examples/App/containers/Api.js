import React from 'react'
import ApiNav from '../components/ApiNav'
import Doc from '../components/Doc'
import Demo from './Demo'
import {px2rem, deviceHeight, htmlFontSize} from '@bizfe/biz-mobile-ui/build/util/util';
function getStyles() {

    const pcStyle = {
        container: {
            minWidth: '960px',
            margin: '0 auto',
            overflow: 'hidden',
            height: 'inherit',
            paddingTop: '50px',
        },
        nav: {
            width: '17%',
            float: 'left',
            height: 'inherit',
            overflow: 'auto',
        },
        doc: {
            width: '50%',
            float: 'left',
            height: 'inherit',
            overflow: 'auto',
        },
        demo: {
            width: '33%',
            float: 'right',
            height: 'inherit',
            overflow: 'auto',
        },
        demoBg: {
            margin: '20px 20px 0',
            backgroundImage: 'url(/App/img/phone.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            height: 1584 / 2 + 'px',
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
    const mobileStyles = {
        container: {
            paddingTop: px2rem(50),
        },
        nav: {
            
        },
        doc: {
            overflow: 'scroll',
        }
    }
    return isMobile ? mobileStyles : pcStyle
}
let clientHeight = document.documentElement.getBoundingClientRect().height;
export default class Api extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const name = this.props.params.name;
        const apiStyles = getStyles()
        return (
            <div style={apiStyles.container}>
                {!isMobile? <ApiNav name={name} style={apiStyles.nav}/>:null}
                {isMobile? <Demo name={name}/>: null}
                <Doc name={name} style={apiStyles.doc}/>
                {!isMobile ?
                    <div style={apiStyles.demo}>
                        <div style={apiStyles.demoBg}>
                            <iframe style={apiStyles.iframe} src={"/#/demo/" + name} width="335" height="590"></iframe>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}