import * as React from 'react';
import * as classNames from 'classnames';
import autoPlay from 'react-swipeable-views/lib/autoPlay';
import SwipeableViews from 'react-swipeable-views';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
interface CarouselProps extends BizuiProps {
    selectedIndex?: number,
    autoplay?: boolean,
    interval?: number,
    threshold?: number,
    onChangeIndex?: (x:number, y:number) => void,
    disabled?: boolean,
    resistance?: boolean,
    onSwitching?: (x: number, y?:string) => void,
    showDots?: boolean,
}

export default class Carousel extends React.Component<CarouselProps, any> {
    static defaultProps = {
        prefixCls: 'biz-carousel',
        className: '',
        selectedIndex: 0,
        autoplay: false,
        interval: 3000,
        threshold: 5,
        onChangeIndex: () => {},
        disabled: false,
        resistance: false,
        onSwitching: () => {},
        showDots: true,
    }
    state = {selectedIndex: this.props.selectedIndex}
    getDots() {
        const dots = [];
        const {prefixCls, children}=this.props;
        const dotsCount = React.Children.count(children);
        const selectedIndex = this.state.selectedIndex;
        for (let i = 0; i < dotsCount; i++){
            const dotClass = classNames({
                [`${prefixCls}-active`]: selectedIndex === i,
                [`${prefixCls}-dot`]: true,
            });
            dots.push(<span key={i} className={dotClass}></span>);
        }
        return dots;
    }
    componentWillReceiveProps(newProps) {
        if(newProps.selectedIndex !== this.state.selectedIndex) {
            this.setState({
                selectedIndex: newProps.selectedIndex
            });
        }
    }
    onChangeIndex = (index, fromIndex)=>{
        //自动播放组件无fromIndex参数,手动添加上
        this.props.onChangeIndex(index, fromIndex || this.state.selectedIndex);
        this.setState({selectedIndex: index});
    }
    render(){
        const {prefixCls, children, autoplay,interval,threshold,disabled,resistance, onSwitching, showDots, style, className} = this.props;
        const swipeableProps = {
            index: this.state.selectedIndex,
            threshold: threshold,
            disabled: disabled,
            resistance: false,
            onSwitching: onSwitching,
            autoplay: autoplay,
            interval: interval
        };

        let SwipeableComponent = null;
        if(autoplay){
            SwipeableComponent = AutoPlaySwipeableViews;
        } else {
            delete swipeableProps.autoplay;
            delete swipeableProps.interval;
            SwipeableComponent = SwipeableViews;
        }
        const dots = this.getDots();
        const carouselClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        return (
            <div className={carouselClass} style={style}>
                <SwipeableComponent  {...swipeableProps} onChangeIndex={this.onChangeIndex}>{children}</SwipeableComponent>
                {showDots?<div className={`${prefixCls}-dots`}>{dots}</div>:null}
            </div>
        )
    }
}