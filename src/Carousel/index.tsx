import * as React from 'react';
import * as classNames from 'classnames';
import autoPlay from 'react-swipeable-views/lib/autoPlay';
import SwipeableViews from 'react-swipeable-views';

interface CarouselProps {
    selectedIndex?: number,
    autoplay?: boolean,
    interval?: number,
    threshold?: number,
    onChangeIndex?: (x:number, y:number) => void,
    disabled?: boolean,
    resistance?: boolean,
    style?: {},
    onSwitching?: (x: number, y?:string) => void,
}

export default class Carousel extends React.Component<CarouselProps, any> {
    static defaultProps = {
        selectedIndex: 0,
        autoplay: false,
        interval: 3000,
        threshold: 5,
        onChangeIndex: () => {},
        disabled: false,
        resistance: false,
        onSwitching: () => {},
    }

    render(){
        const {selectedIndex, children, autoplay} = this.props;
        const swipeableProps = Object.assign({},this.props,{index: selectedIndex});
        delete swipeableProps.selectedIndex;
        let SwipeableComponent = null;
        if(autoplay){
            SwipeableComponent = autoPlay(SwipeableViews);
        } else {
            delete swipeableProps.autoplay;
            delete swipeableProps.interval;
            SwipeableComponent = SwipeableViews;
        }
        return (
            <SwipeableComponent  {...swipeableProps}>{children}</SwipeableComponent>
        )
    }
}