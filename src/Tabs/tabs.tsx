import * as React from 'react';
import * as classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
interface TabsProps extends BizuiProps{
    selectedIndex? : number,
    onChangeIndex?: (x:number, y:number)=>void,
    animation?: boolean,
    animateTransitions?: boolean,
    animateHeight?: boolean,
    tabsPosition?: string,
    defaultIndex?: number,
}

export default class Tabs extends React.Component<TabsProps, any>{
    static defaultProps = {
        defaultIndex: 0,
        prefixCls: 'biz-tabs',
        className: '',
        onChangeIndex:()=>{},
        onTabTouchTap: ()=>{},
        animation: true,
        animateTransitions: true,
        tabsPosition: 'top',
        animateHeight: false,
    };
    state = {selectedIndex: this.props.defaultIndex};
    componentWillMount(){
        this.updateState(this.props.selectedIndex)
    }

    componentWillReceiveProps(newProps) {
        this.updateState(newProps.selectedIndex)
    }
    updateState(selectedIndex){
        if(typeof selectedIndex === 'number' && selectedIndex !== this.state.selectedIndex){
            this.setState({
                selectedIndex: selectedIndex
            })
        }
    }
    getTabCount() {
        return this.getTabs().length;
    }
    getTabs() {
        const tabs = [];
        React.Children.forEach(this.props.children, (tab) => {
            if (React.isValidElement(tab)) {
                tabs.push(tab);
            }
        });
        return tabs;
    }
    getContent(tab, index, prefixCls){
        const contentClass = classNames({
            [`${prefixCls}-content`]: true,
            [`${prefixCls}-content-hidden`]: index !== this.state.selectedIndex && !this.props.animation
        });
        if(tab.props.children){
            return (
                <div className={contentClass} key={index}>
                    {tab.props.children}
                </div>
            );
        } else {
            return null;
        }
    }

    handleChange = (index, e)=> {
        const fromIndex = this.state.selectedIndex;
        this.props.onChangeIndex(index, fromIndex);
        if(index !== fromIndex){
            this.setState({selectedIndex: index});
        }
    }
    swipeableViewsChange = (index, fromIndex)=> {
        this.props.onChangeIndex(index, fromIndex);
        this.setState({selectedIndex: index});
    }
    render() {
        const {prefixCls, className, animation, animateTransitions, animateHeight, tabsPosition, style} = this.props;
        const tabsClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const contents = [];
        const tabs = this.getTabs().map((tab, index) => {
            contents.push(this.getContent(tab, index, prefixCls));
            return React.cloneElement(tab, {
                key: index,
                index: index,
                selected: this.state.selectedIndex === index,
                handleChange: this.handleChange
            });
        });
        const tabsContainer = <div className={`${prefixCls}-container`}>{tabs}</div>;
        return (
            <div className={tabsClass} style={style}>
                {tabsPosition === 'bottom'? null : tabsContainer}
                <div className={`${prefixCls}-content-container`}>
                    {animation ?
                        <SwipeableViews
                            index={this.state.selectedIndex}
                            onChangeIndex={this.swipeableViewsChange}
                            animateTransitions={animateTransitions}
                            animateHeight={animateHeight}
                        >
                            {contents}
                        </SwipeableViews>
                        :
                        contents
                    }
                </div>
                {tabsPosition === 'bottom'? tabsContainer : null}
            </div>
        )
    }
}