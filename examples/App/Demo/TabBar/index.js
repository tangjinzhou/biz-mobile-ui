import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {TabBar,TabBarItem,Icon, colors} from '@bizfe/biz-mobile-ui';

export default class TabBarDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    onTabChange = (...args) => {
        console.log(args);
    }
    render() {
        return (
            <TabBar defaultIndex={0} onChangeIndex={this.onTabChange}>
                <TabBarItem label="首页" icon={<Icon type="home" size="2x"/>} badgeContent="21">
                    首页
                </TabBarItem>
                <TabBarItem label="设置" icon={<Icon type="cog" size="2x"/>} badgeContent="99+">
                    设置
                </TabBarItem>
                <TabBarItem label="我的" icon={<Icon type="user" size="2x"/>}
                            badgeContent='⋅⋅⋅'>
                    我的1
                </TabBarItem>
                <TabBarItem label="我的" icon={<Icon type="user" size="2x"/>} badgeContent="">
                    我的2
                </TabBarItem>
            </TabBar>
        );
    }
}

