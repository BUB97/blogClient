import {get} from '../utils/request';

export const checkUserStatus = () => {
    return (dispatch) => {
        get('http://localhost:5000/checkUserStatus').then((data)=>{
            if(!data.error){
                if(data.status===1){
                    dispatch(updateUser(data))
                }else{
                    console.log(data);
                }
            }
        })
    }
}

export const updateUser = (user) => ({
        type: "updateUser",
        user
})