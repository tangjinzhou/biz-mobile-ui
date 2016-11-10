import React from 'react'

let demoStyles = {
    container: {
        margin: '20px 20px 0',
        backgroundImage: 'url(/App/images/phone.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: 1584/2 + 'px',
        padding: '100px 16px',
        width: '365px',
    }
}
export default class Demo extends React.Component {
    render() {
        const {style} = this.props;
        return (
            <div style={style}>
                <div style={demoStyles.container}></div>
            </div>
        )
    }
}