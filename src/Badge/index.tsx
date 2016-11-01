import * as React from 'react';
import * as classNames from 'classnames';
interface BadgeProps extends BizuiProps {
    content?: any,
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
        });
        const contentClass = classNames({
            [`${prefixCls}-content`]: true,
            [`${prefixCls}-dot`]: content === '',
        })
        return (
            <div className={badgeClass} style={style}>
                {content !== null ? <span className={contentClass}>{content}</span> : null}
            </div>
        )
    }
}