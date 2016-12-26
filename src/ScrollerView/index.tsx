import * as React from 'react';
import * as classNames from 'classnames';
import * as objectAssign from 'object-assign';
import * as DOMScroller from 'zscroller';
import {throttle} from 'lodash'
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
    onRefresh?: Function
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
    componentDidMount(){
        const { scrollerOptions, onRefresh, refreshOption} = this.props;
        this.domScroller = new DOMScroller(this.INNERVIEW, objectAssign({}, {
            scrollingX: false,
            onScroll: this.throttleScroll(),
        }, scrollerOptions));

        if (onRefresh) {
            const scroller = this.domScroller.scroller;
            const { distanceToRefresh, refreshing } = refreshOption;
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
                        // at lease 1s for ux
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
    componentWillReceiveProps(newProps) {
    }
    throttleScroll(){
        const {scrollEventThrottle, onScroll} = this.props;
        let handleScroll = onScroll || (() => {});
        if (scrollEventThrottle && onScroll) {
            handleScroll = throttle(e => {
                onScroll(e);
            }, scrollEventThrottle);
        }
        return handleScroll;
    }
    render() {
        const {prefixCls, className, style, children, refreshOption, onRefresh} = this.props;
        const scrollerViewClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        })
        return (
            <div className={scrollerViewClass} style={style} ref={(c)=>this.SCROLLVIEW = c}>
                <div style={{}} ref={(c)=>this.INNERVIEW = c}>
                    {onRefresh? <RefreshControl ref={(c)=>this.refreshControl = c} {...refreshOption} onRefresh={onRefresh}/>: null}
                    {children}
                </div>
            </div>

        );
    }
}