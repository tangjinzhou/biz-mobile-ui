import * as React from 'react';
import * as classNames from 'classnames';
interface TabBarItemPropType{
    prefixCls? : string,
    className? : string,
    label : string,
    icon? : React.ReactNode,
    key?: number,
    index?: number,
    selected?: boolean,
    handleTabTouchTap?: (x:number, y: any) => any;
}
export default class TabBarItem extends React.Component<TabBarItemPropType, any>{
    static defaultProps = {
        prefixCls: 'bm-tabBarItem',
        className: '',
    };
    render() {
        const {prefixCls, className,index, label, key, icon, selected, handleTabTouchTap} = this.props;
        const tabClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-active`]: selected,
            [className]: true,
        });

        return (
            <div className={tabClass} onTouchTap={()=>handleTabTouchTap(index, this)}>
                {icon}
                {label}
            </div>
        )
    }
}