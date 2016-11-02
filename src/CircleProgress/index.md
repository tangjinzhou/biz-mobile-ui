---
圆形进度条 CircleProgress
---

圆形进度条,用于展示进度。

## API

| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-circleProgress  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|fillColor      |string   |`#BDBDBD`|进度条背景色|
| color |string  | 主题色|  进度条颜色   |
|max|int|100|进度条最大值|
|min|int|0|进度条最小值|
|value|int|0|进度条当前值|
|size|string|-|圆形区域大小|
|strokeWidth|int|10|进度条宽度, 默认为10%*size|
|linecap|string|`round`|进度条末端绘制样式,可选值`round`/`butt`|
|transitionDuration|number|300|进度变化时,动画时间|
