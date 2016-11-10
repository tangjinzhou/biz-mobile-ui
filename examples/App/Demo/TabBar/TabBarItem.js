import * as React from 'react';
import * as classNames from 'classnames';
import Badge from '../Badge';
export default class TabBarItem extends React.Component {
    render() {
        const { prefixCls, className, index, label, key, icon, selected, handleChange, badgeContent, style } = this.props;
        const tabClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-active`]: selected,
            [className]: true,
        });
        return (React.createElement("div", {className: tabClass, onTouchTap: (e) => handleChange(index, e), style: style}, icon, label, badgeContent !== null ? React.createElement(Badge, {className: `${prefixCls}-badge`, content: badgeContent}) : null));
    }
}
TabBarItem.defaultProps = {
    prefixCls: 'biz-tabBarItem',
    className: '',
    badgeContent: null,
};
