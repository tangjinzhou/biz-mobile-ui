import * as React from 'react';
import * as classNames from 'classnames';

type IconSize = "lg" | "2x" | "3x" | "4x" | "5x";
interface IconPropType extends BizuiProps{
    type: string,
    size?: IconSize,
    spin?: boolean,
    fixedWidth?: boolean,
    color?: string,
}

export default class Icon extends React.Component<IconPropType, any> {
    static defaultProps = {
        prefixCls: 'bizicon',
        className: '',
        spin: false,
        fixedWidth: false,
    };
    render() {
        const {prefixCls, type, className, size, spin, fixedWidth, style} = this.props;
        const iconClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-${type}`]: true,
            [`${prefixCls}-${size}`]: size === 'lg' || size === '2x' || size === '3x' || size === '4x' || size === '5x',
            [`${prefixCls}-spin`]: spin,
            [`${prefixCls}-fw`]: fixedWidth,
            [className]: true,
        })
        return (
            <i style={style} className={iconClass} aria-hidden="true"></i>
        );
    }
}

