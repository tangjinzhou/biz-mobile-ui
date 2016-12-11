import React from 'react'
import {Popup,Button, colors} from '@bizfe/biz-mobile-ui'
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
export default class PopupDemo extends React.Component {
    constructor(props){
        super(props)
        this.popup = null
    }
    componentDidMount(){
        this.popup && this.popup.close()
    }
    componentDidUpdate(){
        this.popup && this.popup.close()
    }
    componentWillUnmount(){
        this.popup && this.popup.close()
    }
    showPopup=(position)=>{
        this.popup = Popup.show(
            <div>
                BizMobile 为不同应用场景提供全方位的移动开发基础设施，涵盖 Web、iOS、Android 三大平台，涉及开发框架、UI 组件库、消息推送与热更新等后端公共服务。
            </div>, {position: position})
    }

    render() {
        return (
            <p style={{textAlign: 'center'}}>
                <Button style={{marginTop: px2rem(20)}} onTouchTap={()=>this.showPopup('top')} size="small">showTopPopup</Button>
                <br/>
                <Button style={{marginTop: px2rem(20)}} onTouchTap={()=>this.showPopup('bottom')} size="small">showBottomPopup</Button>
            </p>
        )
    }
}