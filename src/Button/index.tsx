import * as classNames from 'classnames';
import * as React from 'react';
interface ButtonProps {
  prefixCls?: string,
  type?: string,
  onTouchTap?: (x?: any) => void;
  disabled?: boolean;
  className?: string;
  size?: 'small';
  style?: {},
}

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'biz-button',
    type: 'button',
    disabled: false,
    onTouchTap: () => { },
    className: '',
  };

  render() {
    const {prefixCls, className, size, type, disabled, onTouchTap, children, style} = this.props;
    const btnClass = classNames({
      [className]: true,
      [prefixCls]: true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-small`]: size === 'small',
    });
    return (
        <button style={style} className={btnClass} type={type} disabled={disabled} onTouchTap={onTouchTap} >{children}</button>
    );
  }
}