import * as React from 'react';
import * as classNames from 'classnames';
export default class SegmentedControl extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { selectedIndex: this.props.selectedIndex };
        this.tabsCompontent = null;
        this.onTouchTap = (e, index, value) => {
            const { onChangeIndex, disabled } = this.props;
            const fromIndex = this.state.selectedIndex;
            if (disabled) {
                onChangeIndex(index, fromIndex);
                if (index !== fromIndex) {
                    this.setState({ selectedIndex: index });
                }
            }
        };
    }
    componentWillReceiveProps(newProps) {
        if (newProps.selectedIndex !== this.state.selectedIndex) {
            this.setState({
                selectedIndex: newProps.selectedIndex
            });
        }
    }
    render() {
        const { prefixCls, className, onChangeIndex, disabled, values, color, style } = this.props;
        const segmentedClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const selectedIndex = this.state.selectedIndex;
        const tabs = values.map((value, index) => {
            const tabCls = classNames({
                [`${prefixCls}-item`]: true,
                [`${prefixCls}-item-active`]: index === selectedIndex,
            });
            return (React.createElement("div", {className: tabCls, key: index, ref: (c) => this['_tab_' + index] = c, onTouchTap: (e) => this.onTouchTap(e, index, value), style: {
                color: index === selectedIndex ? '' : color,
                backgroundColor: index === selectedIndex ? color : '',
            }}, value));
        });
        this.tabsCompontent = tabs;
        const segmentedStyle = Object.assign({}, style, {
            opacity: disabled ? 0.5 : 1,
            borderColor: color,
        });
        return (React.createElement("div", {className: segmentedClass, style: segmentedStyle}, tabs));
    }
}
SegmentedControl.defaultProps = {
    prefixCls: 'biz-segmented',
    className: '',
    selectedIndex: 0,
    onChangeIndex: () => { },
    values: [],
    style: {},
    disabled: false,
};
