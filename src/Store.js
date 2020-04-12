import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import { reducer as postsReducer, postsInitValue } from './posts/index';
import { reducer as loginReucer, currentUserInitValue} from './login/index' 

const reducer = combineReducers({
    posts: postsReducer,
    currentUser: loginReucer
});

const win = window;

const middlewares = [thunk];

const initValue = {
    posts: postsInitValue,
    currentUser: currentUserInitValue
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension)?win.devToolsExtension():(f)=>f,
);

export default createStore(reducer,initValue,storeEnhancers);
