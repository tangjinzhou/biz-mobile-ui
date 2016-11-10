"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var Badge_1 = require('../Badge');
var TabBarItem = (function (_super) {
    __extends(TabBarItem, _super);
    function TabBarItem() {
        _super.apply(this, arguments);
    }
    TabBarItem.prototype.render = function () {
        var _a = this.props, prefixCls = _a.prefixCls, className = _a.className, index = _a.index, label = _a.label, key = _a.key, icon = _a.icon, selected = _a.selected, handleChange = _a.handleChange, badgeContent = _a.badgeContent, style = _a.style;
        var tabClass = classNames((_b = {},
            _b["" + prefixCls] = true,
            _b[prefixCls + "-active"] = selected,
            _b[className] = true,
            _b
        ));
        return (React.createElement("div", {className: tabClass, onTouchTap: function (e) { return handleChange(index, e); }, style: style}, icon, label, badgeContent !== null ? React.createElement(Badge_1.default, {className: prefixCls + "-badge", content: badgeContent}) : null));
        var _b;
    };
    TabBarItem.defaultProps = {
        prefixCls: 'biz-tabBarItem',
        className: '',
        badgeContent: null,
    };
    return TabBarItem;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabBarItem;
//# sourceMappingURL=TabBarItem.js.map