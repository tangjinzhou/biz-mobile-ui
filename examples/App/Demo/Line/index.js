import * as React from 'react';
import * as classNames from 'classnames';
export default class Line extends React.Component {
    render() {
        const { prefixCls, type, className, style } = this.props;
        const lineClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-${type}`]: true,
            [className]: true,
        });
        return (React.createElement("div", {className: lineClass, style: style}));
    }
}
Line.defaultProps = {
    prefixCls: 'biz-line',
    type: 'across',
    className: ''
};
