import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Badge, colors} from '@bizfe/biz-mobile-ui';

export default class BadgeDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{padding: px2rem(20)}}>
                <Badge content=""/>
                <Badge content="6"/>
                <Badge content="99"/>
                <Badge content="99+"/>
                <Badge content="new"/>
                <Badge content="hot"/>
                <Badge content="⋅⋅⋅"/>
            </div>
        );
    }
}

