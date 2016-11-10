import * as React from 'react';
import * as classNames from 'classnames';
import objectAssign from 'object-assign';

interface CircleProgressProps extends BizuiProps{
    color?: string,
    fillColor?: string,
    max?: number,
    min?: number,
    value?: number,
    size?: string,
    strokeWidth?: number,
    linecap?: 'round' | 'butt',
    transitionDuration?: number,
}

export default class CircleProgress extends React.Component<CircleProgressProps, any> {
    static defaultProps = {
        prefixCls: 'biz-circleProgress',
        className: '',
        max: 100,
        min: 0,
        value: 0,
        strokeWidth: 10,
        linecap: 'butt',
        transitionDuration: 300,
    }
    render() {
        const {prefixCls, className, color, fillColor, style,min, max, value : val,linecap, size, strokeWidth, transitionDuration} = this.props;
        const circleClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const circleSize = {width: size, height: size};
        let value = val;
        value = value < min ? min : value;
        value = value > max ? max : value;
        const radius = 50 - strokeWidth;
        const circumference = Math.PI * 2 * radius;
        const progress =  circumference * value / (max - min);
        const strokeDasharray = progress + ',' + circumference;
        
        return(
            <div className={circleClass} style={objectAssign({}, style, circleSize)}>
                <svg className={`${prefixCls}-bg`} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r={radius} fill="none" style={{stroke: fillColor}}  strokeWidth={strokeWidth} strokeDashoffset="0"></circle>
                </svg>
                <svg className={`${prefixCls}-stripes`} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r={radius} fill="none" style={{stroke: color, transitionDuration: transitionDuration + 'ms'}} strokeLinecap={linecap} strokeWidth={strokeWidth} strokeDashoffset="0" strokeDasharray={strokeDasharray}></circle>
                </svg>
            </div>
        )
    }
}