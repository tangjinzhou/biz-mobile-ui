import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Checkbox,Ellipsis, colors} from '@bizfe/biz-mobile-ui';

export default class CheckboxDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    commonFunc = (...args) => {
        console.log(args);
    }
    render() {
        return (
            <div style={{padding: px2rem(20)}}>
                <div style={{marginTop: px2rem(10)}}>
                    <Checkbox label={'展示数'} defaultChecked disabled/>
                    <Checkbox label={'访问数'}/>
                    <Checkbox label={'转化数'}/>
                </div>
                <div style={{marginTop: px2rem(10)}}>
                    <Checkbox
                        label={'同行平均每次推广点击价格'}
                        onChange={this.commonFunc}
                        value="1"/>
                    <Checkbox
                        label={<Ellipsis width={px2rem(150)} line={1} text="同行平均每次推广点击价格"/>}
                        defaultChecked
                        onChange={this.commonFunc}
                        labelPosition="left"
                        value="1"/>
                </div>
            </div>
        );
    }
}

