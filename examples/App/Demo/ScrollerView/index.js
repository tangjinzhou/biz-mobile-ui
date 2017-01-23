import * as React from 'react';
import {px2rem, htmlFontSize} from '@bizfe/biz-mobile-ui/build/util/util';
import {ScrollerView} from '@bizfe/biz-mobile-ui';

const styles = {
    ul: {

    },
    li: {
        padding: px2rem(20),
        textAlign: 'center',
        borderBottom: '1px solid #ddd'
    },
    loading: {
        padding: px2rem(10),
        textAlign: 'center',
    }
}
export default class ScrollerViewDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            loadingMore: false,
        }
    }
    data = [...Array(10)]
    loading = false
    onRefresh=()=> {
        console.log('onRefresh');
        this.setState({ refreshing: true });
        this.onAjax('refresh');
    }
    onAjax=(type)=> {
        setTimeout(() => {
            type === 'loadingMore' &&  (this.data = this.data.concat([...Array(10)]))
            this.setState({
                refreshing: false,
                loadingMore: false,
            }, () => this.loading = false);
        }, 1000);
    }
    onEndReached=()=> {
        if(!this.loading) {
            this.loading = true;
            console.log('onEndReached 数据加载中');
            this.setState({ loadingMore: true });
            this.onAjax('loadingMore');
        }
    }
    render() {
        const {refreshing, loadingMore} = this.state;
        return (
            <ScrollerView
                onRefresh={this.onRefresh}
                refreshOption={{
                                    distanceToRefresh: parseFloat(px2rem(50)) * htmlFontSize,
                                    refreshing: refreshing
                                    }}
                onEndReached={this.onEndReached}
                style={{height: px2rem(400)}}
            >
                <ul>
                    {this.data.map((val, index)=><li style={styles.li} key={ '_' + index}>{index}</li>)}
                </ul>
                {loadingMore ? <p style={styles.loading}>加载更多...</p> : ''}
            </ScrollerView>
        );
    }
}