import * as React from 'react';
import {px2rem} from '@bizfe/biz-mobile-ui/build/util/util';
import {
    Button,
    CircleProgress,
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
                <CircleProgress style={styles.circle} value={25} color={colors.green_500}/>
                <CircleProgress style={styles.circle} value={50} color={colors.red_500} size={px2rem(70)}/>
                <CircleProgress style={styles.circle} value={this.state.progress} size={px2rem(100)} linecap="round"/>
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

