import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {SegmentedControl, colors} from '@bizfe/biz-mobile-ui';

export default class SegmentedDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    commonFunc = (...args) => {
        console.log(args);
    }
    changeIndex = (index) => {
        this.setState({index: index})
    }
    render() {
        const seg = {
            width: '90%',
            margin: '20px auto 0',
        }
        return (
            <div style={{padding: px2rem(20)}}>
                <SegmentedControl onChangeIndex={this.commonFunc} style={seg}
                                  values={['详情','评论','相关']}/>
                <SegmentedControl onChangeIndex={this.commonFunc} defaultIndex={1} color='#8E24AA'
                                  style={seg} values={['详情','评论','相关']}/>
                <SegmentedControl onChangeIndex={this.changeIndex} selectedIndex={this.state.index} color='#8E24AA'
                                  style={seg} values={['详情','评论','相关']}/>
                <SegmentedControl onChangeIndex={this.commonFunc}
                                  style={Object.assign({},seg, {width: '80%', height: px2rem(40)})}
                                  values={['详情','评论']} disabled={true}/>
            </div>
        );
    }
}

