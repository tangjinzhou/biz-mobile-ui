import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
let closeDialog = () => {};

interface ButtonProps {
    text: string;
    className?: string;
    color?: string;
}

interface AlertConfigProps {
    title?: string;
    message?: string;
    buttons?: Array<ButtonProps>;
    onClick?: (x?:number, y?: string) => any;
    defaultValue?: string;
}

interface AlertDialogProps {
    prefixCls?: string;
    title?: string;
    message?: string;
    className?: string;
    onClick?: (x?: number, y?: string) => any;
    buttons?: Array<ButtonProps>;
    type: string;
    defaultValue?: string;
}

class AlertDialog extends React.Component<AlertDialogProps, any> {
    static defaultProps = {
        prefixCls: 'bm-alert',
        buttons: [{text: '确定'}],
        className: '',
    };
    _confirmInput = null;
    onClick = (index) => {
        if(this.props.type === 'confirm') {
            const value = this._confirmInput.value;
            this.props.onClick(index, value);
        } else {
            this.props.onClick(index);
        }
    }
    render() {

        const {prefixCls, title, message, buttons, className, onClick, type, defaultValue} = this.props;
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
            <div className={alertClass}>
                <div className={`${prefixCls}-mask`}></div>
                <div className={`${prefixCls}-wrap`}>
                    <div className={`${prefixCls}-info`}>
                        {title !== '' ? <p className={`${prefixCls}-title`}>{title}</p> : null}
                        {message !== '' ? <p className={`${prefixCls}-message`} dangerouslySetInnerHTML={{__html: message}}/> : null}
                        {type === 'confirm' ? <input ref={(c) => this._confirmInput = c} className={`${prefixCls}-input`} type="text" defaultValue={defaultValue}/> : null}
                    </div>
                    <div className={btnsClass}>
                        {buttons.map((item, index) => {
                            const color = item.color;
                            let button = null;
                            if(item.color) {
                                button = <button style={{color: item.color}} key={index} className={`${prefixCls}-btn`} onClick={()=>this.onClick(index)}>{item.text}</button>;
                            } else {
                                button = <button key={index} className={`${prefixCls}-btn`} onClick={()=>this.onClick(index)}>{item.text}</button>;
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

    let onClick = config.onClick || (() => {});
    function close() {
        if (div) {
            document.body.style.overflow = '';
            ReactDOM.unmountComponentAtNode(div);
            div.parentNode.removeChild(div);
            div = null;
        }
    }
    closeDialog = close;
    function cb(buttonIndex, confirmValue?:string) {
        onClick(buttonIndex, confirmValue);
        close();
    }
    document.body.style.overflow = 'hidden';
    ReactDOM.render(<AlertDialog defaultValue={config.defaultValue} type={type} onClick={cb} title={config.title} message={config.message} buttons={config.buttons}/>, div);
}

export default class Alert {
    static alert = (config?: AlertConfigProps) => {
        createDialog(config || {}, 'alert');
    }
    static confirm = (config?: AlertConfigProps) => {
        createDialog(config || {}, 'confirm');
    }
    static close = () => {
        closeDialog();
    }
};

