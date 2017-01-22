import React from 'react'
import marked from 'marked'
import highlight from 'highlight.js'
import request from '../request';
import { Link, History } from 'react-router'
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    }
});
export default class Doc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {doc: ''};
        this._isMounted = true;
    }
    componentWillMount(){
        this.getDoc(this.props.name);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.name !== this.props.name){
            this.getDoc(nextProps.name);
        }
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    getDoc = (name)=>{
        let that = this;
        request('/getDoc', {
            name: name
        }).then(function(res){
            if(that._isMounted) {
                that.setState({doc: res.data.doc});
            }
        })
    }
    render() {
        const {style} = this.props;
        return (
            <div style={style}>
                <div className="markdown" dangerouslySetInnerHTML={{__html: marked(this.state.doc)}} />
            </div>
        )
    }
}