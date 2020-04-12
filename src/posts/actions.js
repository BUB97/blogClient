import { UPDATE_POSTS } from './actionTypes';
import { get, post } from '../utils/request';

export const getPosts = () => {
    return (dispatch) => {
        get('http://localhost:5000/posts').then(data => {
            if (!data.error) {
                dispatch(updatePosts(data));
            }
        })
    }
}

export const addPost = (newPost) => {
    return (dispatch) => {
        post('http://localhost:5000/posts', newPost).then(data => {
            if (!data.error) {
                dispatch(updatePosts(data));
            }
        })
    }
}

export const deletePost = (post_id) => {
    return (dispatch) => {
        fetch('http://localhost:5000/posts/delete', {
            method: 'post',
            headers: {
                "origin": "http://localhost:3000",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            mode: 'cors',
            body: `id=${post_id}`
        }).then((response) => {
            if (response.status === 200) {
                response.json().then(responseJson => {
                    localStorage.setItem('posts', JSON.stringify(responseJson));
                    dispatch(updatePosts(responseJson));
                })
            }
        })
    }
};

export const updatePosts = (posts) => ({
    type: UPDATE_POSTS,
    posts
})