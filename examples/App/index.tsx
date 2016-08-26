import * as React from 'react';
import Button from '../../src/Button';
import Alert from '../../src/Alert';
import Icon from '../../src/Icon';

interface AppProps {
}

export default class App extends React.Component<AppProps, any> {

    componentDidMount() {
    }

    showAlert() {
        Alert.alert();
    }
    showAlertWithTwoBtn(index, value) {
        Alert.alert({title:'biz',message:value, buttons:[{text:'取消',color:'grey'},{text:'确定'}]});
    }
    showAlertWithThreeBtn() {
        Alert.alert({title:'biz-kcfe',message:"hello bizmolejj<br>快去更新!", buttons:[{text:'取消'},{text:'确定'},{text:'吐槽', color:'red'}]});
    }
    showAlertConfirm() {
        Alert.confirm({title:'请输入用户名', defaultValue: 'tjz', onClick: this.showAlertWithTwoBtn});
    }
    render() {
        return (
            <div>
                <Button onClick={()=>this.showAlertWithTwoBtn(1,'hahah')} size="small"><Icon fixedWidth={true} type="user-plus"/>showAlertWithTwoBtn</Button>
                <br/>
                <Button onClick={this.showAlertConfirm} disabled={true} size="small"><Icon type="home"/>showAlertConfirm</Button>
                <Button onClick={this.showAlert}><Icon type="cog"/>showAlert</Button>
                <Button onClick={this.showAlertWithThreeBtn}><Icon size="lg" type="book"/>showAlert with three button<Icon type="pencil"/></Button>
                <Button onClick={this.showAlertConfirm.bind(this)}><Icon size="2x" spin={true} type="spinner"/>showAlertConfirm</Button>
            </div>
        );
    }
}
