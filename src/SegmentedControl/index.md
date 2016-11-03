---
分段控制器 SegmentedControl
---

分段控制器,类似Tab。

## API
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-segmented  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|color|string|-|控制器颜色|
|disabled|boolean|false|是否禁用|
|selectedIndex|int|0|当前被选中索引|
|values|Array<string>|`[]`|控制器数组|
|onChangeIndex|function(toIndex, fromIndex)|无|切换回调|
