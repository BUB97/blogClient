import React from 'react';
import Posts from './posts.js';
import PostDetail from './postDetail';
import AddPost from './addPost';
import {Route, Switch} from 'react-router-dom';

export default (props) => {
    return (
        <div className='posts_container'>
            <Switch>
            <Route path={props.match.url} exact component={Posts} />
            <Route path={`${props.match.url}/add`} component={AddPost} />
            <Route path={`${props.match.url}/:id`} component={PostDetail} />
            </Switch>
        </div>
    );
}