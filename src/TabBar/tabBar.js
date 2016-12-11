"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var TabBar = (function (_super) {
    __extends(TabBar, _super);
    function TabBar() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = { selectedIndex: this.props.defaultIndex };
        this.handleChange = function (index, e) {
            var fromIndex = _this.state.selectedIndex;
            var _a = _this.props, onChangeIndex = _a.onChangeIndex, selectedIndex = _a.selectedIndex;
            if (index !== fromIndex) {
                onChangeIndex(index, fromIndex);
                typeof selectedIndex !== 'number' && _this.setState({ selectedIndex: index });
            }
        };
    }
    TabBar.prototype.componentWillMount = function () {
        this.updateState(this.props.selectedIndex);
    };
    TabBar.prototype.componentWillReceiveProps = function (newProps) {
        this.updateState(newProps.selectedIndex);
    };
    TabBar.prototype.updateState = function (selectedIndex) {
        if (typeof selectedIndex === 'number' && selectedIndex !== this.state.selectedIndex) {
            this.setState({
                selectedIndex: selectedIndex
            });
        }
    };
    TabBar.prototype.getTabCount = function () {
        return this.getTabs().length;
    };
    TabBar.prototype.getTabs = function () {
        var tabs = [];
        React.Children.forEach(this.props.children, function (tab) {
            if (React.isValidElement(tab)) {
                tabs.push(tab);
            }
        });
        return tabs;
    };
    TabBar.prototype.getContent = function (tab, index, prefixCls) {
        var contentClass = classNames((_a = {},
            _a[prefixCls + "-content"] = true,
            _a[prefixCls + "-content-hidden"] = index !== this.state.selectedIndex,
            _a
        ));
        if (tab.props.children) {
            return (React.createElement("div", {className: contentClass, key: index}, tab.props.children));
        }
        else {
            return null;
        }
        var _a;
    };
    TabBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, prefixCls = _a.prefixCls, className = _a.className, onChangeIndex = _a.onChangeIndex, style = _a.style;
        var tabsClass = classNames((_b = {},
            _b["" + prefixCls] = true,
            _b[className] = true,
            _b
        ));
        var contents = [];
        var tabs = this.getTabs().map(function (tab, index) {
            contents.push(_this.getContent(tab, index, prefixCls));
            return React.cloneElement(tab, {
                key: index,
                index: index,
                selected: _this.state.selectedIndex === index,
                handleChange: _this.handleChange
            });
        });
        var tabsContainer = React.createElement("div", {className: prefixCls + "-container"}, tabs);
        return (React.createElement("div", {className: tabsClass, style: style}, React.createElement("div", {className: prefixCls + "-content-container"}, contents), React.createElement("div", {className: prefixCls + "-container"}, tabs)));
        var _b;
    };
    TabBar.defaultProps = {
        defaultIndex: 0,
        prefixCls: 'biz-tabBar',
        className: '',
        onChangeIndex: function () { },
        onTabTouchTap: function () { },
    };
    return TabBar;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabBar;
//# sourceMappingURL=TabBar.js.map