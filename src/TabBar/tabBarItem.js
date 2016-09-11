"use strict";
const React = require('react');
const classNames = require('classnames');
class TabBarItem extends React.Component {
    render() {
        const { prefixCls, className, index, label, key, icon, selected, handleChange } = this.props;
        const tabClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-active`]: selected,
            [className]: true,
        });
        return (React.createElement("div", {className: tabClass, onTouchTap: (e) => handleChange(index, e)}, icon, label));
    }
}
TabBarItem.defaultProps = {
    prefixCls: 'biz-tabBarItem',
    className: '',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabBarItem;
//# sourceMappingURL=tabBarItem.js.map