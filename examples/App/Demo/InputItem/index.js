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
export default class InputItem extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            value: '',
            showClear: false,
        };
        this._input = null;
        this.onChange = (e) => {
            const val = e.target.value;
            if (val !== this.state.value) {
                const { clear, onChange } = this.props;
                onChange(val);
                this.setState({ value: val, showClear: clear && val.length > 0 });
            }
        };
        this.onFocus = () => {
            const { clear, onFocus } = this.props;
            const val = this.state.value;
            onFocus(val);
            this.setState({ showClear: clear && val.length > 0 });
        };
        this.onBlur = () => {
            this.props.onBlur(this.state.value);
            this.setState({ showClear: false });
        };
        this.clearValue = () => {
            this.setState({ value: '', showClear: false });
        };
        this.onTouchTap = () => {
            const { disabled, onTouchTap } = this.props;
            if (!disabled) {
                this._input.focus();
            }
            onTouchTap && onTouchTap();
        };
    }
    componentWillMount() {
        this.setState({ value: this.props.value || '' });
    }
    componentDidMount() {
    }
    componentWillReceiveProps(newProps) {
        if (newProps.value !== this.state.value) {
            this.setState({
                value: newProps.value
            });
        }
    }
    render() {
        const { prefixCls, className, type, label, extra, error, name, placeholder, onErrorTap, labelWidth, disabled } = this.props;
        const inputItemClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const inputDisabled = disabled ? { disabled: 'disabled' } : '';
        return (React.createElement("div", {className: inputItemClass}, React.createElement("div", {className: `${prefixCls}-label`, style: { width: labelWidth }}, label), React.createElement("div", {className: `${prefixCls}-val`}, React.createElement("input", __assign({onTouchTap: this.onTouchTap, placeholder: placeholder, ref: (c) => this._input = c, type: type, value: this.state.value, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, name: name}, inputDisabled))), extra ? React.createElement("div", {className: `${prefixCls}-extra`}, extra) : null, this.state.showClear ? React.createElement("div", {className: `${prefixCls}-clear`, onTouchTap: this.clearValue}, React.createElement(Icon, {type: "remove", fixedWidth: true})) : null, error ? React.createElement("div", {className: `${prefixCls}-error`, onTouchTap: onErrorTap}, React.createElement(Icon, {type: "exclamation", fixedWidth: true})) : null));
    }
}
InputItem.defaultProps = {
    prefixCls: 'biz-input',
    className: '',
    label: '',
    type: 'text',
    value: '',
    placeholder: '',
    disabled: false,
    clear: true,
    onChange: () => { },
    onBlur: () => { },
    onFocus: () => { },
    error: false,
    onErrorTap: () => { },
};
