---
切换 Tabs > Tab
---

理论上Tab数量无上限, 超出屏幕区域时,被选中Tab自动滚动到何时位置。

## API
#### Tabs
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-tabs  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|selectedIndex|int|0|被选中tab索引|
|onChangeIndex|function(toIndex, fromIndex)|无|切换回调|
|animation|boolean|true|是否可活动切换tab对应内容|
|animateTransitions|boolean|true|切换tab时,tab对应的内容是否开启滚动,仅animation为true时生效|
|tabsPosition|string|top|tab位置,可选`top`/`bottom`|

#### Tab
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-tab  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|label|`string`/`React.ReactNode`|-|tab名称|
|badgeContent|`string`/`React.ReactNode`|null|徽标内容|