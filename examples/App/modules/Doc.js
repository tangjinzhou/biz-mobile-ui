import React from 'react'
import ReactMarkdown from 'react-markdown'
import marked from 'marked'
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
    smartypants: false
});
export default class Doc extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {doc: ''};
    }
    componentWillMount(){
        this.getDoc(this.props.params.name);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.params.name !== this.props.params.name){
            this.getDoc(nextProps.params.name);
        }
    }
    getDoc = (name)=>{
        let that = this;
        request('/getDoc', {
            name: name
        }).then(function(res){
            that.setState({doc: res.data.doc});
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