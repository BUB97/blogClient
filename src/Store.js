import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import { reducer as postsReducer } from './posts/index';
import { reducer as userReducer } from './header/index';

const reducer = combineReducers({
    posts: postsReducer,
    currentUser: userReducer
});

const win = window;

const middlewares = [thunk];

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, storeEnhancers);
