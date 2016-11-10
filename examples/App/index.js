import "@bizfe/biz-mobile-ui/src/styles/app.less";
import './styles/app.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import App from './modules/App';
import Main from './modules/Main';
import API from './modules/Api';
import Demo from './modules/Demo';
import About from './modules/About';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="api(/:name)" component={API}/>
            <Route path="demo/:name" component={Demo}/>
            <Route path="about" component={About}/>
            <Route path="*" component={Main}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
