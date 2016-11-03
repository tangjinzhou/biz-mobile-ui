---
表格 Table
---

行列展示数据。

## API
#### TableProps
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-table | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|


columns?:Array<HeaderTrProps | Array<HeaderTrProps>>,
    fixedHeader?:boolean,
    selectable?:boolean,
    multiSelectable?:boolean,
    selectedChange?: Function,
    dataSource?:Array<Object>,
    dataSourceField?:Array<HeaderTrProps>,
    height?:string,
    width?: string,

#### HeaderTrProps
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|

colSpan?:number,
    rowSpan?:number,
    selectable?:boolean,
    selected?:boolean,
    onRowSelection?:Function,
    align?: string,
    width?: string,
    content?: Function,
    title: string,
    field?: string,
    attr?: Object