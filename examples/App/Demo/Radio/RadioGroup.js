import * as React from 'react';
import * as classNames from 'classnames';
export default class Radio extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { valueSelected: this.props.valueSelected };
        this.selectChange = (value) => {
            this.setState({
                valueSelected: value
            });
            this.props.onChange(value);
        };
    }
    componentWillReceiveProps(newProps) {
        if (newProps.valueSelected !== this.state.valueSelected) {
            this.setState({
                valueSelected: newProps.valueSelected
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
    render() {
        const { name, onChange, labelPosition, prefixCls, className } = this.props;
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
        });
        return (React.createElement("div", {className: radioGroupClass}, radios));
    }
}
Radio.defaultProps = {
    prefixCls: 'biz-radioGroup',
    className: '',
    labelPosition: 'right',
    onChange: () => {
    },
};
