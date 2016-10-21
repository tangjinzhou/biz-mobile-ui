import * as React from 'react';
import * as classNames from 'classnames';
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
    autoFocus?: boolean,
}

export default class InputItem extends React.Component<InputProps, any>{
    static defaultProps = {
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
        autoFocus: false,
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
        if(this.props.autoFocus) {
            this._input.focus();
        }
    }
    componentWillReceiveProps(newProps) {
        if (newProps.value !== this.state.value) {
            this.setState({
                value: newProps.value
            });
        }
    }
    onChange = (e) => {
        if(e.target.value !== this.state.value) {
            this.props.onChange(e.target.value);
            this.setState({value: e.target.value});
        }
    }
    onFocus = () => {
        const {clear, onFocus} = this.props;
        onFocus(this.state.value);
        this.setState({showClear: clear});
    }
    onBlur = () => {
        this.props.onBlur(this.state.value);
        this.setState({showClear: false});
    }
    clearValue() {
        this.setState({value: ''});
    }
    render(){
        const {prefixCls, className, type, label, extra, error, placeholder} = this.props;
        const inpueItemClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        })
        return(
            <div className={inpueItemClass}>
                <div className={`${prefixCls}-label`}>{label}</div>
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
                    />
                </div>
                {this.state.showClear ? <div className={`${prefixCls}-clear`} onTouchTap={this.clearValue}></div> : null}
                {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
                {error ? <div className={`${prefixCls}-error`}></div> : null}
            </div>
        )
    }
}