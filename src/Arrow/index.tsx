import * as React from 'react';
import * as classNames from 'classnames';
import colors from '../styles/colors';

interface ArrowProps extends BizuiProps {
    size?: string,
    direction?: 'top'|'bottom'|'left'|'right',
    color?: string,
    innerColor?: string,
    lineThickness?: string,
}
function getStyles(props) {
    return {
        outerLeft: {
            borderRightColor: props.color,
            borderLeft: 'none',
            borderWidth: props.size
        },
        innerLeft: {
            borderRightColor: props.innerColor,
            borderLeft: 'none',
            borderWidth: props.size,
            top: 0,
            left: props.lineThickness,
        },
        outerRight: {
            borderLeftColor: props.color,
            borderRight: 'none',
            borderWidth: props.size
        },
        innerRight: {
            borderLeftColor: props.innerColor,
            borderRight: 'none',
            borderWidth: props.size,
            top: 0,
            left: '-' + props.lineThickness,
        },
        outerTop: {
            borderBottomColor: props.color,
            borderTop: 'none',
            borderWidth: props.size
        },
        innerTop: {
            borderBottomColor: props.innerColor,
            borderTop: 'none',
            borderWidth: props.size,
            top: props.lineThickness,
            left: 0,
        },
        outerBottom: {
            borderTopColor: props.color,
            borderBottom: 'none',
            borderWidth: props.size
        },
        innerBottom: {
            borderTopColor: props.innerColor,
            borderBottom: 'none',
            borderWidth: props.size,
            top: '-' + props.lineThickness,
            left: 0,
        },
    };
}

export default class Arrow extends React.Component<ArrowProps, any>{
    static defaultProps = {
        prefixCls: 'biz-arrow',
        className: '',
        direction: 'top',
        color: colors.grey_900,
        innerColor: colors.grey_900,
        lineThickness: '2px'
    }
    render(){
        const {prefixCls, className, style, innerColor, direction, color} = this.props;
        const arrowClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const styles = getStyles(this.props);
        const directionMap = {
            left: 'Left',
            right: 'Right',
            top: 'Top',
            bottom: 'Bottom',
        };
        return (
            <span className={arrowClass} style={style}>
                <i className={`${prefixCls}-outer`} style={styles['outer'+directionMap[direction]]}></i>
                <i className={`${prefixCls}-inner`} style={styles['inner'+directionMap[direction]]}></i>
            </span>
        )
    }
}