import * as React from 'react';
import * as classNames from 'classnames';
interface BadgeProps extends BizuiProps {
    content?: string | React.ReactNode,
}

export default class Badge extends React.Component<BadgeProps, any> {
    static defaultProps = {
        prefixCls: 'biz-badge',
        className: '',
        content: '',
    }

    render() {
        const {prefixCls, className, content, style} = this.props;
        const badgeClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
            [`${prefixCls}-dot`]: content === '',
        });
        const contentClass = classNames({
            [`${prefixCls}-content`]: true,
            [`${prefixCls}-dot`]: content === '',
        })
        
        return (
            <span className={badgeClass} style={style}>
                {content}
            </span>
        )
    }
}