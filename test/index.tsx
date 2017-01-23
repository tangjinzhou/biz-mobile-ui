//import * as attachFastClick from 'fastclick';
//attachFastClick['attach'](document.body);
import * as React from 'react';
import {px2rem, deviceHeight, htmlFontSize} from '../src/util/util';
import * as objectAssign from 'object-assign';
import colors from '../src/styles/colors';
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
    Badge,
    Toast,
    Card,
    Switch,
    Checkbox,
    Radio,
    RadioGroup,
    Ellipsis,
    Table,
    Arrow,
    Slider,
    Popup,
    Panel,
    InputItem,
    Dialog,
    TextareaItem,
    ScrollerView
    //DatePicker,
} from '../src/index'
import Pregress from './Progress';
import Consume from './Consume';

const slideHeight = px2rem(100);
const styles = {
    tab: {
        backgroundColor: '#ddd',
        //minHeight: deviceHeight / htmlFontSize - parseFloat(px2rem(88)) + 'rem',
        //overflow: 'scroll',
        //height: '500px',
    },
    seg: {
        width: '90%',
        margin: '20px auto 0',
    },
    slide1: {
        height: slideHeight,
        textAlign: 'center',
        backgroundColor: '#FEA900',
    },
    slide2: {
        height: slideHeight,
        textAlign: 'center',
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        height: slideHeight,
        textAlign: 'center',
        backgroundColor: '#6AC0FF',
    },
    button: {
        marginTop: px2rem(10),
    }
}
export default class App extends React.Component<any, any> {
    _table = null;
    state = {selectIndex: 0, info: 'hello', open: false, refreshing: false};
    //isMounted = this.isMounted;
    componentDidMount() {

    }

    showAlertWithTwoBtn(index, value) {
        Alert.alert({title: 'biz', message: value, buttons: [{text: '取消', color: 'grey'}, {text: '确定'}]});
    }

    showAlertWithThreeBtn() {
        /*Alert.alert({
            title: 'biz-kcfe',
            message:<span>hello bizmolejj<br/>快去更新!</span>,
            buttons: [{text: '取消'}, {text: '确定'}, {text: '吐槽', color: 'red'}]
        });*/
    }

    showAlertConfirm() {
        Alert.prompt({title: '请输入用户名', defaultValue: 'tjz', onTouchTap: this.showAlertWithTwoBtn});
    }

    onTabChange(index, fromIndex) {
        console.log(index, fromIndex);
    }

    changeTabsSelect = ()=> {
        this.setState({selectIndex: 0});
    }

    showMessage = () => {
        const messge = Toast.loading('填写正确的邮箱', 0, ()=> {
            console.log('showMessage done');
        });
    }
    showPopup = (position) => {
        Panel.show(<ul>
                <li style={{padding: px2rem(100)}}>
                    hello World
                </li>
                <li style={{padding: px2rem(100)}}>
                    hello sogou
                </li>
            <li style={{padding: px2rem(100)}}>
                hello World
            </li>
            <li style={{padding: px2rem(100)}}>
                hello sogou
            </li>
            </ul>, {position: 'right', showMask: true, panelWidth: '80%'});
    }
    commonFunc = (...args) => {
        console.log(args);
    }
    onRefresh=()=> {
        console.log('onRefresh');
        this.setState({ refreshing: true });
        this.onAjax();
    }
    onAjax=()=> {
        setTimeout(() => {
            this.setState({
                refreshing: false,
            });
        }, 1000);
    }
    onEndReached=()=> {
        alert('onEndReached 数据加载中');
    }
    render() {

        return (
            <TabBar onChangeIndex={this.onTabChange}>
                <TabBarItem label="首页" icon={<Icon type="home" size="2x"/>} badgeContent={'21'}>
                    <Tabs onChangeIndex={this.onTabChange} animateHeight={true} animation={true}>
                        <Tab label="旭日">
                            <ScrollerView
                                onRefresh={this.onRefresh}
                                refreshOption={{
                                    distanceToRefresh: parseFloat(px2rem(50)) * htmlFontSize,
                                    refreshing: this.state.refreshing
                                    }}
                                onEndReached={this.onEndReached}
                                style={{height: px2rem(500)}}
                            >
                                <div style={objectAssign({}, styles.tab, {backgroundColor: colors.grey_200})}>
                                <Carousel onChangeIndex={this.commonFunc} autoplay={true}>
                                    <div style={styles.slide1}>slide 1</div>
                                    <div style={styles.slide2}>slide 2</div>
                                    <div style={styles.slide3}>slide 3</div>
                                </Carousel>
                                    <Button style={objectAssign({},styles.seg, {display: 'block'})}
                                            onTouchTap={this.showMessage}>
                                        show info Message
                                    </Button>
                                    <RadioGroup name="productType" defaultValueSelected="2" onChange={this.commonFunc}>
                                        <Radio label="旭日" value="1"/>
                                        <Radio label="晨星" value="2"/>
                                        <Radio label="皓月" value="3"/>
                                    </RadioGroup>
                                    <div>
                                        <Radio style={{marginTop: px2rem(10)}}
                                               label={<Ellipsis width={px2rem(50)} line={1} text="你好helloeooeoddllld"/>}
                                               checked onChange={this.commonFunc}
                                               labelPosition="left"/>
                                    </div>

                                    <div>
                                        <Checkbox style={{marginTop: px2rem(10)}}
                                                  label={<Ellipsis text="你好"/>}
                                                  disabled checked/>
                                        <Checkbox style={{marginTop: px2rem(10)}}
                                                  label={<Ellipsis line={2} text="你好"/>}/>
                                    </div>
                                    <div>
                                        <Checkbox style={{marginTop: px2rem(10)}}
                                                  label={<Ellipsis width={px2rem(50)} line={1} text="你好helloeooeoddllld"/>}
                                                  checked onChange={this.commonFunc}
                                                  labelPosition="left" value="1"/>
                                    </div>
                                {this.state.open ? <Dialog open={this.state.open}>{this.state.info}</Dialog>:null}
                                <div style={{background: '#FFFFFF', paddingLeft: px2rem(15)}}>
                                    <TextareaItem labelWidth={px2rem(50)} label="客户名" autoHeight maxHeight={px2rem(300)} defaultValue="sogou" placeholder="请输入客户名"/>
                                    <TextareaItem labelWidth={px2rem(50)} label="评论" onChange={console.log} showCount={true} max={10} rows={3} type="number" placeholder="请输入评论"/>
                                    <TextareaItem labelWidth={px2rem(50)} label="电话" type="number" value="4158" disabled/>
                                    <TextareaItem defaultValue="没有label"/>

                                    <InputItem labelWidth={px2rem(50)} label="客户名" defaultValue="sogou" placeholder="请输入客户名"/>
                                    <InputItem labelWidth={px2rem(50)} label="邮箱" max={5} type="number" extra="@qq.com" placeholder="请输入邮箱" error={true} onErrorTap={this.showMessage}/>
                                    <InputItem labelWidth={px2rem(50)} label="电话" type="number" value="4158" disabled/>
                                    <InputItem defaultValue="没有label"/>
                                </div>

                                <Consume/>
                                <SegmentedControl onChangeIndex={this.onTabChange} style={styles.seg}
                                                  values={['详情','评论','相关']}/>
                                <SegmentedControl onChangeIndex={this.onTabChange} defaultIndex={1} color='#8E24AA'
                                                  style={styles.seg} values={['详情','评论','相关']}/>
                                <SegmentedControl onChangeIndex={this.onTabChange}
                                                  style={objectAssign({},styles.seg, {width: '80%', height: px2rem(40)})}
                                                  values={['详情','评论']} disabled={true}/>
                                <Pregress/>
                                <Button style={objectAssign({},styles.seg, {display: 'block'})}
                                        onTouchTap={this.showMessage}>
                                    show info Message
                                </Button>
                                <Button style={objectAssign({},styles.seg, {display: 'block'})}
                                        onTouchTap={()=>this.showPopup('top')}>
                                    showTopPopup
                                </Button>
                                <Button style={objectAssign({},styles.seg, {display: 'block'})}
                                        onTouchTap={()=>this.showPopup('bottom')}>
                                    showBottomPopup
                                </Button>
                                <Arrow direction="right"/>
                                <Arrow direction="left"/>
                                <Arrow direction="top"/>
                                <Arrow direction="bottom"/>
                                <Arrow direction="right" color={colors.blue_500} innerColor="#eee"/>
                                <Arrow direction="left" color={colors.blue_500} innerColor="#eee"/>
                                <Arrow direction="top" color={colors.blue_500} innerColor="#eee"/>
                                <Arrow direction="bottom" color={colors.blue_500} innerColor="#eee" size={px2rem(20)}
                                       lineThickness={px2rem(4)}/>
                                <Switch style={{marginTop: px2rem(10)}} onChange={this.commonFunc}/>
                                <Switch style={{marginTop: px2rem(10)}} checked disabled onChange={this.commonFunc}/>
                                <Slider
                                    style={{width: '90%', margin: '0 auto'}}
                                    value={60}
                                    min={10}
                                    max={99}
                                    step={0.1}
                                    onChange={this.commonFunc}
                                    onDragStart={this.commonFunc}
                                    onDragStop={this.commonFunc}
                                />



                                <Card style={{marginTop: px2rem(10)}}>
                                    hello World
                                </Card>
                                <Card style={{marginTop: px2rem(10)}} full={true}>
                                    你好
                                </Card>
                            </div>
                                <p style={{textAlign: 'center', padding: '10px'}}>数据加载中...</p>
                            </ScrollerView>
                        </Tab>
                        <Tab label="晨星">
                            <div style={objectAssign({}, styles.tab)}>
                                <Button style={styles.button} onTouchTap={()=>this.showAlertWithTwoBtn(1,'hahah')}
                                        size="small"><Icon fixedWidth={true}
                                                           type="user-plus"/>showAlertWithTwoBtn</Button>
                                <Button style={styles.button} onTouchTap={this.showAlertConfirm} disabled={true}
                                        size="small"><Icon type="home"/>showAlertConfirm</Button><br/>

                                <Button style={styles.button} onTouchTap={this.showAlertWithThreeBtn}><Icon size="lg"
                                                                                                            type="book"/>showAlert with three button<Icon
                                    type="pencil"/></Button>
                                <Button style={styles.button} onTouchTap={this.showAlertConfirm.bind(this)}><Icon
                                    size="2x" spin={true} type="spinner"/>showAlertConfirm</Button>
                                <Button style={styles.button}
                                        onTouchTap={this.changeTabsSelect}>changeTabsSelect</Button>
                            </div>
                        </Tab>
                        <Tab label="品专">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#009688'})}>world3</div>
                        </Tab>
                        <Tab label="大竞价" badgeContent="99+">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#FFEB3B'})}>world4</div>
                        </Tab>
                        <Tab label="信息流" badgeContent="new">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#9E9E9E'})}>world5</div>
                        </Tab>
                        <Tab label="晨星" badgeContent="">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#2196F3'})}>world6</div>
                        </Tab>
                        <Tab label="品专">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#009688'})}>world7</div>
                        </Tab>
                        <Tab label="大竞价">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#FFEB3B'})}>world8</div>
                        </Tab>
                        <Tab label="信息流">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#9E9E9E'})}>world9</div>
                        </Tab>
                    </Tabs>
                </TabBarItem>
                <TabBarItem label="设置" icon={<Icon type="cog" size="2x"/>}>
                    <Tabs selectedIndex={this.state.selectIndex} onChangeIndex={this.onTabChange} animation={true}>
                        <Tab label="旭日">
                            <div style={styles.tab}>world1</div>
                        </Tab>
                        <Tab label="晨星">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#2196F3'})}>world2</div>
                        </Tab>
                        <Tab label="CRM">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#2196F3'})}>world2</div>
                        </Tab>
                    </Tabs>
                </TabBarItem>
                <TabBarItem label="我的" icon={<Icon type="user" size="2x"/>}
                            badgeContent={<span>&sdot;&sdot;&sdot;</span>}>
                    <Tabs selectedIndex={this.state.selectIndex} onChangeIndex={this.onTabChange} animation={true}>
                        <Tab label="旭日">
                            <div style={styles.tab}>world1</div>
                        </Tab>
                        <Tab label="晨星星星星星星">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#2196F3'})}>world2</div>
                        </Tab>
                    </Tabs>
                </TabBarItem>
                <TabBarItem label="我的" icon={<Icon type="user" size="2x"/>} badgeContent="">
                    <Tabs selectedIndex={this.state.selectIndex} onChangeIndex={this.onTabChange} animation={true}>
                        <Tab label="旭日">
                            <div style={styles.tab}>world1</div>
                        </Tab>
                        <Tab label="晨星星星星星星">
                            <div style={objectAssign({}, styles.tab, {backgroundColor: '#2196F3'})}>world2</div>
                        </Tab>
                    </Tabs>
                </TabBarItem>
            </TabBar>
        );
    }
}

