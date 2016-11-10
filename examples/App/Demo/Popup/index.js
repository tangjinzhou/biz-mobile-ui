var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
class PopupDialog extends React.Component {
    render() {
        const { prefixCls, className, children, maskOnTouchTap, animationType, showMask, style, position } = this.props;
        const popupClass = classNames({
            [className]: true,
            [prefixCls]: true,
        });
        const wrapClass = classNames({
            [`${prefixCls}-wrap`]: true,
            [`${animationType}`]: true,
            [`${prefixCls}-wrap-bottom`]: position === 'bottom',
            [`${prefixCls}-wrap-top`]: position === 'top',
        });
        return (React.createElement("div", {className: popupClass, style: style}, showMask ? React.createElement("div", {className: ['body-mask', `${prefixCls}-mask`].join(' '), onTouchTap: maskOnTouchTap}) : null, React.createElement("div", {className: wrapClass}, children)));
    }
}
PopupDialog.defaultProps = {
    prefixCls: 'biz-popup',
    className: '',
    maskOnTouchTap: () => { },
    showMask: true,
    position: 'top',
};
function createPopup(content, options) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    const wrapOutClass = {
        'slideInDown': ' slideOutUp',
        'slideInUp': ' slideOutDown',
        'fadeIn': ' fadeOut',
    };
    const prefixCls = options.prefixCls || 'biz-popup';
    function close() {
        if (div) {
            const wrapOutDiv = div.getElementsByClassName(prefixCls + '-wrap')[0];
            wrapOutDiv.className = wrapOutDiv.className + wrapOutClass[options.animationType];
            div.getElementsByClassName(prefixCls + '-mask')[0].remove();
            setTimeout(function () {
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                div = null;
            }, 300);
        }
    }
    options.maskOnTouchTap = options.maskOnTouchTap || close;
    ReactDOM.render(React.createElement(PopupDialog, __assign({}, options), content), div);
    return {
        close: close
    };
}
export default class Popup {
}
Popup.show = (content, options) => {
    options = options || {};
    options.position = options.position || 'top';
    if (!options.animationType) {
        options.animationType = options.position === 'top' ? 'slideInDown' : 'slideInUp';
    }
    return createPopup(content, options);
};
;
