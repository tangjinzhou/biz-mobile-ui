import * as React from 'react';
import * as classNames from 'classnames';
interface TabBarProps extends BizuiProps{
    selectedIndex? : number,
    defaultIndex?: number,
    onChangeIndex?: (x:number, y:number)=>void,
}

export default class TabBar extends React.Component<TabBarProps, any>{
    static defaultProps = {
        defaultIndex: 0,
        prefixCls: 'biz-tabBar',
        className: '',
        onChangeIndex:()=>{},
        onTabTouchTap: ()=>{},
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
            [`${prefixCls}-content-hidden`]: index !== this.state.selectedIndex
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
        const {onChangeIndex, selectedIndex} = this.props;
        if(index !== fromIndex){
            onChangeIndex(index, fromIndex);
            typeof selectedIndex !== 'number' && this.setState({selectedIndex: index});
        }
    }
    render() {
        const {prefixCls, className, onChangeIndex, style} = this.props;
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
                <div className={`${prefixCls}-content-container`}>
                    {contents}
                </div>
                <div className={`${prefixCls}-container`}>{tabs}</div>
            </div>
        )
    }
}