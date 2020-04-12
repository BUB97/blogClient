import {UPDATE_POSTS} from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE_POSTS:
            return action.posts
        default:
            return state;
    }
}