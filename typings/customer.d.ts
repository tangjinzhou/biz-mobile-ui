declare module 'biz-mobile-ui' {
    var exports: {
        Alert: any;
        Button: any;
        Icon: any;
        Line: any;
        Tabs: any;
        DatePicker: any;
        InputItem: any;
        List: any;
        ListView: any;
        Progress: any;
    };
    export = exports
}
declare module 'react-swipeable-views' {
    var exports: any
    export default exports
}
declare module 'react-swipeable-views/lib/autoPlay' {
    var exports: any
    export default exports
}
declare module 'react-tap-event-plugin'{
    var exports:()=>any;
    export = exports;
}
declare module 'zscroller'{
    var exports: any;
    export = exports;
}
declare module 'lodash'{
    var exports: {
        throttle: any;
    };
    export = exports;
}
interface BizuiProps {
    prefixCls?: string,
    className?: string,
    style?: {},
}