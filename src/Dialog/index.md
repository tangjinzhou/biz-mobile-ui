---
弹窗 Dialog
---

提供两种方式: 1.正常的jsx引入; 2.通过方法调用,如createDialog。

## API
#### 初始化弹窗
static createDialog(content?: string | React.ReactNode, options?: DialogProps) 
#### 关闭弹窗
static close  

#### DialogProps
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-dialog  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|showMask|boolean|true|是否显示遮罩背景|
|maskOnTouchTap|function|关闭Dialog|点击遮罩时回调|
|open|boolean|true|是否显示弹窗, 通过createDialog生成的Dialog无此属性|
