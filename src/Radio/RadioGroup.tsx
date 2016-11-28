import * as React from 'react';
import * as classNames from 'classnames';
import Icon from '../Icon';

interface RadioGroupProps extends BizuiProps{
    name:string,
    valueSelected?: string,
    onChange?:(value)=>any,
    labelPosition? : 'left' | 'right',
    defaultValueSelected?: string,
}

export default class Radio extends React.Component<RadioGroupProps, any> {
    static defaultProps = {
        prefixCls: 'biz-radioGroup',
        className: '',
        labelPosition: 'right',
        onChange: ()=> {
        },
    }
    state = {valueSelected: this.props.defaultValueSelected};

    componentWillMount(){
        this.updateState(this.props.valueSelected)
    }

    componentWillReceiveProps(newProps) {
        this.updateState(newProps.valueSelected)
    }
    updateState(valueSelected) {
        if(valueSelected !== this.state.valueSelected && typeof valueSelected === 'string') {
            this.setState({
                valueSelected: valueSelected
            });
        }
    }
    getRadios() {
        const radios = [];
        React.Children.forEach(this.props.children, (radio) => {
            if (React.isValidElement(radio)) {
                radios.push(radio);
            }
        });
        return radios;
    }
    selectChange = (value) => {
        this.setState({
            valueSelected: value
        });
        this.props.onChange(value);
    }
    render() {
        const {name, onChange, labelPosition, prefixCls, className} = this.props;
        const valueSelected = this.state.valueSelected;
        const radios = this.getRadios().map((radio, index) => {
            return React.cloneElement(radio, {
                key: index,
                labelPosition: labelPosition,
                name: name,
                checked: valueSelected === radio.props.value,
                onChange: (value) => this.selectChange(value),
            });
        });
        const radioGroupClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        })
        return (
            <div className={radioGroupClass}>
                {radios}
            </div>
        );
    }
}