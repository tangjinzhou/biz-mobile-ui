import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {TextareaItem,Toast, colors} from '@bizfe/biz-mobile-ui';

export default class TextareaItemDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '北京搜狗网络', showError: false}
    }
    showMessage = () => {
        const messge = Toast.error('备注有错', 1000, ()=> {
            console.log('showMessage done');
        });
    }
    handleChange = (value) => {
        //可自定义校验
        if(true){
            this.setState({value: value, showError: true})
        }
    }
    render() {
        return (
            <div style={{padding: px2rem(10)}}>
                <h2>非受控组件</h2>
                <TextareaItem labelWidth={px2rem(50)} label="客户名" autoHeight maxHeight={px2rem(300)} defaultValue="高度自适应" placeholder="请输入客户名"/>
                <TextareaItem labelWidth={px2rem(50)} label="评论" onChange={console.log} showCount={true} max={100} rows={3} type="number" placeholder="请输入评论"/>
                <TextareaItem labelWidth={px2rem(50)} label="信息" value="disabled" disabled/>
                <TextareaItem defaultValue="没有label"/>

                <h2>受控组件</h2>
                <TextareaItem labelWidth={px2rem(50)} label="备注1" type="text" value={this.state.value} max={20} onChange={this.handleChange} error={this.state.showError} onErrorTap={this.showMessage}/>
                <TextareaItem labelWidth={px2rem(50)} label="备注2" type="text" value="输人无效"/>
            </div>
        );
    }
}

