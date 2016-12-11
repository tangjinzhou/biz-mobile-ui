import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

interface PanelDialogProps extends BizuiProps{
    content?: string | React.ReactNode,
    maskOnTouchTap?: Function,
    animationType: 'slideInLeft' | 'slideInRight' | 'fadeIn',
    showMask?: boolean,
    position: 'left' | 'right',
    panelWidth?: string,
}
interface PanelProps extends BizuiProps{
    maskOnTouchTap?: Function,
    animationType?: 'slideInLeft' | 'slideInRight' | 'fadeIn',
    position?: 'left' | 'right',
    showMask?: boolean,
    panelWidth?: string,
}

class PanelDialog extends React.Component<PanelDialogProps, any> {
    mask = null
    scrollDom = null
    domScroller = null
    static defaultProps = {
        prefixCls: 'biz-panel',
        className: '',
        maskOnTouchTap: ()=>{},
        showMask: true,
        position: 'left',
        panelWidth: '70%',
    }
    stopMaskScroll(e){
        e.stopPropagation()
        e.preventDefault()
    }
    componentDidMount(){
        this.mask && this.mask.addEventListener('touchmove', this.stopMaskScroll, false)
    }
    componentWillUnmount(){
        this.mask && this.mask.removeEventListener('touchmove', this.stopMaskScroll, false)
    }
    render(){
        const {prefixCls, className, children, maskOnTouchTap, animationType, showMask, style, position,panelWidth} = this.props;
        const popupClass = classNames({
            [className]: true,
            [prefixCls]: true,
        });
        const wrapClass = classNames({
            [`${prefixCls}-wrap`]: true,
            [`${animationType}`] : true,
            [`${prefixCls}-wrap-left`]: position === 'left',
            [`${prefixCls}-wrap-right`]: position === 'right',
        });
        return(
            <div className={popupClass} style={style}>
                <div ref={(c) => this.mask = c} style={showMask? {opacity: 0}:{}} className={['body-mask',`${prefixCls}-mask`].join(' ')} onTouchTap={maskOnTouchTap}></div>
                <div className={wrapClass} style={{width: panelWidth}}>
                    {children}
                </div>
            </div>
        )
    }
}
function createPanel(content, options) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    const wrapOutClass = {
        'slideInLeft': ' slideOutLeft',
        'slideInRight': ' slideOutRight',
        'fadeIn': ' fadeOut',
    };
    const prefixCls = options.prefixCls || 'biz-panel';
    function close() {
        if (div) {
            const wrapOutDiv = div.getElementsByClassName(prefixCls + '-wrap')[0];
            wrapOutDiv.className = wrapOutDiv.className + wrapOutClass[options.animationType];
            div.getElementsByClassName(prefixCls + '-mask')[0].remove();
            setTimeout(function(){
                ReactDOM.unmountComponentAtNode(div);
                div.remove();
                div = null;
            }, 500);
        }
    }
    options.maskOnTouchTap = options.maskOnTouchTap || close;
    ReactDOM.render(<PanelDialog {...options}>{content}</PanelDialog>, div);
    return {
        close: close
    }
}

export default class Panel {
    static show = (content?: string | React.ReactNode, options?: PanelProps) => {
        options = options || {};
        options.position = options.position || 'left';
        if(!options.animationType) {
            options.animationType = options.position === 'left' ? 'slideInLeft' : 'slideInRight';
        }
        return createPanel(content, options);
    }
};