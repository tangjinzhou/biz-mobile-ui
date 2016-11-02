---
图标 Icon
---

图标,目前使用[fontawesome](http://fontawesome.io/icons/),可引入其它图标库。

## API

| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-icon  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|type|string|-|图标类型|
|size|string|-|可选值`lg`/`2x`/`3x`/`4x`/`5x`, 如不能满足,可在style中自定义|
|spin|boolean|false|是否旋转|
|fixedWidth|boolean|false|图标是否居中对齐,一般用于竖向多个图标大小不一时使用|
|color|string|-|图标颜色,该颜色优先级大于style中color属性|