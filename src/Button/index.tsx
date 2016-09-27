import * as classNames from 'classnames';
import * as React from 'react';
interface ButtonProps extends BizuiProps{
  type?: string,
  onTouchTap?: (x?: any) => void;
  disabled?: boolean;
  size?: 'small';
}

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'biz-button',
    type: 'button',
    disabled: false,
    onTouchTap: () => { },
    className: '',
  };
  onTouchTap(e){
    const {disabled, onTouchTap} = this.props;
    disabled || this.props.onTouchTap(e);
  }
  render() {
    const {prefixCls, className, size, type, disabled, children, style} = this.props;
    const btnClass = classNames({
      [className]: true,
      [prefixCls]: true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-small`]: size === 'small',
    });
    return (
        <button style={style} className={btnClass} type={type} disabled={disabled} onTouchTap={(e)=>this.onTouchTap(e)} >{children}</button>
    );
  }
}