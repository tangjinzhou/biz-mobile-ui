import * as classNames from 'classnames';
import * as React from 'react';
interface ButtonProps {
  prefixCls?: string,
  type?: string,
  onClick?: (x: any) => void;
  disabled?: boolean;
  className?: string;
  size?: string;
}

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    prefixCls: 'bm-button',
    type: 'button',
    disabled: false,
    onClick: () => { },
    className: '',
  };

  render() {
    const {prefixCls, className, size, type, disabled, onClick, children} = this.props;
    const btnClass = classNames({
      [className]: true,
      [prefixCls]: true,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-small`]: size === 'small',
    });
    return (
        <button className={btnClass} type={type} disabled={disabled} onClick={onClick} >{children}</button>
    );
  }
}