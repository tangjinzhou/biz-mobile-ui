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
    maxLength?: number,
    onChange?: Function,
    onBlur?: Function,
    onFocus?: Function,
    extra?: string | React.ReactNode,
    error?: boolean,
    onErrorTap?: Function,
    labelWidth?: string,
}

export default class InputItem extends React.Component<InputProps, any>{
    static defaultProps = {
        prefixCls: 'biz-input',
        className: '',
        label: '',
        type: 'text',
        value: '',
        placeholder: '',
        disabled: false,
        clear: true,
        onChange: ()=>{},
        onBlur: ()=>{},
        onFocus: ()=>{},
        error: false,
        onErrorTap: ()=>{},
    }
    state = {
        value: '',
        showClear: false,
    }
    _input = null;
    componentWillMount(){
        this.setState({value: this.props.value || ''});
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
    onChange = (e) => {
        const val = e.target.value;
        if(val !== this.state.value) {
            const {clear, onChange} = this.props;
            onChange(val);
            this.setState({value: val, showClear: clear && val.length > 0});
        }
    }
    onFocus = () => {
        const {clear, onFocus} = this.props;
        const val = this.state.value;
        onFocus(val);
        this.setState({showClear: clear && val.length > 0});
    }
    onBlur = () => {
        this.props.onBlur(this.state.value);
        this.setState({showClear: false});
    }
    clearValue = () => {
        this.setState({value: '', showClear: false});
    }
    render(){
        const {prefixCls, className, type, label, extra, error, name, placeholder, onErrorTap, labelWidth} = this.props;
        const inputItemClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        })
        return(
            <div className={inputItemClass}>
                <div className={`${prefixCls}-label`} style={{width: labelWidth}}>{label}</div>
                <div className={`${prefixCls}-val`}>
                    <input
                        onTouchTap={()=>this._input.focus()}
                        placeholder={placeholder}
                        ref={(c) => this._input = c}
                        type={type}
                        value={this.state.value}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        name={name}
                    />
                </div>
                {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
                {this.state.showClear ? <div className={`${prefixCls}-clear`} onTouchTap={this.clearValue}><Icon type="remove" fixedWidth={true}/></div> : null}
                {error ? <div className={`${prefixCls}-error`} onTouchTap={onErrorTap}><Icon type="exclamation" fixedWidth={true}/></div> : null}
            </div>
        )
    }
}