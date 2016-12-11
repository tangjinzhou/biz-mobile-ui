---
单选 RadioGroup > Radio
---

一个RadioGroup组中的Radio仅允许选中一个。

## API
#### RadioGroup
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-radioGroup  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|name|string|-|radio的name|
|defaultValueSelected|string|-|默认被选中的radio的value|
|valueSelected|string|-|被选中的radio的value|
|onChange|function(value)|无|被选中radio变化时回调|
|labelPosition|string|right|label位置,可选值`left`/`right`|


#### Radio
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-radio  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|disabled|boolean|false|是否可被改变选中状态|
|label|string|-|label|
|value|string|-|radio的value值|
|checked|boolean|false|是否被选中,如是radioGroup子组件将无效|
|defaultChecked|boolean|false|初始是否被选中,如是radioGroup子组件将无效|