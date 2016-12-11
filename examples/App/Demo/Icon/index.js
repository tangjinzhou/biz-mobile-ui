import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Icon, colors} from '@bizfe/biz-mobile-ui';

export default class IconDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{padding: px2rem(10)}}>
                <Icon type="home"></Icon>
                <Icon type="home" size="lg"></Icon>
                <Icon type="home" size="2x"></Icon>
                <Icon type="home" size="3x"></Icon>
                <Icon type="home" size="4x"></Icon>
                <Icon type="home" size="5x"></Icon>
                <br/>
                <Icon type="spinner" spin size="2x"></Icon>
                <br/>
                <Icon type="commenting"></Icon>
                <br/>
                <Icon type="heart" color={colors.red_500}></Icon>
            </div>
        );
    }
}

