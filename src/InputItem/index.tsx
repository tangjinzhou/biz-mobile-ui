import * as React from 'react';
import * as classNames from 'classnames';
import Icon from '../Icon';
interface InputProps extends BizuiProps {
    label?: string | React.ReactNode,
    type?: 'text' | 'tel' | 'number' | 'password',
    name?: string,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    clear?: boolean,
    max?: number,
    onChange?: Function,
    onBlur?: Function,
    onFocus?: Function,
    extra?: string | React.ReactNode,
    error?: boolean,
    onErrorTap?: Function,
    labelWidth?: string,
    onTouchTap?: Function,
    defaultValue?: string,
}

export default class InputItem extends React.Component<InputProps, any>{
    static defaultProps = {
        prefixCls: 'biz-input',
        className: '',
        label: '',
        type: 'text',
        placeholder: '',
        disabled: false,
        clear: true,
        onChange: ()=>{},
        onBlur: ()=>{},
        onFocus: ()=>{},
        error: false,
        onErrorTap: ()=>{},
        defaultValue: ''
    }
    state = {
        value: this.props.defaultValue,
        showClear: false,
    }
    _input = null
    isFocus = false
    componentWillMount(){
        const {value, defaultValue} = this.props;
        const val = value === undefined ? defaultValue : value;
        this.updateState(val as string);
    }
    componentDidMount() {

    }
    componentWillReceiveProps(newProps) {
        if (newProps.value !== undefined && newProps.value !== this.state.value) {
            this.updateState(newProps.value);
        }
    }
    updateState(val = ''){
        const {clear, max} = this.props;
        if(typeof max === 'number'){
            val = val.slice(0, max || 0);
        }
        this.setState({value: val, showClear: this.isFocus && clear && val.length > 0});
    }
    onChange = (e) => {
        let val = e.target.value;
        const {clear, onChange, value, max} = this.props;
        if(typeof max === 'number'){
            val = val.slice(0, max || 0);
        }
        if(value !== undefined) {
            onChange(val)
            return;
        }
        if(val !== this.state.value) {
            this.updateState(val);
            onChange(val)
        }
    }
    onFocus = () => {
        this.isFocus = true;
        const {clear, onFocus} = this.props;
        const val = this.state.value;
        onFocus(val);
        this.updateState(val);
    }
    onBlur = () => {
        this.isFocus = false
        const val = this.state.value
        this.props.onBlur(val);
        this.updateState(val);
    }
    clearValue = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(this.props.value !== undefined){
            this.updateState();
        }
        this.props.onChange('');
    }
    onTouchTap=()=>{
        const {disabled, onTouchTap} = this.props;
        onTouchTap && onTouchTap();
    }
    render(){
        const {prefixCls, className, type, label, extra, error, name, placeholder, onErrorTap, labelWidth, disabled, max} = this.props;
        const inputItemClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
            [`${prefixCls}-disabled`]: disabled
        });
        const inputDisabled = disabled ? {disabled: 'disabled'} : '';
        return(
            <div className={inputItemClass}>
                {label ?<div className={`${prefixCls}-label`} style={{width: labelWidth}}>{label}</div>: null}
                    <input
                        className={`${prefixCls}-val`}
                        onTouchTap={this.onTouchTap}
                        placeholder={placeholder}
                        ref={(c) => this._input = c}
                        type={type}
                        value={this.state.value}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        name={name}
                        max={max}
                        {...inputDisabled}
                    />
                {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
                {this.state.showClear ? <div className={`${prefixCls}-clear`} onTouchTap={this.clearValue}><Icon type="remove" fixedWidth={true}/></div> : null}
                {error ? <div className={`${prefixCls}-error`} onTouchTap={onErrorTap}><Icon type="exclamation" fixedWidth={true}/></div> : null}
            </div>
        )
    }
}