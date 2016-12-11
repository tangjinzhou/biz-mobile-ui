import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {InputItem,Toast, colors} from '@bizfe/biz-mobile-ui';

export default class InputDemo extends React.Component {
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
                <InputItem labelWidth={px2rem(50)} label="客户名" defaultValue="搜狗网络" placeholder="请输入客户名"/>
                <InputItem labelWidth={px2rem(50)} label="邮箱" type="number" extra="@qq.com" placeholder="请输入邮箱" clear={false} />
                <InputItem labelWidth={px2rem(50)} label="电话" type="tel" defaultValue="88888888" disabled/>
                <InputItem labelWidth={px2rem(50)} label="密码" type="password" placeholder="请输入密码"/>
                <h2>受控组件</h2>
                <InputItem labelWidth={px2rem(50)} label="备注1" type="text" value={this.state.value} max={20} onChange={this.handleChange} error={this.state.showError} onErrorTap={this.showMessage}/>
                <InputItem labelWidth={px2rem(50)} label="备注2" type="text" value="输人无效"/>
            </div>
        );
    }
}

