import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {
    Button,
    Alert,
    Icon,
    colors
} from '@bizfe/biz-mobile-ui';

const styles = {
    button: {
        marginTop: px2rem(10),
    },
    circle: {
        width: px2rem(60),
        height: px2rem(60),
        borderRadius: '50%',
    }
}
export default class ButtonDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: colors.red_500
        }
    }

    showAlertWithTwoBtn(index, value) {
        Alert.alert({title: '提示', message: value, buttons: [{text: '取消', color: 'grey'}, {text: '确定'}]});
    }

    showAlertWithThreeBtn() {
        Alert.alert({
            title: '更新提示',
            message:<span>修改若干bug<br/>快去更新!</span>,
            buttons: [{text: '取消'}, {text: '确定'}, {text: '吐槽', color: 'red'}]
        });
    }

    showAlertConfirm = () => {
        Alert.prompt({title: '请输入用户名', defaultValue: '老王', onTouchTap: this.showAlertWithTwoBtn});
    }
    changeColor = () => {
        this.setState({color: colors.green_500 === this.state.color ? colors.red_500 : colors.green_500})
    }
    render() {
        return (
            <div style={{padding: px2rem(10), textAlign: 'center'}}>
                <Button style={styles.button} onTouchTap={()=>this.showAlertWithTwoBtn(1,'确认添加账户?')}
                        size="small"><Icon fixedWidth={true}
                                           type="user-plus"/>showAlertWithTwoBtn</Button>
                <Button style={styles.button} disabled={true}
                        size="small">disabled</Button><br/>
                <Button style={Object.assign({},styles.button, styles.circle, {background: this.state.color})} onTouchTap={this.changeColor}>Start!</Button>
                <Button style={styles.button} onTouchTap={this.showAlertConfirm}>showAlertConfirm</Button>
            </div>
        );
    }
}

