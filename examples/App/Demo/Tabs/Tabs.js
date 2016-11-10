import * as React from 'react';
import * as classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
export default class Tabs extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { selectedIndex: 0 };
        this.handleChange = (index, e) => {
            const fromIndex = this.state.selectedIndex;
            this.props.onChangeIndex(index, fromIndex);
            if (index !== fromIndex) {
                this.setState({ selectedIndex: index });
            }
        };
        this.swipeableViewsChange = (index, fromIndex) => {
            this.props.onChangeIndex(index, fromIndex);
            this.setState({ selectedIndex: index });
        };
    }
    componentWillMount() {
        const initialIndex = this.props.selectedIndex;
        this.setState({
            selectedIndex: initialIndex < this.getTabCount() ? initialIndex : 0,
        });
    }
    componentWillReceiveProps(newProps) {
        if (newProps.selectedIndex !== this.state.selectedIndex) {
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
            [`${prefixCls}-content-hidden`]: index !== this.state.selectedIndex && !this.props.animation
        });
        if (tab.props.children) {
            return (React.createElement("div", {className: contentClass, key: index}, tab.props.children));
        }
        else {
            return null;
        }
    }
    render() {
        const { prefixCls, className, animation, animateTransitions, tabsPosition, style } = this.props;
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
                handleChange: this.handleChange
            });
        });
        const tabsContainer = React.createElement("div", {className: `${prefixCls}-container`}, tabs);
        return (React.createElement("div", {className: tabsClass, style: style}, tabsPosition === 'bottom' ? null : tabsContainer, React.createElement("div", {className: `${prefixCls}-content-container`}, animation ?
            React.createElement(SwipeableViews, {index: this.state.selectedIndex, onChangeIndex: this.swipeableViewsChange, animateTransitions: animateTransitions}, contents) : { contents }), tabsPosition === 'bottom' ? tabsContainer : null));
    }
}
Tabs.defaultProps = {
    selectedIndex: 0,
    prefixCls: 'biz-tabs',
    className: '',
    onChangeIndex: () => { },
    onTabTouchTap: () => { },
    animation: true,
    animateTransitions: true,
    tabsPosition: 'top',
};
