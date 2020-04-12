import {UPDATE_USER} from './actionTypes';
import {post} from '../utils/request'

export const login = (data) => {
    return (dispatch) => {
        post('http://localhost:5000/login',data).then(data => {
            if(!data.error){
                sessionStorage.setItem("currentUser",JSON.stringify(data[0]));
                dispatch(updateUser(data[0]));
            }else{
                alert("用户名或密码输入错误");
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        sessionStorage.removeItem("currentUser");
        dispatch(updateUser(null));
    }
}

export const updateUser = (user) => ({
        type: UPDATE_USER,
        user
    })