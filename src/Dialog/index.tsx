import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

interface DialogComponentProps extends BizuiProps{
    content?: string | React.ReactNode,
    maskOnTouchTap?: Function,
    showMask?: boolean,
}


class DialogComponent extends React.Component<DialogComponentProps, any> {
    static defaultProps = {
        prefixCls: 'biz-dialog',
        className: '',
        maskOnTouchTap: ()=>{},
        showMask: true,
    }
    render(){
        const {prefixCls, className, children, maskOnTouchTap, showMask, style} = this.props;
        const dialogClass = classNames({
            [className]: true,
            [prefixCls]: true,
        });
        const wrapClass = classNames({
            [`${prefixCls}-wrap`]: true,
            ['fadeIn'] : true,
        });
        return(
            <div className={dialogClass} style={style}>
                {showMask ? <div className={['body-mask',`${prefixCls}-mask`].join(' ')} onTouchTap={maskOnTouchTap}></div> : null}
                <div className={wrapClass}>
                    {children}
                </div>
            </div>
        )
    }
}
interface DialogProps extends BizuiProps{
    maskOnTouchTap?: Function,
    showMask?: boolean,
    classNames?: string,
    open?: boolean,
}

export function createDialog(content?: string | React.ReactNode, options?: DialogProps) {
    options = options || {};
    let div = document.createElement('div');
    document.body.appendChild(div);
    const prefixCls = options.prefixCls || 'biz-dialog';
    function close(time) {
        time = time === undefined ? 300:0;
        if (div) {
            const wrapOutDiv = div.getElementsByClassName(prefixCls + '-wrap')[0];
            wrapOutDiv.className = wrapOutDiv.className + ' fadeOut';
            div.getElementsByClassName(prefixCls + '-mask')[0].remove();
            setTimeout(function(){
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                div = null;
            }, time);
        }
    }
    options.maskOnTouchTap = options.maskOnTouchTap || close;
    ReactDOM.render(<DialogComponent {...options}>{content}</DialogComponent>, div);
    return {
        close: close
    }
}

export default class Dialog extends React.Component<DialogProps, any>{
    static defaultProps = {
        prefixCls: 'biz-dialog',
        open: true,
    }
    layer = null;
    layerElement = null;
    componentDidMount(){
        if(!this.props.open) {
            return;
        }
        this.renderLayer();
    }
    componentDidUpdate(){
        this.renderLayer();
    }
    componentWillUnmount(){
        this.unrenderLayer(0);
    }
    renderLayer(){
        const {children, open, prefixCls} = this.props;
        if(open) {
            if(!this.layer) {
                let div = document.createElement('div');
                document.body.appendChild(div);
                this.layer = div;
            }
            this.layerElement = <DialogComponent maskOnTouchTap={()=>this.unrenderLayer(300)} {...this.props}/>;
            ReactDOM.unstable_renderSubtreeIntoContainer(this, this.layerElement, this.layer);
        } else {
            this.unrenderLayer(300);
        }
    }
    unrenderLayer(time){
        if(this.layer) {
            let div = this.layer;
            const prefixCls = this.props.prefixCls;
            const wrapOutDiv = div.getElementsByClassName(prefixCls + '-wrap')[0];
            wrapOutDiv.className = wrapOutDiv.className + ' fadeOut';
            div.getElementsByClassName(prefixCls + '-mask')[0].remove();
            this.layer = null;
            setTimeout(function(){
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                div = null;
            }, time);
        }
    }
    render(){
        return null;
    }
};