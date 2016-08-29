import * as React from 'react';
import * as classNames from 'classnames';

interface TabBarPropType {
    prefixCls? : string;
    className? : string;
}
export default class TabBar extends React.Component<TabBarPropType, any> {
    static defaultProps = {
        prefixCls: 'bm-tabBar'
    };
    render() {
        const {prefixCls, className} = this.props;
        const tabBarClass = classNames({
            [`$prefixCls`]: true,
            [className]: true
        });
        return (
            <div className={tabBarClass}></div>
        )
    }
}