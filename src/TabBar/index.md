---
底部切换 TabBar > TabBarItem
---

屏幕底部的Tab,无动画切换效果。

## API
#### TabBar
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-tabBar | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|selectedIndex|int|0|被选中tab索引|
|onChangeIndex|function(toIndex, fromIndex)|无|切换回调|


#### TabBarItem
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-tabBarItem  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|label|`string`/`React.ReactNode`|-|tab名称|
|badgeContent|`string`/`React.ReactNode`|null|徽标内容|
|icon|`React.ReactNode`|-|TabBar建议提供ICon|