import * as React from 'react';
import * as classNames from 'classnames';
interface TabPropType{
    prefixCls? : string,
    className? : string,
    label : string,
    icon? : any,
    key?: number,
    index?: number,
    selected?: boolean,
    handleTabTouchTap?: (x:number, y: any) => any;
}
export default class Tab extends React.Component<TabPropType, any>{
    static defaultProps = {
        prefixCls: 'bm-tab',
        className: '',
    };
    _tab = null;
    _tabContainer = null;
    tabRequestAnimation = null;
    componentDidMount() {
        if(this.props.selected) {
            this.updateSelectedPos(this._tab.offsetLeft, this._tab.clientWidth);
        }
    }
    componentDidUpdate() {
        if(this.props.selected) {
            this.updateSelectedPos(this._tab.offsetLeft, this._tab.clientWidth);
        }
    }
    componentWillUnmount() {
        this.tabRequestAnimation && cancelAnimationFrame(this.tabRequestAnimation);
    }
    updateSelectedPos(tabOffsetLeft, tabWidth) {
        this.tabRequestAnimation && cancelAnimationFrame(this.tabRequestAnimation);
        this._tabContainer = this._tab.parentNode;
        const containerWidth = this._tabContainer.clientWidth;
        const scrollLeft = tabOffsetLeft - containerWidth/2 + tabWidth/2;
        if(this._tabContainer.scrollLeft !== scrollLeft) {
            let direction = this._tabContainer.scrollLeft < scrollLeft ? 'fordward' : 'backward';
            let stepNum = (scrollLeft - this._tabContainer.scrollLeft)/20;
            this.tabRequestAnimation = requestAnimationFrame(() => this.stepScrollLeft(scrollLeft, direction, stepNum));
        }
    }
    stepScrollLeft(scrollLeft, direction, stepNum){
        let preScrollLeft = this._tabContainer.scrollLeft;
        this._tabContainer.scrollLeft += stepNum;
        let newScrollLeft = this._tabContainer.scrollLeft;
        if(preScrollLeft != newScrollLeft && (direction === 'fordward' ? newScrollLeft < scrollLeft : newScrollLeft > scrollLeft)) {
            this.tabRequestAnimation = requestAnimationFrame(()=>this.stepScrollLeft(scrollLeft, direction, stepNum));
        }
    }
    render() {
        const {prefixCls, className,index, label, key, icon, selected, handleTabTouchTap} = this.props;
        const tabClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-active`]: selected,
            [className]: true,
        });

        return (
            <div ref={(c) => this._tab = c} className={tabClass} onTouchTap={()=>handleTabTouchTap(index, this)}>
                {icon}
                {label}
                {selected? <div className={`${prefixCls}-inkBar`}></div> : null}
            </div>
        )
    }

}