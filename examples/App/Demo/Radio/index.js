import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {RadioGroup,Radio, Ellipsis, colors} from '@bizfe/biz-mobile-ui';

export default class RadioDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    commonFunc = (...args) => {
        console.log(args);
    }
    render() {
        return (
            <div style={{padding: px2rem(20)}}>
                <RadioGroup name="productType" defaultValueSelected="2" onChange={this.commonFunc}>
                    <Radio label="展示数" value="1"/>
                    <Radio label="访问数" value="2"/>
                    <Radio label="转化数" value="3" disabled/>
                </RadioGroup>
            </div>
        );
    }
}

