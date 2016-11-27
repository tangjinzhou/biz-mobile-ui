---
输入框 Input
---

单行文本。

## API

| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-input  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|label|`string`/`React.ReactNode`|-|标签名|
|name|string|-|原生textarea的name|
|value|string|-|value值,受控组件|
|defaultValue|string|-|默认值|
|placeholder|string|-|placeholder|
|disabled|boolean|false|禁用输入|
|clear|boolean|true|value不为空时,是否显示清除按钮|
|max|int|-|最大输入长度|
|showCount|boolean|false|显示计数功能|
|rows|int|1|行数|
|minHeight|string|none|最小高度|
|maxHeight|string|none|最大高度|
|autoHeight|boolean|false|是否自适应高度, 建议rows和autoHeight二选一|
|onChange|function(value)|无|value变化时回调|
|onBlur|function(value)|无|input失去焦点时回调|
|onFocus|function(value)|无|input获得焦点时回调|
|error|boolean|false|是否显示右侧错误提示Icon|
|onErrorTap|function|无|点击右侧错误提示Icon回调|
|onTouchTap|function|无|任何时候点击input框时回调|
|labelWidth|string|-|标签宽度,多个input需要左侧label对齐时使用|