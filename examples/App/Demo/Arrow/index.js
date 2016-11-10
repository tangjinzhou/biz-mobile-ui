import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Arrow, colors} from '@bizfe/biz-mobile-ui';

export default class ArrowDemo extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div style={{padding: px2rem(20)}}>
                <Arrow direction="right"/>&nbsp;
                <Arrow direction="left"/>&nbsp;
                <Arrow direction="top"/>&nbsp;
                <Arrow direction="bottom"/>
                <br/><br/>
                <Arrow direction="right" color={colors.blue_500} innerColor="#fefefe"/>&nbsp;
                <Arrow direction="left" color={colors.blue_500} innerColor="#fefefe"/>&nbsp;
                <Arrow direction="top" color={colors.blue_500} innerColor="#fefefe"/>&nbsp;
                <Arrow direction="bottom" color={colors.blue_500} innerColor="#fefefe" size={px2rem(20)}
                       lineThickness={px2rem(4)}/>
                <br/><br/>
                <Arrow direction="bottom" color={colors.red_500} innerColor="#fefefe" size={px2rem(50)}
                       lineThickness={px2rem(4)}/>
            </div>
        );
    }
}

