import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {
    Button,
    LinearProgress,
    colors,
} from '@bizfe/biz-mobile-ui';

const styles = {
    progress: {
        width: '90%',
        margin: '20px auto 0',
    },
    circle: {
        display: 'inline-block'
    }
}
export default class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {progress: 10}
    }

    changeProgress(value) {
        if (value < 0) {
            value = 0;
        } else if (value > 100) {
            value = 100;
        }
        this.setState({progress: value});
    }

    render() {
        return (
            <div>
                <LinearProgress style={styles.progress}/>
                <LinearProgress style={Object.assign({},styles.progress,{height: px2rem(15)})}
                                color="#8E24AA"
                                fillColor="#FFF"/>
                <LinearProgress style={styles.progress} mode="determinate" value={this.state.progress}/>
                <Button style={Object.assign({},styles.progress, {display: 'block'})}
                        onTouchTap={()=>this.changeProgress(this.state.progress + 20)}
                        size="small">+ 20</Button>
                <Button style={Object.assign({},styles.progress, {display: 'block'})}
                        onTouchTap={()=>this.changeProgress(this.state.progress - 10)}
                        size="small">- 10</Button>
            </div>
        );
    }
}

