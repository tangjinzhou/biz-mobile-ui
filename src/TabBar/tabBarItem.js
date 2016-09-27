"use strict";
const React = require('react');
const classNames = require('classnames');
const Badge_1 = require('../Badge');
class TabBarItem extends React.Component {
    render() {
        const { prefixCls, className, index, label, key, icon, selected, handleChange, badgeContent, style } = this.props;
        const tabClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-active`]: selected,
            [className]: true,
        });
        return (React.createElement("div", {className: tabClass, onTouchTap: (e) => handleChange(index, e), style: style}, icon, label, badgeContent !== null ? React.createElement(Badge_1.default, {className: `${prefixCls}-badge`, content: badgeContent}) : null));
    }
}
TabBarItem.defaultProps = {
    prefixCls: 'biz-tabBarItem',
    className: '',
    badgeContent: null,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabBarItem;
//# sourceMappingURL=tabBarItem.js.map