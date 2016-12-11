import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Dialog,createDialog, Button, colors} from '@bizfe/biz-mobile-ui';

export default class CheckboxDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: true}
    }
    hideDialog=()=>{
        this.setState({open: false})
    }
    showDialog(){
        createDialog(
            <div>BizMobile 为不同应用场景提供全方位的移动开发基础设施，涵盖 Web、iOS、Android 三大平台，涉及开发框架、UI 组件库、消息推送与热更新等后端公共服务。</div>,
            {style: {padding: px2rem(10)}}
        )
    }
    render() {
        return (
            <div>
                <Dialog style={{padding: px2rem(10)}} open={this.state.open} maskOnTouchTap={()=>{}}>
                    BizMobile 为不同应用场景提供全方位的移动开发基础设施，涵盖 Web、iOS、Android 三大平台，涉及开发框架、UI 组件库、消息推送与热更新等后端公共服务。
                    <p style={{textAlign: 'center'}}><Button style={{marginTop: px2rem(20)}} size="small" onTouchTap={this.hideDialog}>hideDialog</Button></p>
                </Dialog>
                <Button style={{marginTop: px2rem(20)}} onTouchTap={this.showDialog}>showDialog</Button>
            </div>
            
        );
    }
}

