import * as attachFastClick from 'fastclick';
//attachFastClick['attach'](document.body);
import * as React from 'react';
import request from './request';

import {
    Button,
    Alert,
    Icon,
    Line,
    Tabs,
    Tab,
    TabBar,
    TabBarItem,
    SegmentedControl,
    LinearProgress,
    Carousel,
} from '../../src/index.tsx';
interface AppProps {

}

const styles = {
    tab: {
        backgroundColor: '#ddd',
        height: '2800px',
        textAlign: 'center',
        overflow: 'hidden',
    },
    seg: {
        width: '90%',
        margin: '20px auto 0',
    },
    slide1: {
        height: 500,
        textAlign: 'center',
        backgroundColor: '#FEA900',
    },
    slide2: {
        height: 500,
        textAlign: 'center',
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        height: 500,
        textAlign: 'center',
        backgroundColor: '#6AC0FF',
    },
}
export default class App extends React.Component<AppProps, any> {
    state = {selectIndex: 0, progress: 10}
    //isMounted = this.isMounted;
    componentDidMount() {
        let req = request('./getProduct.action').then((res)=> {
            //console.log(res.data, this.isMounted());
        });

    }

    showAlert() {
        Alert.alert();
    }

    showAlertWithTwoBtn(index, value) {
        Alert.alert({title: 'biz', message: value, buttons: [{text: '取消', color: 'grey'}, {text: '确定'}]});
    }

    showAlertWithThreeBtn() {
        Alert.alert({
            title: 'biz-kcfe',
            message:<span>hello bizmolejj<br/>快去更新!</span>,
            buttons: [{text: '取消'}, {text: '确定'}, {text: '吐槽', color: 'red'}]
        });
    }

    showAlertConfirm() {
        Alert.confirm({title: '请输入用户名', defaultValue: 'tjz', onTouchTap: this.showAlertWithTwoBtn});
    }

    onTabChange(index, fromIndex) {
        console.log(index, fromIndex);
    }

    changeTabsSelect = ()=> {
        this.setState({selectIndex: 1 - this.state.selectIndex});
    }

    changeProgress(percent) {
        if (percent < 0) {
            percent = 0;
        } else if (percent > 100) {
            percent = 100;
        }
        this.setState({progress: percent});
    }

    render() {
        return (
            <TabBar selectedIndex={this.state.selectIndex} onChangeIndex={this.onTabChange}>
                <TabBarItem label="首页" icon={<Icon type="home" size="2x"/>}>
                    <Tabs selectedIndex={this.state.selectIndex} onChangeIndex={this.onTabChange} animation={true}>
                        <Tab label="旭日">
                            <Carousel onChangeIndex={this.onTabChange} autoplay={true} style={{height: 500}}>
                                <div style={styles.slide1}>slide 1</div>
                                <div style={styles.slide2}>slide 2</div>
                                <div style={styles.slide3}>slide 3</div>
                            </Carousel>
                            <div style={styles.tab}>
                                <SegmentedControl onChangeIndex={this.onTabChange} style={styles.seg}
                                                  values={['详情','评论','相关']}/>
                                <SegmentedControl onChangeIndex={this.onTabChange} selectedIndex={1} tintColor='#8E24AA'
                                                  style={styles.seg} values={['详情','评论','相关']}/>
                                <SegmentedControl onChangeIndex={this.onTabChange}
                                                  style={Object.assign({},styles.seg, {width: '80%', height: '150px'})}
                                                  values={['详情','评论']} enabled={false}/>
                                <LinearProgress style={styles.seg}/>
                                <LinearProgress style={Object.assign({},styles.seg,{height: 40})} color="#8E24AA"
                                                fillColor="#FFF"/>
                                <LinearProgress style={styles.seg} mode="determinate" percent={this.state.progress}/>
                                <Button style={styles.seg}
                                        onTouchTap={()=>this.changeProgress(this.state.progress + 20)}
                                        size="small">+ 20</Button>
                                <Button style={styles.seg}
                                        onTouchTap={()=>this.changeProgress(this.state.progress - 10)}
                                        size="small">- 10</Button>
                            </div>
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
                        <Tab label="晨星">
                            <div style={Object.assign({}, styles.tab, {backgroundColor: '#2196F3'})}>world6</div>
                        </Tab>
                        <Tab label="品专">
                            <div style={Object.assign({}, styles.tab, {backgroundColor: '#009688'})}>world7</div>
                        </Tab>
                        <Tab label="大竞价">
                            <div style={Object.assign({}, styles.tab, {backgroundColor: '#FFEB3B'})}>world8</div>
                        </Tab>
                        <Tab label="信息流">
                            <div style={Object.assign({}, styles.tab, {backgroundColor: '#9E9E9E'})}>world9</div>
                        </Tab>
                    </Tabs>
                </TabBarItem>
                <TabBarItem label="设置" icon={<Icon type="cog" size="2x"/>}>
                    <Button onTouchTap={()=>this.showAlertWithTwoBtn(1,'hahah')} size="small"><Icon fixedWidth={true}
                                                                                                    type="user-plus"/>showAlertWithTwoBtn</Button>
                    <Button onTouchTap={this.showAlertConfirm} disabled={true} size="small"><Icon type="home"/>showAlertConfirm</Button><br/>
                    <Line/>
                    <Button onTouchTap={this.showAlert}><Icon type="cog"/>showAlert</Button>
                    <Button onTouchTap={this.showAlertWithThreeBtn}><Icon size="lg" type="book"/>showAlert with three button<Icon
                        type="pencil"/></Button>
                    <Button onTouchTap={this.showAlertConfirm.bind(this)}><Icon size="2x" spin={true} type="spinner"/>showAlertConfirm</Button>
                    <Button onTouchTap={this.changeTabsSelect}>changeTabsSelect</Button>
                </TabBarItem>
                <TabBarItem label="我的" icon={<Icon type="user" size="2x"/>}>
                    <Tabs selectedIndex={this.state.selectIndex} onChangeIndex={this.onTabChange} animation={true}>
                        <Tab label="旭日">
                            <div style={styles.tab}>world1</div>
                        </Tab>
                        <Tab label="晨星星星星星星">
                            <div style={Object.assign({}, styles.tab, {backgroundColor: '#2196F3'})}>world2</div>
                        </Tab>
                    </Tabs>
                </TabBarItem>
                <TabBarItem label="我的" icon={<Icon type="user" size="2x"/>}>
                    <Tabs selectedIndex={this.state.selectIndex} onChangeIndex={this.onTabChange} animation={true}>
                        <Tab label="旭日">
                            <div style={styles.tab}>world1</div>
                        </Tab>
                        <Tab label="晨星星星星星星">
                            <div style={Object.assign({}, styles.tab, {backgroundColor: '#2196F3'})}>world2</div>
                        </Tab>
                    </Tabs>
                </TabBarItem>
            </TabBar>
        );
    }
}

