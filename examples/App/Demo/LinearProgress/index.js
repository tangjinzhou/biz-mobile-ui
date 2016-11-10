import * as React from 'react';
import * as classNames from 'classnames';
export default class LinearProgress extends React.Component {
    render() {
        const { prefixCls, className, color, fillColor, mode, style, min, max, value: val, transitionDuration } = this.props;
        const linearClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const modeClass = classNames({
            [`${prefixCls}-indeterminate`]: mode === 'indeterminate',
            [`${prefixCls}-determinate`]: mode === 'determinate',
        });
        let value = val;
        value = value < min ? min : value;
        value = value > max ? max : value;
        const percent = value / (max - min) * 100 + '%';
        const modeStyle = {
            backgroundColor: color,
            width: mode === 'determinate' ? percent : '',
            transitionDuration: mode === 'determinate' ? transitionDuration + 'ms' : '',
        };
        return (React.createElement("div", {className: linearClass, style: Object.assign({}, style, { backgroundColor: fillColor })}, React.createElement("div", {className: modeClass, style: modeStyle})));
    }
}
LinearProgress.defaultProps = {
    prefixCls: 'biz-linearProgress',
    className: '',
    color: '',
    fillColor: '',
    max: 100,
    min: 0,
    mode: 'indeterminate',
    value: 0,
    transitionDuration: 300,
};
