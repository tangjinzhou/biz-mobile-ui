import React from 'react'
import {Icon,Panel, colors} from '@bizfe/biz-mobile-ui'
import {px2rem, deviceHeight, htmlFontSize} from '@bizfe/biz-mobile-ui/build/util/util';
import MobileNav from '../components/MobileNav'
import AlertDemo from '../Demo/Alert'
import ArrowDemo from '../Demo/Arrow'
import BadgeDemo from '../Demo/Badge'
import ButtonDemo from '../Demo/Button'
import CardDemo from '../Demo/Card'
import CarouselDemo from '../Demo/Carousel'
import CheckboxDemo from '../Demo/Checkbox'
import CircleProgressDemo from '../Demo/CircleProgress'
import DialogDemo from '../Demo/Dialog'
import EllipsisDemo from '../Demo/Ellipsis'
import IconDemo from '../Demo/Icon'
import InputDemo from '../Demo/InputItem'
import LinearProgressDemo from '../Demo/LinearProgress'
import PanelDemo from '../Demo/Panel'
import PopupDemo from '../Demo/Popup'
import RadiosDemo from '../Demo/Radio'
import SegmentedControlDemo from '../Demo/SegmentedControl'
import SliderDemo from '../Demo/Slider'
import SwitchDemo from '../Demo/Switch'
import TabBarDemo from '../Demo/TabBar'
import TableDemo from '../Demo/Table'
import TabDemo from '../Demo/Tabs'
import TextareaItemDemo from '../Demo/TextareaItem'
import ToastDemo from '../Demo/Toast'
import ScrollerViewDemo from '../Demo/ScrollerView'
function getStyles(){

    return {
        container: {
            background: '#fefefe',
            width: '100%',
        }
    }
}
export default class Demo extends React.Component {
    render() {
        const {style, name: temp, location} = this.props;
        let name = temp
        let isDemo = false
        if(!name && location){
            const pathnames = location.pathname.split('/')
            name = pathnames[2]
            isDemo = pathnames[1] === 'demo'
        }
        const demoStyles = getStyles()
        return (
            <div>
                <MobileNav name={name} isDemo={isDemo}/>
                <div style={demoStyles.container}>
                    {name ===  'Alert'?<AlertDemo/> : null}
                    {name ===  'Arrow'?<ArrowDemo/> : null}
                    {name ===  'Badge'?<BadgeDemo/> : null}
                    {name === 'Button'?<ButtonDemo/> : null}
                    {name === 'Card'?<CardDemo/> : null}
                    {name === 'Carousel'?<CarouselDemo/> : null}
                    {name === 'Checkbox'?<CheckboxDemo/>:null}
                    {name === 'CircleProgress'?<CircleProgressDemo/>:null}
                    {name === 'Dialog'?<DialogDemo/>:null}
                    {name === 'Ellipsis'?<EllipsisDemo/>:null}
                    {name === 'Icon'?<IconDemo/>:null}
                    {name === 'InputItem'?<InputDemo/>:null}
                    {name === 'LinearProgress'?<LinearProgressDemo/>:null}
                    {name === 'Panel'?<PanelDemo/>:null}
                    {name === 'Radio'?<RadiosDemo/>:null}
                    {name === 'Popup'?<PopupDemo/>:null}
                    {name === 'SegmentedControl'?<SegmentedControlDemo/>:null}
                    {name === 'Slider'?<SliderDemo/>:null}
                    {name === 'Switch'?<SwitchDemo/>:null}
                    {name === 'TabBar'?<TabBarDemo/>:null}
                    {name === 'Table'?<TableDemo/>:null}
                    {name === 'Tabs'?<TabDemo/>:null}
                    {name === 'TextareaItem'?<TextareaItemDemo/>:null}
                    {name === 'Toast'?<ToastDemo/>:null}
                    {name === 'ScrollerView'?<ScrollerViewDemo/>: ''}
                </div>
            </div>
            
        )
    }
}