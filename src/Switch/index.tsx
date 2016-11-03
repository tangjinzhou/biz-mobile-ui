import * as React from 'react';
import * as classNames from 'classnames';

interface SwitchProps extends BizuiProps {
    name?:string,
    disabled?:boolean,
    checked?:boolean,
    onChange?:(checked: boolean)=>void,
}

export default class Switch extends React.Component<SwitchProps, any> {
    static defaultProps = {
        prefixCls: 'biz-switch',
        className: '',
        disabled: false,
        checked: true,
        onChange: ()=> {
        },
    }
    state = {checked: this.props.checked};

    componentWillReceiveProps(newProps) {
        if(newProps.checked !== this.state.checked) {
            this.setState({
                checked: newProps.checked
            });
        }
    }

    touchTap() {
        if (!this.props.disabled) {
            const checked = !this.state.checked;
            this.setState({checked: checked});
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