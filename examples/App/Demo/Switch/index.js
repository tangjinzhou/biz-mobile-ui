var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import * as classNames from 'classnames';
export default class Switch extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { checked: this.props.checked };
    }
    componentWillReceiveProps(newProps) {
        if (newProps.checked !== this.state.checked) {
            this.setState({
                checked: newProps.checked
            });
        }
    }
    touchTap() {
        if (!this.props.disabled) {
            const checked = !this.state.checked;
            this.setState({ checked: checked });
            this.props.onChange(checked);
        }
    }
    render() {
        const { prefixCls, className, style, name, disabled, onChange } = this.props;
        const switchClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const inputDisabled = disabled ? { disabled: 'disabled' } : '';
        return (React.createElement("label", {style: style, className: switchClass}, React.createElement("input", __assign({onTouchTap: () => this.touchTap(), className: `${prefixCls}-checkbox`, type: "checkbox", checked: this.state.checked, name: name}, inputDisabled, {onChange: () => { }})), React.createElement("div", {className: `${prefixCls}-btn`})));
    }
}
Switch.defaultProps = {
    prefixCls: 'biz-switch',
    className: '',
    disabled: false,
    checked: true,
    onChange: () => {
    },
};
