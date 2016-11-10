import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ButtonProps {
    text: string;
    className?: string;
    color?: string;
}

interface AlertConfigProps extends BizuiProps {
    title?: string,
    message?: string | React.ReactNode,
    buttons?: Array<ButtonProps>,
    onTouchTap?: (x?:number, y?: string) => any,
    defaultValue?: string,
    placeholder?: string,
}

interface AlertDialogProps extends BizuiProps {
    title?: string,
    message?: string | React.ReactNode,
    onTouchTap?: (x?: number, y?: string) => any,
    buttons?: Array<ButtonProps>,
    type: string,
    defaultValue?: string,
    placeholder?: string,
}

class AlertDialog extends React.Component<AlertDialogProps, any> {
    static defaultProps = {
        prefixCls: 'biz-alert',
        buttons: [{text: '确定'}],
        className: '',
    };
    _promptInput = null;
    componentDidMount() {
        this._promptInput && this._promptInput.focus();
    }
    onTouchTap = (index: number) => {
        if(this._promptInput) {
            this._promptInput.blur();
        }
        if(this.props.type === 'prompt') {
            const value = this._promptInput.value;
            this.props.onTouchTap(index, value);
        } else {
            this.props.onTouchTap(index);
        }
    }
    render() {
        const {prefixCls, title, message, buttons, className, onTouchTap, type, defaultValue, style, placeholder} = this.props;
        const alertClass = classNames({
            [className]: true,
            [prefixCls]: true,

        });
        const btnsClass = classNames({
            [`${prefixCls}-btns`]: true,
            [`${prefixCls}-btns-row`]: buttons.length === 2,
            [`${prefixCls}-btns-column`]: buttons.length !== 2,
        });

        return (
            <div className={alertClass} style={style}>
                <div className='body-mask'></div>
                <div className={`${prefixCls}-wrap`}>
                    <div className={`${prefixCls}-info`}>
                        {title !== '' ? <p className={`${prefixCls}-title`}>{title}</p> : null}
                        {message !== '' ? <p className={`${prefixCls}-message`}>{message}</p> : null}
                        {type === 'prompt' ? <input placeholder={placeholder} onTouchTap={()=>this._promptInput.focus()} ref={(c) => this._promptInput = c} className={`${prefixCls}-input`} type="text" defaultValue={defaultValue}/> : null}
                    </div>
                    <div className={btnsClass}>
                        {buttons.map((item, index) => {
                            const color = item.color;
                            let button = null;
                            if(item.color) {
                                button = <button style={{color: item.color}} key={index} className={`${prefixCls}-btn`} onTouchTap={()=>this.onTouchTap(index)}>{item.text}</button>;
                            } else {
                                button = <button key={index} className={`${prefixCls}-btn`} onTouchTap={()=>this.onTouchTap(index)}>{item.text}</button>;
                            }
                            return button;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

function createDialog(config, type) {
    let div = document.createElement('div');
    document.body.appendChild(div);

    let onTouchTap = config.onTouchTap || (() => {});
    function close() {
        if (div) {
            document.body.style.overflow = '';
            ReactDOM.unmountComponentAtNode(div);
            div.parentNode.removeChild(div);
            div = null;
        }
    }
    function cb(buttonIndex, confirmValue?:string) {
        onTouchTap(buttonIndex, confirmValue);
        close();
    }
    document.body.style.overflow = 'hidden';
    ReactDOM.render(<AlertDialog {...config} type={type} onTouchTap={cb}/>, div);
    return {close: close};
}

export default class Alert {
    static alert = (config?: AlertConfigProps) => {
        return createDialog(config || {}, 'alert');
    }

    static prompt = (config?: AlertConfigProps) => {
        return createDialog(config || {}, 'prompt');
    }
};

