import * as React from 'react';
import * as classNames from 'classnames';

interface EllipsisProps extends BizuiProps{
    line?: number,
    text?: string,
    width?: string,
}

export default class Ellipsis extends React.Component<EllipsisProps, any> {
    static defaultProps = {
        prefixCls: 'biz-ellipsis',
        line: 1,
        className: '',
        text: '',
    }
    render(){
        const {prefixCls, className, style, line, text, width} = this.props;
        const ellipsisClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        })
        return(
            <div className={ellipsisClass} style={Object.assign({},style,{display: '-webkit-box', WebkitLineClamp: line, width: width})}>
                {text}
            </div>
        )
    }
}