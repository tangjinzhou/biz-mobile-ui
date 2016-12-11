---
弹层 Panel
---

提供左右两种弹层方式。

## API
#### 初始化弹窗
static show = (content?: string | React.ReactNode, options?: PopupProps)
#### 关闭弹窗
static close  

#### content
弹层内容
#### PanelProps
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-panel  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|panelWidth|string|70%|panel宽度|
|showMask|boolean|true|是否显示遮罩背景|
|maskOnTouchTap|function|关闭Dialog|点击遮罩时回调|
|position|`left`/`right`|left|弹层位置|
|animationType|string|-|可选值`slideInDown`/`slideInUp`/`fadeIn`, 默认值和position有关, 建议使用默认|