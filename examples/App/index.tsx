import * as React from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import Button from '../../src/Button';
import Alert from '../../src/Alert';
import Icon from '../../src/Icon';
import Line from '../../src/Line';
import {Tabs, Tab} from '../../src/Tabs';
interface AppProps {
}

const styles = {
    tab: {
        backgroundColor: '#F44336',
        height: '300px',
        textAlign: 'center',
    }
}
//injectTapEventPlugin();
export default class App extends React.Component<AppProps, any> {
    state = {selectIndex: 0}
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
    onTabChange(index, oldIndex) {
        console.log(index, oldIndex);
    }
    changeTabsSelect=()=> {
        this.setState({selectIndex: 1 - this.state.selectIndex});
    }
    render() {
        return (
            <div>
                <Button onClick={()=>this.showAlertWithTwoBtn(1,'hahah')} size="small"><Icon fixedWidth={true} type="user-plus"/>showAlertWithTwoBtn</Button>
                <Button onClick={this.showAlertConfirm} disabled={true} size="small"><Icon type="home"/>showAlertConfirm</Button><br/>
                <Line/>
                <Button onClick={this.showAlert}><Icon type="cog"/>showAlert</Button>
                <Button onClick={this.showAlertWithThreeBtn}><Icon size="lg" type="book"/>showAlert with three button<Icon type="pencil"/></Button>
                <Button onClick={this.showAlertConfirm.bind(this)}><Icon size="2x" spin={true} type="spinner"/>showAlertConfirm</Button>
                <Button onClick={this.changeTabsSelect}>changeTabsSelect</Button>
                <Tabs selectedIndex={this.state.selectIndex} onChange={this.onTabChange} animation={true}>
                    <Tab label="旭日" icon={<Icon type="home" size="lg"/>}>
                        <div style={styles.tab}>world1</div>
                    </Tab>
                    <Tab label="晨星">
                        <div style={Object.assign({}, styles.tab, {backgroundColor: '#2196F3'})}>world2</div>
                    </Tab>
                    <Tab label="品专">
                        <div style={Object.assign({}, styles.tab, {backgroundColor: '#009688'})}>world3</div>
                    </Tab>
                    <Tab label="大竞价">
                        <div style={Object.assign({}, styles.tab, {backgroundColor: '#FFEB3B'})}>world4</div>
                    </Tab>
                    <Tab label="信息流">
                        <div style={Object.assign({}, styles.tab, {backgroundColor: '#9E9E9E'})}>world5</div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

