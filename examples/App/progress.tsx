import * as React from 'react';
import {px2rem} from '../../src/util/util';
import {
    Button,
    LinearProgress
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
    changeProgress(percent) {
        if (percent < 0) {
            percent = 0;
        } else if (percent > 100) {
            percent = 100;
        }
        this.setState({progress: percent});
    }

    render() {
        return (
            <div>
                <LinearProgress style={styles.progress}/>
                <LinearProgress style={Object.assign({},styles.progress,{height: px2rem(15)})}
                                color="#8E24AA"
                                fillColor="#FFF"/>
                <LinearProgress style={styles.progress} mode="determinate" percent={this.state.progress}/>
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

