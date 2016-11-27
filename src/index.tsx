/// <reference path="../typings/index.d.ts" />
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import animationFrame from './util/animationFrame';
injectTapEventPlugin();
animationFrame();
export {colors} from './styles/colors';
export {default as Alert} from './Alert';
export {default as Button} from './Button';
export {default as Icon} from './Icon';
export {default as Line} from './Line';
export {default as Tabs} from './Tabs';
export {default as Tab} from './Tabs/Tab';
export {default as TabBar} from './TabBar/TabBar';
export {default as TabBarItem} from './TabBar/TabBarItem';
export {default as SegmentedControl} from './SegmentedControl';
export {default as LinearProgress} from './LinearProgress';
export {default as CircleProgress} from './CircleProgress';
export {default as Carousel} from './Carousel';
export {default as Badge} from './Badge';
export {default as Toast} from './Toast';
export {default as Card} from './Card';
export {default as Switch} from './Switch';
export {default as Checkbox} from './Checkbox';
export {default as Radio} from './Radio';
export {default as RadioGroup} from './Radio/RadioGroup';
export {default as Ellipsis} from './Ellipsis';
export {default as Table} from './Table';
export {default as Arrow} from './Arrow';
export {default as Slider} from './Slider';
export {default as Popup} from './Popup';
export {default as InputItem} from './InputItem';
export {default as TextareaItem} from './TextareaItem';
export {default as Dialog} from './Dialog';
export {createDialog} from './Dialog';
//TODO: 优先级按照如下顺序
//export {default as Panel} from './Panel';
//export {default as NavBar} from './NavBar';
//export {default as SearchBar} from './SearchBar';
//export {default as Picker} from './Picker';
//export {default as DatePicker} from './DatePicker'; ios and 安卓两种 参考material-ui & andt-mobile & mint-ui
//以下基于https://github.com/pbakaus/scroller去做, 尽量不要引入过多第三方控件
//export {default as PullRefresh} from './PullRefresh';下拉刷新
//export {default as ListView} from './ListView';
//export {default as LoadMore} from './LoadMore'; 上拉加载更多 and 手动加载更多
//export {default as LazyLoad} from './LazyLoad';