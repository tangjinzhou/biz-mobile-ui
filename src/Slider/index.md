---
滑动输入条 Slider
---

滑动输入区间内值,暂仅支持横向滑动。

## API
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-slider  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|disabled|boolean|false|是否禁用滑动|
|min|int|0|最小值|
|max|int|100|最大值|
|step|number|0.1|值越小越平滑|
|onChange|function(x:number)|无|滑动值变化时触发|
|onDragStart|function(x:number)|无|滑动开始时触发|
|onDragEnd|function(x:number)|无|滑动结束时触发|
|value|number|0|当前值|
|defaultValue|number|0|初始化默认值|
