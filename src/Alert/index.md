---
提醒 Alert
---

启动一个提示对话框，包含对应的标题和信息。
可以指定一系列的按钮，点击对应的按钮会调用对应的onTouchTap回调并且关闭提示框。默认情况下，对话框会仅有一个'确定'按钮。

## API
#### 普通提醒
static alert = (config?: AlertConfigProps)
#### 带有输入框的提醒
static prompt = (config?: AlertConfigProps) 

#### AlertConfigProps
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-alert  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|title|string|-|标题|
|message|string|-|内容|
|buttons|Array<ButtonProps>|`[{text: '确定'}]`|按钮配置|
|onTouchTap|function(index, value)|无|点击按钮回调, index为按钮索引, value为输入框中值|
|defaultValue|string|-|输入框默认值|
|placeholder|string|-|placeholder|

#### ButtonProps
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|text|string|-|按钮文案|
|className|string|-|按钮类名|
|color|string|-|按钮颜色|
