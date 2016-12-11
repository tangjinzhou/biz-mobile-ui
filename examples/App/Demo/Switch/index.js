import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Switch, colors} from '@bizfe/biz-mobile-ui';

export default class SwitchDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        }
    }
    commonFunc = (checked) => {
        console.log(checked)
    }
    changeChecked = (checked) => {
        this.setState({checked: checked})
    }
    render() {
        return (
            <div style={{padding: px2rem(20)}}>
                <Switch style={{marginTop: px2rem(10)}} onChange={this.commonFunc}/>
                <br/>
                <Switch style={{marginTop: px2rem(10)}} defaultChecked onChange={this.commonFunc}/>
                <br/>
                <Switch style={{marginTop: px2rem(10)}} checked={this.state.checked} onChange={this.changeChecked}/>
                <br/>
                <Switch style={{marginTop: px2rem(10)}} disabled onChange={this.commonFunc}/>
                <br/>
                <Switch style={{marginTop: px2rem(10)}} defaultChecked disabled onChange={this.commonFunc}/>
            </div>
        );
    }
}

