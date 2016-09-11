import * as React from 'react';
import * as classNames from 'classnames';

interface LinearProgressProps {
    prefixCls?: string;
    className?: string;
    color?: string,
    fillColor?: string,
    mode?: 'determinate' | 'indeterminate',
    style?: {},
    percent?: number,
    transitionDuration?:number,
}

export default class LinearProgress extends React.Component<LinearProgressProps, any> {
    static defaultProps = {
        prefixCls: 'biz-linearProgress',
        className: '',
        color: '',
        fillColor: '',
        max: 100,
        min: 0,
        mode: 'indeterminate',
        style: {},
        value: 0,
        percent: 0,
    }
    render() {
        const {prefixCls, className, color, fillColor, mode, style, percent, transitionDuration} = this.props;
        const linearClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const modeClass = classNames({
            [`${prefixCls}-indeterminate`]: mode === 'indeterminate',
            [`${prefixCls}-determinate`]: mode === 'determinate',
        });
        const modeStyle = {
            backgroundColor: color,
            width: mode === 'determinate' ? percent + '%' : '',
            transitionDuration: mode === 'determinate'? transitionDuration + 'ms' : '',
        };
        return(
            <div className={linearClass} style={Object.assign({}, style, {backgroundColor: fillColor})}>
                <div className={modeClass} style={modeStyle}></div>
            </div>
        )
    }
}