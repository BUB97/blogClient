import { get, post } from '../utils/request';
import { updateUser } from '../header/actions';

export const login = (data) => {
    return (dispatch) => {
        post('http://localhost:5000/login', data).then(data => {
            if (!data.error) {
                if (data.status === 1) {
                    dispatch(updateUser(data));
                }
            } else {
                alert("用户名或密码输入错误");
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        get('http://localhost:5000/logout').then(data => {
            if (!data.error) {
                dispatch(updateUser(data));
            }
        })
    }
}