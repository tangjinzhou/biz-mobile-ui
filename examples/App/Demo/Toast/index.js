import React from 'react'
import {Toast,Button, colors} from '@bizfe/biz-mobile-ui'
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
export default class PopupDemo extends React.Component {
    constructor(props){
        super(props)
    }
    showToast(fn, title) {
        fn(title, 1000, ()=> {
            //回调
            console.log('showMessage done');
        });
    }

    render() {
        return (
            <p style={{textAlign: 'center'}}>
                <Button style={{marginTop: px2rem(20)}} onTouchTap={()=>this.showToast(Toast.error,'错误')} size="small">showErrorToast</Button>
                <br/>
                <Button style={{marginTop: px2rem(20)}} onTouchTap={()=>this.showToast(Toast.loading,'加载')} size="small">showLoadingToast</Button>
                <br/>
                <Button style={{marginTop: px2rem(20)}} onTouchTap={()=>this.showToast(Toast.success, '成功')} size="small">showSuccessToast</Button>
                <br/>
                <Button style={{marginTop: px2rem(20)}} onTouchTap={()=>this.showToast(Toast.show, '提示')} size="small">showInfoToast</Button>
            </p>
        )
    }
}