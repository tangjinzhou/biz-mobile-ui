---
提示 Toast
---

提示。

## API
#### 信息提示
static show = (content: string | React.ReactNode, duration?: number, onClose?: () => void)
static info = (content: string | React.ReactNode, duration?: number, onClose?: () => void)
#### 加载提示    
static loading = (content: string | React.ReactNode, duration?: number, onClose?: () => void)
#### 成功提示
static success = (content: string | React.ReactNode, duration?: number, onClose?: () => void)
#### 错误提示
static error = (content: string | React.ReactNode, duration?: number, onClose?: () => void)

#### 关闭提示
static close

| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|duration|int|1500|duration毫秒后消失,如duration为0,则不会自动消失|
|onClose|function|无|提示消失时回调|
