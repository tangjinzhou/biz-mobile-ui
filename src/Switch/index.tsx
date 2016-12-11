import * as React from 'react';
import * as classNames from 'classnames';

interface SwitchProps extends BizuiProps {
    name?:string,
    disabled?:boolean,
    checked?:boolean,
    defaultChecked?: boolean
    onChange?:(checked: boolean)=>void,
}

export default class Switch extends React.Component<SwitchProps, any> {
    static defaultProps = {
        prefixCls: 'biz-switch',
        className: '',
        disabled: false,
        defaultChecked: false,
        onChange: ()=> {
        },
    }
    state = {checked: this.props.defaultChecked};

    componentWillMount(){
        this.updateState(this.props.checked)
    }

    componentWillReceiveProps(newProps) {
        this.updateState(newProps.checked)
    }
    updateState(checked) {
        if(checked !== this.state.checked && typeof checked === 'boolean') {
            this.setState({
                checked: checked
            });
        }
    }
    touchTap() {
        if (!this.props.disabled) {
            const checked = !this.state.checked;
            if(typeof this.props.checked !== 'boolean') {
                this.setState({checked: checked});
            }
            this.props.onChange(checked);
        }
    }

    render() {
        const {prefixCls, className, style, name, disabled, onChange} = this.props;
        const switchClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        })
        const inputDisabled = disabled ? {disabled: 'disabled'} : '';
        return (
            <label style={style} className={switchClass}>
                <input
                    onTouchTap={()=>this.touchTap()}
                    className={`${prefixCls}-checkbox`}
                    type="checkbox"
                    checked={this.state.checked}
                    name={name}
                    {...inputDisabled}
                    onChange={()=> {}}
                />
                <div className={`${prefixCls}-btn`}></div>
            </label>
        );
    }
}