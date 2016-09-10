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
    handleChange?: (x:number, y: React.SyntheticEvent) => any;
}
export default class TabBarItem extends React.Component<TabBarItemPropType, any>{
    static defaultProps = {
        prefixCls: 'biz-tabBarItem',
        className: '',
    };
    render() {
        const {prefixCls, className,index, label, key, icon, selected, handleChange} = this.props;
        const tabClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-active`]: selected,
            [className]: true,
        });

        return (
            <div className={tabClass} onTouchTap={(e)=>handleChange(index, e)}>
                {icon}
                {label}
            </div>
        )
    }
}