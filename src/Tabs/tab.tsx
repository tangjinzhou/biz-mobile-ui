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
    onTouchTap?: (x:number, y: any) => any;
}
export default class Tab extends React.Component<TabPropType, any>{
    static defaultProps = {
        prefixCls: 'bm-tab',
        className: '',
    };

    render() {
        const {prefixCls, className,index, label, key, icon, selected, onTouchTap} = this.props;
        const tabClass = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-active`]: selected,
            [className]: true,
        });

        return (
            <div className={tabClass} onClick={()=>onTouchTap(index, this)}>
                {icon}
                {label}
                {selected? <div className={`${prefixCls}-inkBar`}></div> : null}
            </div>
        )
    }

}