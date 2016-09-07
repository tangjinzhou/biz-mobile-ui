"use strict";
const React = require('react');
const classNames = require('classnames');
class TabBar extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { selectedIndex: 0 };
        this.handleTabTouchTap = (index, tab) => {
            this.handleChange(index, this.state.selectedIndex);
            this.props.onTabTouchTap(index, this.state.selectedIndex);
        };
        this.handleChange = (index, fromIndex) => {
            if (index !== fromIndex) {
                this.props.onChange(index, fromIndex);
                this.setState({ selectedIndex: index });
            }
        };
    }
    componentWillMount() {
        const initialIndex = this.props.selectedIndex;
        this.setState({
            selectedIndex: initialIndex < this.getTabCount() ? initialIndex : 0,
        });
    }
    componentWillReceiveProps(newProps) {
        if (newProps.selectedIndex !== undefined) {
            this.setState({
                selectedIndex: newProps.selectedIndex
            });
        }
    }
    getTabCount() {
        return this.getTabs().length;
    }
    getTabs() {
        const tabs = [];
        React.Children.forEach(this.props.children, (tab) => {
            if (React.isValidElement(tab)) {
                tabs.push(tab);
            }
        });
        return tabs;
    }
    getContent(tab, index, prefixCls) {
        const contentClass = classNames({
            [`${prefixCls}-content`]: true,
            [`${prefixCls}-content-hidden`]: index !== this.state.selectedIndex
        });
        if (tab.props.children) {
            return (React.createElement("div", {className: contentClass, key: index}, tab.props.children));
        }
        else {
            return null;
        }
    }
    render() {
        const { prefixCls, className, onChange } = this.props;
        const tabsClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const contents = [];
        const tabs = this.getTabs().map((tab, index) => {
            contents.push(this.getContent(tab, index, prefixCls));
            return React.cloneElement(tab, {
                key: index,
                index: index,
                selected: this.state.selectedIndex === index,
                handleTabTouchTap: this.handleTabTouchTap
            });
        });
        const tabsContainer = React.createElement("div", {className: `${prefixCls}-container`}, tabs);
        return (React.createElement("div", {className: tabsClass}, React.createElement("div", {className: `${prefixCls}-content-container`}, contents), React.createElement("div", {className: `${prefixCls}-container`}, tabs)));
    }
}
TabBar.defaultProps = {
    selectedIndex: 0,
    prefixCls: 'bm-tabBar',
    className: '',
    onChange: () => { },
    onTabTouchTap: () => { },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabBar;
//# sourceMappingURL=tabBar.js.map