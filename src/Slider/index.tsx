import * as React from 'react';
import * as classNames from 'classnames';

interface SliderProps extends BizuiProps {
    disabled?: boolean,
    max?: number,
    min?: number,
    onChange?: (x:number, y:number)=>void,
    onDragStart?: Function,
    onDragStop?: Function,
    step?: number,
    value?: number,
    defaultValue?: number,
}

export default class Slider extends React.Component<SliderProps, any>{
    static defaultProps = {
        prefixCls: 'biz-slider',
        className: '',
        disabled: false,
        max: 100,
        min: 0,
        onChange: ()=>{},
        onDragStart: ()=>{},
        onDragStop: ()=>{},
        step: 1,
        defaultValue: 0,
    }
    state = {
        dragging: false,
        value: this.props.defaultValue,
    };
    track = null;
    steps = null;
    dragRunning = false;
    stepsWidth = 0;
    stepsOffsetLeft = 0;
    getPercent(value, min, max) {
        let percent = (value - min) / (max - min);
        if (isNaN(percent)) {
            percent = 0;
        }

        return percent;
    }
    componentWillMount() {
        const {
            value,
            defaultValue,
        } = this.props;

        if(typeof value === 'number' && value !== defaultValue) {
            this.setState({
                value: value,
            });
        }
    }
    componentDidMount(){
        this.stepsWidth = this.track.clientWidth;
        this.stepsOffsetLeft = this.steps.getBoundingClientRect().left;
    }
    componentDidUpdate(){
        this.stepsWidth = this.track.clientWidth;
        this.stepsOffsetLeft = this.steps.getBoundingClientRect().left;
    }
    componentWillReceiveProps(nextProps) {
        const value = nextProps.value;
        if (typeof value === 'number' && !this.state.dragging && value !== this.state.value) {
            this.setState({
                value: value,
            });
        }
    }

    handleTouchStart = (event) => {
        if (this.props.disabled) {
            return;
        }

        this.setState({
            dragging: true
        });
        this.setValueFromPosition(event.touches[0].clientX - this.stepsOffsetLeft);
        if (this.props.onDragStart) {
            this.props.onDragStart(event);
        }
        event.preventDefault();
        event.stopPropagation();
    };
    handleTouchMove = (event) => {
        if (this.dragRunning || this.props.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.dragRunning = true;
        let position = event.touches[0].clientX - this.stepsOffsetLeft;
        requestAnimationFrame(() => {
            this.dragRunning = false;
            this.setValueFromPosition(position);
        });
        event.preventDefault();
        event.stopPropagation();
    }
    handleTouchEnd = (event) => {
        if (this.props.disabled) {
            return;
        }
        this.setState({
            dragging: false
        });
        if (this.props.onDragStop) {
            this.props.onDragStop(event);
        }
    }
    setValueFromPosition(position) {
        const positionMax = this.stepsWidth;

        if (position < 0) {
            position = 0;
        } else if (position > positionMax) {
            position = positionMax;
        }

        const {
            step,
            min,
            max,
        } = this.props;

        let value;
        value = position / positionMax * (max - min);
        value = Math.round(value / step) * step + min;
        value = parseFloat(value.toFixed(5));

        if (value > max) {
            value = max;
        } else if (value < min) {
            value = min;
        }
        if (this.state.value !== value) {
            if (this.props.onChange) {
                this.props.onChange(value, this.state.value);
            }
            this.setState({
                value: value,
            });


        }
    }
    render (){
        const {prefixCls, className, min, max, style} = this.props;
        const sliderClass = classNames({
            [`${prefixCls}`]: true,
            [className]: true,
        });
        const percent = this.getPercent(this.state.value, min, max);
        const trackPos = {transform: 'translateX(-' + (1 - percent) * 100 + '%)'};
        const handlePos = {left: percent*100 + '%'};
        return (
            <div className={sliderClass} style={style}>
                <div className={`${prefixCls}-bg`}>
                    <div ref={(c) => this.steps = c} className={`${prefixCls}-steps`}>
                        <div ref={(c) => this.track = c} className={`${prefixCls}-track`} style={trackPos}></div>
                    </div>
                    <div
                         className={`${prefixCls}-handle`}
                         style={handlePos}
                         onTouchCancel={this.handleTouchEnd}
                         onTouchEnd={this.handleTouchEnd}
                         onTouchMove={this.handleTouchMove}
                         onTouchStart={this.handleTouchStart}>
                    </div>
                </div>
            </div>
        );
    }
}