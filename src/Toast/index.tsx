import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '../Icon';
import * as classNames from 'classnames';

interface MessageProps {
    type: string,
    content?: string | React.ReactNode,
}

class MessageDialog extends React.Component<MessageProps, any> {
    static defaultProps = {

    }

    render(){
        const prefixCls = 'biz-toast';
        const {type, content} = this.props;
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
        return(
            <div className={prefixCls}>
                <div className={['body-mask',`${prefixCls}-mask`].join(' ')}></div>
                <div className={wrapClass}>
                    <Icon {...iconProp[type]}></Icon>
                    <div className={`${prefixCls}-content`}>
                        {type == 'info'?<span>&nbsp;</span>:null}
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}
function createMessage(content, type, duration, onClose) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    duration = duration === undefined ? 1500 : duration;
    function close() {
        if (div) {
            if(onClose){
                onClose();
            }
            div.className = 'fadeOut';
            const fadeInWrap = div.getElementsByClassName('fadeIn')[0];
            fadeInWrap.className = fadeInWrap.className + ' fadeOut';
            setTimeout(function(){
                document.body.style.overflow = '';
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                div = null;
            }, 300);
        }
    }

    document.body.style.overflow = 'hidden';
    ReactDOM.render(<MessageDialog type={type} content={content}/>, div);
    if(duration !== 0) {
        setTimeout(function(){
            close();
        }, duration);
    }
    return {
        close: close
    }
}

export default class Toast {
    static show = (content: string | React.ReactNode, duration?: number, onClose?: () => void) => {
        return createMessage(content, 'info', duration, onClose);
    }
    static info = (content: string | React.ReactNode, duration?: number, onClose?: () => void) => {
        return createMessage(content, 'info', duration, onClose);
    }
    static loading = (content: string | React.ReactNode, duration?: number, onClose?: () => void) => {
        return createMessage(content, 'loading', duration, onClose);
    }
    static success = (content: string | React.ReactNode, duration?: number, onClose?: () => void) => {
        return createMessage(content, 'success', duration, onClose);
    }
    static error = (content: string | React.ReactNode, duration?: number, onClose?: () => void) => {
        return createMessage(content, 'error', duration, onClose);
    }
};