---
滚动 ScrollerView
---

ScrollerView支持下拉刷新，上拉加载更多

## API
#### ScrollerView
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-scrollerView  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|scrollerOptions|Object|{}|参照[scroller](https://github.com/pbakaus/scroller)|
|scrollEventThrottle|number|100|函数节流时间间隔，毫秒单位，用于提升性能|
|onScroll|Function|--|滚动时的回调|
|onRefresh|Function|--|下拉刷新回调，传递回调函数时开启下拉刷新功能|
|refreshOption|RefreshControlProps|RefreshControl.defaultProps|开启下拉刷新时生效|
|onEndReached|Function|--|到达底部时的回调，一般用于上拉加载更多|

#### RefreshControlProps
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |scroller-view-refresh-control  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|distanceToRefresh|number|50|刷新区域距离阈值，单位px，如需用rem，请自行转换|
|refreshing|boolean|false|当前刷新状态|
|icon|array|`[<div key="0" className="scroller-view-refresh-control-pull">↓ 下拉</div>,<div key="1" className="scroller-view-refresh-control-release">↑ 释放</div>]`|下拉时各状态显示内容|
|loading|`string`/`React.ReactNode`|`<div>loading...</div>`|refreshing为true时显示|
