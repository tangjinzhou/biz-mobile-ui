import './styles/app.less';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import animationFrame from './util/animationFrame';

injectTapEventPlugin();
animationFrame();

export {default as Alert} from './Alert';
export {default as Button} from './Button';
export {default as Icon} from './Icon';
export {default as Line} from './Line';
export {default as Tabs} from './Tabs';
export {default as Tab} from './Tabs/tab';
export {default as TabBar} from './TabBar/tabBar';
export {default as TabBarItem} from './TabBar/tabBarItem';
export {default as SegmentedControl} from './SegmentedControl';