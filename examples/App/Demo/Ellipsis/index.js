import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Ellipsis, colors} from '@bizfe/biz-mobile-ui';

export default class EllipsisDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>单行省略号</h2>
                <Ellipsis line={1} text="BizMobile 为不同应用场景提供全方位的移动开发基础设施，涵盖 Web、iOS、Android 三大平台，涉及开发框架、UI 组件库、消息推送与热更新等后端公共服务。"/>
                <h2>多行省略号</h2>
                <Ellipsis width={'50%'} line={2} text="BizMobile 为不同应用场景提供全方位的移动开发基础设施，涵盖 Web、iOS、Android 三大平台，涉及开发框架、UI 组件库、消息推送与热更新等后端公共服务。"/>
            </div>
        );
    }
}

