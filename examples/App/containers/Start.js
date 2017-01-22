import React from 'react'
import ApiNav from '../components/ApiNav'
import MobileNav from '../components/MobileNav'
import Doc from '../components/Doc'
import {px2rem, deviceHeight, htmlFontSize} from '@bizfe/biz-mobile-ui/build/util/util';
function getStyles() {
    const pc = {
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
            overflow: 'scroll',
        },
        doc: {
            width: '83%',
            float: 'left',
            height: 'inherit',
            overflow: 'scroll',
        }
    }
    const mo = {
        container: {
            paddingTop: px2rem(50),
        },
        nav: {

        },
        doc: {
            overflow: 'scroll',
        }
    }
    return isMobile ? mo : pc
}
export default class Start extends React.Component {
    render() {
        const {style, params: {name}} = this.props;
        const apiStyles = getStyles()
        return (
            <div style={apiStyles.container}>
                {isMobile ? <MobileNav/> : <ApiNav style={apiStyles.nav}/>}
                <Doc {...this.props} style={apiStyles.doc}/>
            </div>
        )
    }
}