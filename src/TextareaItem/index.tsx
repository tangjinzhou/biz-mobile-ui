import * as React from 'react';
import * as classNames from 'classnames';
import Icon from '../Icon';
interface TextareaProps extends BizuiProps {
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
    error?: boolean,
    onErrorTap?: Function,
    labelWidth?: string,
    onTouchTap?: Function,
    defaultValue?: String,
    rows?: number,
    autoHeight?: boolean,
    maxHeight?: string,
    minHeight?: string,
    showCount?: boolean
}

const styles = {
    shadow: {
        visibility: 'hidden',
        position: 'absolute',
        height: 'initial',
    }
}

export default class TextareaItem extends React.Component<TextareaProps, any>{
    static defaultProps = {
        prefixCls: 'biz-textarea',
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
        defaultValue: '',
        rows: 1,
        maxHeight: 'none',
        minHeight: 'none',
        autoHeight: false,
        showCount: false,
    }
    state = {
        value: '',
        showClear: false,
        height: 'auto'
    }
    _textarea = null
    _shadow = null
    isFocus = false
    componentWillMount(){

    }
    componentDidMount() {
        const {value, defaultValue} = this.props;
        const val = value === undefined ? defaultValue : value;
        this.updateState(val as string);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.value !== undefined && newProps.value !== this.state.value) {
            this.updateState(newProps.value);
        }
    }
    getHeight(value){
        this._shadow.value = value
        return this._shadow.scrollHeight
    }
    updateState(val = ''){
        const {clear, autoHeight, max} = this.props;
        if(typeof max === 'number'){
            val = val.slice(0, max || 0);
        }
        const state = {value: val, showClear: this.isFocus && clear && val.length > 0, height: 'auto'}
        if(autoHeight) {
            const height = this.getHeight(val);
            state.height = height;
        }
        this.setState(state);
    }
    onChange = (e) => {
        const val = e.target.value;
        const {clear, onChange, value} = this.props;
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
    clearValue = () => {
        this.updateState();
    }
    onTouchTap=(e)=>{
        const {disabled, onTouchTap} = this.props;
        onTouchTap && onTouchTap();
    }
    render(){
        const {prefixCls, className, type, label, rows, error, name, placeholder, onErrorTap, max,showCount, labelWidth,minHeight, maxHeight, disabled, clear} = this.props;
        const textareaItemClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
            [`${prefixCls}-disabled`]: disabled
        });
        const {height, value, showClear} = this.state;
        const textareaDisabled = disabled ? {disabled: 'disabled'} : '';
        return(
            <div className={textareaItemClass}>
                <div className={`${prefixCls}-label`} style={{width: labelWidth}}>{label}</div>
                <div className={`${prefixCls}-val`}>
                    <textarea
                        style={styles.shadow}
                        ref={(c) => this._shadow = c}
                        defaultValue={this.props.defaultValue}
                        readOnly={true}
                        onChange={()=>{}}
                        rows={1}
                    />
                    <textarea
                        style={{height: height, maxHeight: maxHeight, minHeight: minHeight}}
                        onTouchTap={this.onTouchTap}
                        placeholder={placeholder}
                        ref={(c) => this._textarea = c}
                        type={type}
                        value={value}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        name={name}
                        rows={rows}
                        {...textareaDisabled}
                    />
                    {showCount? <span className={`${prefixCls}-count`}>
                        {value.length}/{max}
                    </span> : null}
                </div>
                {clear ? <div className={`${prefixCls}-clear`} style={{visibility: showClear?'visible':'hidden'}} onTouchTap={this.clearValue}><Icon type="remove" fixedWidth={true}/></div> : null}
                {error ? <div className={`${prefixCls}-error`} onTouchTap={onErrorTap}><Icon type="exclamation" fixedWidth={true}/></div> : null}
            </div>
        )
    }
}