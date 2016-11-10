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
import Icon from '../Icon';
export default class Radio extends React.Component {
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
    touchTap(e, value) {
        if (!this.props.disabled && !this.state.checked) {
            this.setState({ checked: true });
            this.props.onChange(value);
        }
    }
    render() {
        const { prefixCls, className, style, name, disabled, onChange, label, labelPosition, value } = this.props;
        const radioClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
            [`${prefixCls}-disabled`]: disabled,
        });
        const inputDisabled = disabled ? { disabled: 'disabled' } : '';
        const iconType = this.state.checked ? 'dot-circle-o' : 'circle-o';
        return (React.createElement("div", {style: style, className: radioClass, onTouchTap: (e) => this.touchTap(e, value)}, React.createElement("input", __assign({style: { display: 'none' }, className: `${prefixCls}-checkbox`, type: "radio", checked: this.state.checked, name: name}, inputDisabled, {onChange: () => { }, value: value})), labelPosition === 'right' ? React.createElement(Icon, {type: iconType}) : null, React.createElement("div", {className: `${prefixCls}-label`}, label), labelPosition === 'left' ? React.createElement(Icon, {type: iconType}) : null));
    }
}
Radio.defaultProps = {
    prefixCls: 'biz-radio',
    className: '',
    name: '',
    disabled: false,
    checked: false,
    onChange: () => {
    },
    label: '',
    labelPosition: 'right',
    value: '',
};
