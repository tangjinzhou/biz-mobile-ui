import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {Carousel, colors} from '@bizfe/biz-mobile-ui';
const slideHeight = px2rem(100);
const styles = {
    slide1: {
        height: slideHeight,
        textAlign: 'center',
        backgroundColor: '#FEA900',
    },
    slide2: {
        height: slideHeight,
        textAlign: 'center',
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        height: slideHeight,
        textAlign: 'center',
        backgroundColor: '#6AC0FF',
    },
}
export default class CarouselDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    commonFunc = (...args) => {
        console.log(args);
    }
    render() {
        return (
            <div>
                <h2>自动轮播</h2>
                <Carousel onChangeIndex={this.commonFunc} autoplay={true}>
                    <div style={styles.slide1}>slide 1</div>
                    <div style={styles.slide2}>slide 2</div>
                    <div style={styles.slide3}>slide 3</div>
                </Carousel>
                <h2>手动且默认选中第二个</h2>
                <Carousel defaultIndex={1} onChangeIndex={this.commonFunc}>
                    <div style={styles.slide1}>slide 1</div>
                    <div style={styles.slide2}>slide 2</div>
                    <div style={styles.slide3}>slide 3</div>
                </Carousel>
            </div>
        );
    }
}

