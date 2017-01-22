---
复选框 Checkbox
---

用于选择或取消选择。

## API

| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-checkbox  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|name      |string   |-|原生checkbox的name属性|
| disabled |boolean  | false|  是否不可用   |
|checked|boolean|false|是否被选中|
|defaultChecked|boolean|false|初始是否被选中|
| onChange  | function(checked, value) |无 | 复选框变化后的回调  |
| label     |`string`/`React.ReactNode` |-|标签名 |
|labelPosition| string| right|标签位置,可选值`left`/`right`|
|value|string|-|复选框值|
