import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Card, colors} from '@bizfe/biz-mobile-ui';

export default class CardDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card style={{marginTop: px2rem(10)}}>
                    BizMobile 为不同应用场景提供全方位的移动开发基础设施，涵盖 Web、iOS、Android 三大平台，涉及开发框架、UI 组件库、消息推送与热更新等后端公共服务。
                </Card>
                <Card style={{marginTop: px2rem(10)}} full={true}>
                    基于 React 的 H5 开发框架，提供配套的 UI 组件库和脚手架工具，助力快速构建 H5 应用。
                </Card>
                <Card style={{marginTop: px2rem(10)}} full={true}>
                    提供制作与发布 H5 动画页面的工具，把精彩的专题活动快速分享到各大社交平台。
                </Card>
                <Card style={{marginTop: px2rem(10)}} full={true}>
                    提供稳定、可靠的消息推送、版本检查、反馈收集、热更新等服务，并配有完善的数据统计功能。
                </Card>
            </div>
        );
    }
}

