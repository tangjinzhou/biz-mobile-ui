import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Tabs,Tab,Icon, colors} from '@bizfe/biz-mobile-ui';

const styles = {
    container1: {
        height: px2rem(100),
        background: colors.orange_500,
    },
    container2: {
        height: px2rem(100),
        background: colors.green_500,
    },
    container3: {
        height: px2rem(200),
        background: colors.orange_500,
    },
}
export default class TabsDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    onTabChange = (...args) => {
        console.log(args);
    }
    render() {
        return (
            <div>
                <h2>无动画Tab</h2>
                <Tabs defaultIndex={0} onChangeIndex={this.onTabChange} animation={false}>
                    <Tab label="旭日">
                        <div style={styles.container1}></div>
                    </Tab>
                    <Tab label="晨星">
                        <div style={styles.container2}></div>
                    </Tab>
                </Tabs>
                <h2>有动画Tab</h2>
                <Tabs defaultIndex={4} onChangeIndex={this.onTabChange}>
                    <Tab label="旭日">
                        <div style={styles.container1}></div>
                    </Tab>
                    <Tab label="晨星">
                        <div style={styles.container2}></div>
                    </Tab>
                    <Tab label="品专">
                        <div style={styles.container1}></div>
                    </Tab>
                    <Tab label="大竞价" badgeContent="99+">
                        <div style={styles.container2}></div>
                    </Tab>
                    <Tab label="信息流" badgeContent="new">
                        <div style={styles.container1}></div>
                    </Tab>
                    <Tab label="晨星">
                        <div style={styles.container2}></div>
                    </Tab>
                    <Tab label="品专">
                        <div style={styles.container1}></div>
                    </Tab>
                    <Tab label="大竞价">
                        <div style={styles.container2}></div>
                    </Tab>
                    <Tab label="信息流">
                        <div style={styles.container1}></div>
                    </Tab>
                </Tabs>
                <h2>动画自适应高度</h2>
                <Tabs onChangeIndex={this.onTabChange} animateHeight={true}>
                    <Tab label="旭日">
                        <div style={styles.container2}></div>
                    </Tab>
                    <Tab label="晨星">
                        <div style={styles.container3}></div>
                    </Tab>
                </Tabs>
            </div>

        );
    }
}

