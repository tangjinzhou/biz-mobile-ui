import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '../Icon';
import * as classNames from 'classnames';

interface PopupDialogProps extends BizuiProps{
    content?: string | React.ReactNode,
    maskOnTouchTap?: Function,
    animationType: 'slideInDown' | 'slideInUp',
    showMask?: boolean,
    position: 'top' | 'bottom',
}
interface PopupProps {
    duration?: number,
    maskOnTouchTap?: Function,
    animationType?: 'slideInDown' | 'slideInUp' | 'fadeIn',
    position?: 'top' | 'bottom',
    showMask?: boolean,
    style?: Object,
    classNames?: string,
    prefixCls?: string,
}

class PopupDialog extends React.Component<PopupDialogProps, any> {
    static defaultProps = {
        prefixCls: 'biz-popup',
        className: '',
        maskOnTouchTap: ()=>{},
        showMask: true,
        position: 'top',
    }
    render(){
        const {prefixCls, className, children, maskOnTouchTap, animationType, showMask, style, position} = this.props;
        const popupClass = classNames({
            [className]: true,
            [prefixCls]: true,
        });
        const wrapClass = classNames({
            [`${prefixCls}-wrap`]: true,
            [`${animationType}`] : true,
            [`${prefixCls}-wrap-bottom`]: position === 'bottom',
            [`${prefixCls}-wrap-top`]: position === 'top',
        });
        return(
            <div className={popupClass} style={style}>
                {showMask ? <div className={['body-mask',`${prefixCls}-mask`].join(' ')} onTouchTap={maskOnTouchTap}></div> : null}
                <div className={wrapClass}>
                    {children}
                </div>
            </div>
        )
    }
}
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
            setTimeout(function(){
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                div = null;
            }, 300);
        }
    }
    options.maskOnTouchTap = options.maskOnTouchTap || close;
    ReactDOM.render(<PopupDialog {...options}>{content}</PopupDialog>, div);
    return {
        close: close
    }
}

export default class Popup {
    static show = (content?: string | React.ReactNode, options?: PopupProps) => {
        options = options || {};
        options.position = options.position || 'top';
        if(!options.animationType) {
            options.animationType = options.position === 'top' ? 'slideInDown' : 'slideInUp';
        }
        return createPopup(content, options);
    }
};