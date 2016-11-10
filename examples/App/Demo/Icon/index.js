import * as React from 'react';
import * as classNames from 'classnames';
export default class Icon extends React.Component {
    render() {
        const { prefixCls, type, className, size, spin, fixedWidth, style, color } = this.props;
        const iconClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-${type}`]: true,
            [`${prefixCls}-${size}`]: size === 'lg' || size === '2x' || size === '3x' || size === '4x' || size === '5x',
            [`${prefixCls}-spin`]: spin,
            [`${prefixCls}-fw`]: fixedWidth,
            [className]: true,
        });
        return (React.createElement("i", {style: Object.assign({}, style, { color: color }), className: iconClass, "aria-hidden": "true"}));
    }
}
Icon.defaultProps = {
    prefixCls: 'biz-icon',
    className: '',
    spin: false,
    fixedWidth: false,
};
