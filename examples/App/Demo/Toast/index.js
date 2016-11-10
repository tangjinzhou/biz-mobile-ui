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
import Icon from '../Icon';
import * as classNames from 'classnames';
class MessageDialog extends React.Component {
    render() {
        const prefixCls = 'biz-toast';
        const { type, content } = this.props;
        const wrapClass = classNames({
            [`${prefixCls}-wrap`]: true,
            [`${prefixCls}-info-wrap`]: type === 'info',
            ['fadeIn']: true,
        });
        const iconProp = {
            info: {
                type: 'info-circle',
                size: 'lg'
            },
            loading: {
                type: 'spinner',
                size: '3x',
                spin: true,
            },
            success: {
                type: 'check-circle-o',
                size: '3x',
            },
            error: {
                type: 'times-circle-o',
                size: '3x',
            }
        };
        return (React.createElement("div", {className: prefixCls}, React.createElement("div", {className: ['body-mask', `${prefixCls}-mask`].join(' ')}), React.createElement("div", {className: wrapClass}, React.createElement(Icon, __assign({}, iconProp[type])), React.createElement("div", {className: `${prefixCls}-content`}, type == 'info' ? React.createElement("span", null, " ") : null, content))));
    }
}
MessageDialog.defaultProps = {};
function createMessage(content, type, duration, onClose) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    duration = duration === undefined ? 1500 : duration;
    function close() {
        if (div) {
            if (onClose) {
                onClose();
            }
            div.className = 'fadeOut';
            const fadeInWrap = div.getElementsByClassName('fadeIn')[0];
            fadeInWrap.className = fadeInWrap.className + ' fadeOut';
            setTimeout(function () {
                document.body.style.overflow = '';
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                div = null;
            }, 300);
        }
    }
    document.body.style.overflow = 'hidden';
    ReactDOM.render(React.createElement(MessageDialog, {type: type, content: content}), div);
    if (duration !== 0) {
        setTimeout(function () {
            close();
        }, duration);
    }
    return {
        close: close
    };
}
export default class Toast {
}
Toast.show = (content, duration, onClose) => {
    return createMessage(content, 'info', duration, onClose);
};
Toast.info = (content, duration, onClose) => {
    return createMessage(content, 'info', duration, onClose);
};
Toast.loading = (content, duration, onClose) => {
    return createMessage(content, 'loading', duration, onClose);
};
Toast.success = (content, duration, onClose) => {
    return createMessage(content, 'success', duration, onClose);
};
Toast.error = (content, duration, onClose) => {
    return createMessage(content, 'error', duration, onClose);
};
;
