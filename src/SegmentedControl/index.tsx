import * as React from 'react';
import * as classNames from 'classnames';

interface SegmentedControlProps extends BizuiProps{
    tintColor?: string;
    enabled?: boolean;
    selectedIndex?: number;
    values?: Array<string>;
    onChangeIndex?: (x:number, y:number)=>void,
}

export default class SegmentedControl extends React.Component<SegmentedControlProps, any>{
    static defaultProps = {
        prefixCls: 'biz-segmented',
        className: '',
        selectedIndex: 0,
        onChangeIndex:()=>{},
        values: [],
        style: {},
        enabled: true,
    };
    state = {selectedIndex: this.props.selectedIndex};
    tabsCompontent=null;
    componentWillReceiveProps(newProps) {
        if(newProps.selectedIndex !== this.state.selectedIndex){
            this.setState({
                selectedIndex: newProps.selectedIndex
            })
        }
    }

    onTouchTap = (e, index, value)=> {
        const {onChangeIndex, enabled} = this.props;
        const fromIndex = this.state.selectedIndex;
        if(enabled){
            onChangeIndex(index, fromIndex);
            if(index !== fromIndex) {
                this.setState({selectedIndex: index});
            }
        }
    }
    
    render() {
        const {prefixCls, className, onChangeIndex, enabled, values, tintColor, style} = this.props;
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
                        color: index === selectedIndex ? '' : tintColor,
                        backgroundColor: index === selectedIndex ? tintColor : '',
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