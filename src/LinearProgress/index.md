---
条形进度条 LinearProgress
---

条形进度条,用于展示进度。

## API

| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-linearProgress  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|fillColor      |string   |`#BDBDBD`|进度条背景色|
| color |string  | 主题色|  进度条颜色   |
|mode|string|`indeterminate` | 进度条模式,可选值`indeterminate`/`determinate`, 当为`indeterminate`时下面属性无效, 滚动条无限滚动|,
|max|int|100|进度条最大值|
|min|int|0|进度条最小值|
|value|int|0|进度条当前值|
|transitionDuration|number|300|进度变化时,动画时间|

