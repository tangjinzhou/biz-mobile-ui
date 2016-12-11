import React from 'react'
import allAPI from '../apiConfig'
import _ from 'lodash'
import {Icon,Panel, colors} from '@bizfe/biz-mobile-ui'
import {px2rem, deviceHeight, htmlFontSize} from '@bizfe/biz-mobile-ui/build/util/util';
function getStyles(){

    return {
        container: {
            background: '#fefefe',
            width: '100%',
        },
        li: {
            padding: '0 '+ px2rem(10),
            borderTop: '1px solid '+colors.grey_200,
        },
        header : {
            textAlign: 'center',
            background: colors.grey_200,
            fontSize: px2rem(18),
            color: colors.blue_500,
            lineHeight: px2rem(50),
            position: 'relative',
        },
        btn: {
            position: 'absolute',
            left: 0,
            top: 0,
            height: px2rem(50),
            width: px2rem(50),
            textAlign: 'center',
        }
    }
}
export default class MobileNav extends React.Component {
    constructor(props){
        super(props)
        this.panel = null
    }
    componentDidMount(){
        this.panel && this.panel.close()
    }
    componentDidUpdate(){
        this.panel && this.panel.close()
    }
    componentWillUnmount(){
        this.panel && this.panel.close()
    }
    showMoNav=()=>{
        const navStyles  = getStyles()
        const {style, isDemo} = this.props
        const hash = location.hash.split('?')[0]
        const path = isDemo ? 'demo': 'api'
        this.panel = Panel.show(
            <ul className={isMobile ? 'mo-nav' : 'pc-nav'} style={Object.assign({}, navStyles.container)}>
                <li style={Object.assign({},navStyles.li || {}, isDemo?{display: 'none'}:{})} key='start'><a href="javascript:;" className={hash == '#/start/'?'active':''} onTouchTap={()=>this.changeApi('#/start/')}>使用说明</a></li>
                {allAPI.map((item, index)=>
                    <li style={navStyles.li || {}} key={index}><a href="javascript:;" className={hash == '#/'+path+'/'+item.key?'active':''} onTouchTap={()=>this.changeApi('#/'+path+'/'+item.key)}>{item.key + ' ' + item.name}</a></li>
                )}
            </ul>, {})
    }
    changeApi(hash){
        location.hash = hash
    }

    render() {
        const {style, name: temp, location} = this.props;
        let name = temp
        if(!name && location){
            name = location.pathname.split('/')[2]
        }
        const navStyles  = getStyles()
        let item = {}
        if(name){
            item = _.find(allAPI, (item)=>item.key === name);
        } else {
            item = {
                name: '使用说明',
                key: ''
            }
        }
        return (
            <p style={navStyles.header}>
                <span style={navStyles.btn} onTouchTap={this.showMoNav}><Icon type="bars"/></span>
                {item.name + ' ' +item.key}
            </p>
        )
    }
}