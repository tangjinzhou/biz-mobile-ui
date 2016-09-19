import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

interface MessageProps {

}

class Message extends React.Component<MessageProps, any> {
    static defaultProps = {

    }

    render(){
        return(
            <div></div>
        )
    }
}
function createMessage(config, type) {
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
    ReactDOM.render(<Message defaultValue={config.defaultValue} type={type} title={config.title} message={config.message} />, div);
    return {
        close: close
    }
}
interface MessageConfigProps{

}
let instance = null;
export default class Alert {
    static info = (config?: MessageConfigProps) => {
        instance = createMessage(config || {}, 'info');
    }
    static loading = (config?: MessageConfigProps) => {
        instance = createMessage(config || {}, 'loading');
    }
    static close = () => {
        instance.close();
    }
};