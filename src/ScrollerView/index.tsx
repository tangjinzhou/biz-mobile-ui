import * as React from 'react';
import * as classNames from 'classnames';
import * as objectAssign from 'object-assign';
import * as DOMScroller from 'zscroller';
import {throttle} from 'lodash';
import RefreshControl from './RefreshControl'
interface RefreshControlProps extends BizuiProps {
    icon?: any,
    loading?: any,
    distanceToRefresh?: number,
    refreshing?: boolean,
}
interface ScrollerViewProps extends BizuiProps {
    scrollerOptions?: Object,
    scrollEventThrottle?: number,
    onScroll?: Function,
    refreshOption?: RefreshControlProps,
    onRefresh?: Function,
    onEndReached?: Function,
}

export default class ScrollerView extends React.Component<ScrollerViewProps, any> {
    static defaultProps = {
        prefixCls: 'biz-scrollerView',
        className: '',
        scrollerOptions: {},
        scrollEventThrottle: 100,
        onScroll: ()=>{},
        refreshOption: RefreshControl.defaultProps
    }
    SCROLLVIEW = null
    INNERVIEW = null
    domScroller = null
    refreshControlRefresh = null
    refreshControl = null
    manuallyRefresh = false
    _isPullUp = false
    _pullUpStartPageY = null
    componentDidMount(){
        const { scrollerOptions, onRefresh, refreshOption} = this.props;
        this.domScroller = new DOMScroller(this.INNERVIEW, objectAssign({}, {
            scrollingX: false,
            onScroll: this.throttleScroll(),
        }, scrollerOptions));
        this.bindEvt();
        if (onRefresh) {
            const scroller = this.domScroller.scroller;
            const { distanceToRefresh, refreshing } = objectAssign({}, RefreshControl.defaultProps, refreshOption);
            scroller.activatePullToRefresh(distanceToRefresh,
                () => {
                    this.manuallyRefresh = true;
                    this.refreshControl.setState({ active: true });
                },
                () => {
                    this.manuallyRefresh = false;
                    this.refreshControl.setState({ active: false, loadingState: false });
                },
                () => {
                    this.refreshControl.setState({ loadingState: true });
                    const finishPullToRefresh = () => {
                        scroller.finishPullToRefresh();
                        this.refreshControlRefresh = null;
                    };
                    Promise.all([
                        new Promise(resolve => {
                            onRefresh();
                            this.refreshControlRefresh = resolve;
                        }),
                        new Promise(resolve => setTimeout(resolve, 1000)),
                    ]).then(finishPullToRefresh, finishPullToRefresh);
                });
            if (refreshing) {
                scroller.triggerPullToRefresh();
            }
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.onRefresh && this.props.onRefresh) {
            const preRefreshing = prevProps.refreshOption.refreshing;
            const nowRefreshing = this.props.refreshOption.refreshing;
            if (preRefreshing && !nowRefreshing && this.refreshControlRefresh) {
                this.refreshControlRefresh();
            } else if (!this.manuallyRefresh && !preRefreshing && nowRefreshing) {
                this.domScroller.scroller.triggerPullToRefresh();
            }
        }
    }
    componentWillUnmount() {
        this.domScroller && this.domScroller.destroy();
        this.unBindEvt();
    }
    throttleScroll(){
        const {scrollEventThrottle, onScroll} = this.props;
        let handleScroll = onScroll || (() => {});
        if (scrollEventThrottle && onScroll) {
            handleScroll = throttle(e => {
                onScroll();
            }, scrollEventThrottle);
        }
        return handleScroll;
    }
    bindEvt() {
        if(this.props.onEndReached){
            const ele = this.SCROLLVIEW;
            ele.addEventListener('touchstart', this.onPullUpStart);
            ele.addEventListener('touchmove', this.onPullUpMove);
            ele.addEventListener('touchend', this.onPullUpEnd);
            ele.addEventListener('touchcancel', this.onPullUpEnd);
        }
    }
    unBindEvt() {
        if(this.props.onEndReached){
            const ele = this.SCROLLVIEW;
            ele.removeEventListener('touchstart', this.onPullUpStart);
            ele.removeEventListener('touchmove', this.onPullUpMove);
            ele.removeEventListener('touchend', this.onPullUpEnd);
            ele.removeEventListener('touchcancel', this.onPullUpEnd);
        }
    }
    onPullUpStart=(e) => {
        this._pullUpStartPageY = e.touches[0].screenY;
        this._isPullUp = false;
    }
    onPullUpMove = (e) => {
        if (e.touches[0].screenY < this._pullUpStartPageY && this._reachBottom()) {
            this._isPullUp = true;
        }
    }
    onPullUpEnd = (e) => {
        if (this._isPullUp && this.props.onEndReached) {
            this.props.onEndReached(e);
        }
        this._isPullUp = false;
    }
    _reachBottom() {
        const element = this.SCROLLVIEW;
        console.log(element.scrollHeight - element.scrollTop, element.clientHeight)
        return element.scrollHeight - element.scrollTop === element.clientHeight;
    }
    render() {
        const {prefixCls, className, style, children, refreshOption, onRefresh} = this.props;
        const scrollerViewClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        })
        return (
            <div style={{overflow: 'hidden'}}>
                <div className={scrollerViewClass} style={style} ref={(c)=>this.SCROLLVIEW = c}>
                    <div style={{}} ref={(c)=>this.INNERVIEW = c}>
                        {onRefresh? <RefreshControl ref={(c)=>this.refreshControl = c} {...refreshOption} onRefresh={onRefresh}/>: null}
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}