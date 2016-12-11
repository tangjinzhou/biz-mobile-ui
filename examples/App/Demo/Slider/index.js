import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Slider, colors} from '@bizfe/biz-mobile-ui';

export default class SliderDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 60}
    }
    commonFunc = (value) => {
        this.setState({value: value})
    }
    render() {
        return (
            <div style={{padding: px2rem(20)}}>
                <p>{this.state.value}</p>
                <Slider
                    defaultValue={60}
                    min={10}
                    max={99}
                    step={0.1}
                    onChange={this.commonFunc}
                    onDragStart={this.commonFunc}
                    onDragStop={this.commonFunc}
                />
                <Slider
                    defaultValue={20}
                    step={10}
                />
                <Slider
                    defaultValue={20}
                    disabled
                />
            </div>
        );
    }
}

