import React from 'react'
import AlertDemo from '../Demo/Alert'
import ArrowDemo from '../Demo/Arrow'
let demoStyles = {
    container: {
        background: '#fefefe',
        height: '590px',
        width: '100%',
    }
}
export default class Demo extends React.Component {
    render() {
        const {style, params: {name}} = this.props;
        return (
            <div style={demoStyles.container}>
                {name ===  'Alert'?<AlertDemo/> : null}
                {name ===  'Arrow'?<ArrowDemo/> : null}
            </div>
        )
    }
}