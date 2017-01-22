import * as React from 'react';
import * as classNames from 'classnames';
interface RefreshControlProps extends BizuiProps {
    icon?: any,
    loading?: string | React.ReactNode,
    distanceToRefresh?: number,
    refreshing?: boolean,
    onRefresh: Function,
}

export default class RefreshControl extends React.Component<RefreshControlProps, any> {
    static defaultProps = {
        prefixCls: 'scroller-view-refresh-control',
        distanceToRefresh: 50,
        refreshing: false,
        icon: [
            <div key="0" className="scroller-view-refresh-control-pull">
                ↓ 下拉
            </div>,
            <div key="1" className="scroller-view-refresh-control-release">
                ↑ 释放
            </div>,
        ],
        loading: <div>loading...</div>
    }
    state =  {
        active: false,
        loadingState: false,
    }
    render() {
        const {
            prefixCls, className = '', style, icon, loading, refreshing,
            } = this.props;
        const { active, loadingState } = this.state;
        const wrapCls = classNames({
            [className]: true,
            [`${prefixCls}-ptr`]: true,
            [`${prefixCls}-active`]: active,
            [`${prefixCls}-loading`]: loadingState || refreshing,
        });
        return (
            <div ref="ptr" className={wrapCls} style={style}>
                <div className={`${prefixCls}-ptr-icon`}>{icon}</div>
                <div className={`${prefixCls}-ptr-loading`}>{loading}</div>
            </div>
        );
    }
}