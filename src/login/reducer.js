import {UPDATE_USER} from './actionTypes';

export default (state = null, action) => {
    switch(action.type){
        case UPDATE_USER:
            return action.user
        default:
            return state
    }
}