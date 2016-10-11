import * as React from 'react';
import * as classNames from 'classnames';
import Icon from '../Icon';

interface CheckboxProps extends BizuiProps{
    name?:string,
    disabled?:boolean,
    checked?:boolean,
    onChange?:(boolean, Event?)=>any,
    label?: string | React.ReactNode,
    labelPosition? : 'left' | 'right',
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
    static defaultProps = {
        prefixCls: 'biz-checkbox',
        className: '',
        name: '',
        disabled: false,
        checked: false,
        onChange: ()=> {
        },
        label: '',
        labelPosition: 'right',
    }
    state = {checked: this.props.checked};

    componentWillReceiveProps(newProps) {
        if(newProps.checked !== this.state.checked) {
            this.setState({
                checked: newProps.checked
            });
        }
    }

    touchTap(e) {
        if (!this.props.disabled) {
            const checked = !this.state.checked;
            this.setState({checked: checked});
            this.props.onChange(checked, e);
        }
    }

    render() {
        const {prefixCls, className, style, name, disabled, onChange, label} = this.props;
        const checkboxClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
            [`${prefixCls}-disabled`]: disabled,
        })
        const inputDisabled = disabled ? {disabled: 'disabled'} : '';
        const iconType = this.state.checked ? 'check-square': 'square-o';
        return (
            <div style={style} className={checkboxClass} onTouchTap={(e)=>this.touchTap(e)}>
                <input
                    style={{display: 'none'}}
                    className={`${prefixCls}-checkbox`}
                    type="checkbox"
                    checked={this.state.checked}
                    name={name}
                    {...inputDisabled}
                    onChange={()=>{}}
                />
                <Icon type={iconType}/>
                <div className={`${prefixCls}-label`}>{label}</div>
            </div>
        );
    }
}