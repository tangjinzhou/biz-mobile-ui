import * as React from 'react';
import * as classNames from 'classnames';

interface CardProps {
    prefixCls?: string,
    full?: boolean,
    className?: string,
    style?: React.CSSProperties,
}
export default class Card extends React.Component<CardProps, any> {
    static defaultProps = {
        prefixCls: 'biz-card',
        full: false,
        className: '',
    };
    render(){
        const {prefixCls, className, full, children, style} = this.props;
        const cardClass = classNames({
           [`${prefixCls}`]: true,
            [className]: true,
            [`${prefixCls}-full`]: full,
        });
        return (
            <div className={cardClass} style={style}>
                {children}
            </div>
        )
    }
}