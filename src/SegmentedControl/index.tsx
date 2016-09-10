import * as React from 'react';
import * as classNames from 'classnames';

interface SegmentedControlPropType{
    tintColor?: string;
    enabled?: boolean;
    selectedIndex?: number;
    values?: Array<string>;
    onChange?: (x:number, y:number,z?:React.SyntheticEvent)=>void,
    style?: any;
    prefixCls?: string;
    className?: string;
}

export default class SegmentedControl extends React.Component<SegmentedControlPropType, any>{
    static defaultProps = {
        selectedIndex: 0,
        prefixCls: 'biz-segmented',
        className: '',
        onChange:()=>{},
        values: [],
        style: {},
        enabled: true,
    };
    state = {selectedIndex: this.props.selectedIndex};
    tabsCompontent=null;
    componentWillReceiveProps(newProps) {
        if(newProps.selectedIndex !== undefined){
            this.setState({
                selectedIndex: newProps.selectedIndex
            })
        }
    }

    onTouchTap = (e, index, value)=> {
        const {onChange, enabled} = this.props;
        const fromIndex = this.state.selectedIndex;
        if(enabled){
            onChange(index, fromIndex, e);
            if(index !== fromIndex) {
                this.setState({selectedIndex: index});
            }
        }
    }
    
    render() {
        const {prefixCls, className, onChange, enabled, values, tintColor, style} = this.props;
        const segmentedClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const selectedIndex= this.state.selectedIndex;
        const tabs = values.map((value, index) => {
            const tabCls = classNames({
                [`${prefixCls}-item`]: true,
                [`${prefixCls}-item-active`]: index === selectedIndex,
            });
            return (
                <div
                    className={tabCls}
                    key={index}
                    ref={(c)=>this['_tab_'+index]=c}
                    onTouchTap={(e) => this.onTouchTap(e, index, value)}
                    style={{
                        color: index === selectedIndex ? '#fff' : tintColor,
                        backgroundColor: index === selectedIndex ? tintColor : '#fff',
                        borderColor: tintColor,
                    }}
                >
                    {value}
                </div>
            );
        });
        this.tabsCompontent = tabs;
        const segmentedStyle = Object.assign({}, style, {
            opacity: enabled ? 1 : 0.5,
            borderColor: tintColor,
        });
        return (
            <div className={segmentedClass} style={segmentedStyle}>
                {tabs}
            </div>
        )
    }
}