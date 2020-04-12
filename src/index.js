import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import './index.css';
import {view as Posts} from './posts';
import {view as Login} from './login'
import {wrapHOC} from './header/index';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

import store from './Store';

const wrappedPosts = wrapHOC(Posts);
const wrappedLogin = wrapHOC(Login);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
            <Route exact path='/' component={wrappedPosts} />
            <Route path='/posts' component={wrappedPosts} />
            <Route path='/login' component={wrappedLogin} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
