import * as React from 'react';
import Button from '../../src/Button';
import Alert from '../../src/Alert';

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
        Alert.alert({title:'biz-kcfe',message:"hello bizmobile<br>快去更新!", buttons:[{text:'取消'},{text:'确定'},{text:'吐槽', color:'red'}]});
    }
    showAlertConfirm() {
        Alert.confirm({title:'请输入用户名', defaultValue: 'tjz', onClick: this.showAlertWithTwoBtn});
    }
    render() {
        return (
            <div>
                <h1>hello biz-mobilekdkdkkddddk</h1>
                <Button onClick={()=>this.showAlertWithTwoBtn(1,'hahah')} size="small">showAlertWithTwoBtn</Button>
                <br/>
                <Button onClick={this.showAlertConfirm} disabled={true} size="small">showAlertConfirm</Button>
                <Button onClick={this.showAlert}>showAlert</Button>
                <Button onClick={this.showAlertWithThreeBtn}>showAlert with three button</Button>
                <Button onClick={this.showAlertConfirm.bind(this)}>showAlertConfirm</Button>
            </div>
        );
    }
}
