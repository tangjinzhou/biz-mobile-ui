import * as React from 'react';
import {px2rem} from '../../src/util/util';
import {
    Button,
    LinearProgress,
    CircleProgress
} from '../../src/index.tsx';
interface ProgressProps {

}
const styles = {
    progress: {
        width: '90%',
        margin: '20px auto 0',
    },
}
export default class Progress extends React.Component<ProgressProps, any> {
    _table = null;
    state = {progress: 10}
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
                <CircleProgress value={25}/>
                <CircleProgress value={90} color="red"/>

                <CircleProgress value={this.state.progress} size={px2rem(100)} linecap="round"/>
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

