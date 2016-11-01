---
轮播图 Carousel
---
该组件在[react-swipeable-views](http://oliviertassinari.github.io/react-swipeable-views/)的基础上进行二次封装;
暂时仅提供横向滚动轮播图;
可向前向后滚动，默认禁止自动轮播。


## API

| 属性      | 类型    | 默认值       | 描述         |
|----------|---------|------------|--------------|
|prefixCls |string   |biz-carousel  | 自定义组件主题类名前缀|
|className | string  |-           |组件跟节点添加类名|
|style|Object|{}|自定义组件跟节点的内联样式|
|selectedIndex|int|0|当前显示的索引|
|autoplay|boolean|false|是否自动轮播|
|interval|int|3000|autoplay为true时生效，自动播放的时间间隔，单位毫秒|
|threshold|int|5|用于检测快速滑动的阈值。如果计算的速度高于此值，则索引变化。|
|onChangeIndex|function(index, preIndex)|无||
|onSwitching|function(index, type)|无|手动滑动时的回调，实现幻灯片对应位置的功能时使用， ｀type｀为`move`/`end`其中之一|
|disabled|boolean|false|禁止用户手动切换|
|resistance|boolean|false|边缘是否具有的回弹效果|
|showDots|boolean|true|是否显示指示点|



