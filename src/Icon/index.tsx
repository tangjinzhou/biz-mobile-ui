import * as React from 'react';
import * as classNames from 'classnames';

type IconSize = "lg" | "2x" | "3x" | "4x" | "5x";
interface IconPropType {
    type: string;
    className?: string;
    size?: IconSize;
    spin?: boolean,
    fixedWidth?: boolean,
    color?: string
}

export default class Icon extends React.Component<IconPropType, any> {
    static defaultProps = {
        className: '',
        spin: false,
        fixedWidth: false,
    };
    render() {
        const { type, className, size, spin, fixedWidth } = this.props;
        const iconClass = classNames({
            ['bizicon']: true,
            [`bizicon-${type}`]: true,
            [`bizicon-${size}`]: size === 'lg' || size === '2x' || size === '3x' || size === '4x' || size === '5x',
            ['bizicon-spin']: spin,
            ['bizicon-fw']: fixedWidth,
            [className]: true,
        })
        return (
            <i className={iconClass} aria-hidden="true"></i>
        );
    }
}

