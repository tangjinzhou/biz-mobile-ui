import React from 'react'
import {Panel,Button, colors} from '@bizfe/biz-mobile-ui'
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
export default class PanelDemo extends React.Component {
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
    showPanel=(position)=>{
        this.panel = Panel.show(
            <div>
                BizMobile 为不同应用场景提供全方位的移动开发基础设施，涵盖 Web、iOS、Android 三大平台，涉及开发框架、UI 组件库、消息推送与热更新等后端公共服务。
            </div>, {panelWidth: '60%', position: position})
    }

    render() {
        return (
            <p style={{textAlign: 'center'}}>
                <Button style={{marginTop: px2rem(20)}} onTouchTap={()=>this.showPanel('left')} size="small">showLeftPanel</Button>
                <br/>
                <Button style={{marginTop: px2rem(20)}} onTouchTap={()=>this.showPanel('right')} size="small">showRightPanel</Button>
            </p>
        )
    }
}