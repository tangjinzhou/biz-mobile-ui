---
表格 Table
---

行列展示数据。

## API

#### 实例方法

全选`setAllRowsSelected`
取消选择`cancelAllRowsSelected` 
获取已选择的索引`getSelectedRows`
反选`invertRowsSelected` 

#### TableProps
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-table | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|columns|Array<HeaderTrProps | Array<HeaderTrProps>>|-|表格头部配置,支持多行头部|
|dataSource|Array<dataItem>|-|数据数组|
|dataSourceField|Array<HeaderTrProps>|`columns`/`columns[columns.length - 1]`|如单行表头,默认是`columns`, 如多行表头,默认是`columns[columns.length - 1]`|
|selectable|boolean|false|是否可选|
|multiSelectable|boolean|true|是否支持多选|
|selectedChange|`function(row: number/'all', checked: boolean, attr: {})`|无|选中状态切换时回调, 当切换全选时row为`all`, 其它为数据列索引,attr为数据组中每一项的attr属性,可自定义传入ID等,全选按钮传回空对象|
|fixedHeader|boolean|false|是否锁定表头|
|height|string|`auto`|表格容器高度, 表格内容过多需要滚动时设置|
|width|string|`100%`|表格宽度|
    

#### HeaderTrProps
| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|colSpan|int|1|所占列数|
|align|string|`center`|位置,可选值为`left`/`center`/`right`|
|width|string|-|单列宽度|
|content|function (dataItem, index, field)|`function (dataItem, index, field) {return dataItem[field];}`|当前单元格内容|
|title|string|-|列标题|
|field|string|-|列数据在数据项中对应的key|

#### dataItem.attr
以下属性放在attr中,防止冲突

| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|selectable|boolean|true|是否可选, TableProps.selectable为true时生效|
|selected|boolean|false|是否选中状态|