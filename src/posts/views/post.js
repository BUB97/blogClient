import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import {Link} from 'react-router-dom';
import postsStyle from './posts.module.css';



const Post = ({id, title, content, currentUser, onDelete}) => {
    return (
        <div className={postsStyle.postBox}>
            <Link to={`/posts/${id}`} className={postsStyle.post}>
            <h3 className='post_title'>{title}</h3>
            <p className='post_content'>{content}</p>
            </Link>
            {currentUser?<button className={postsStyle.delete} onClick={onDelete}>删除</button>:null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch,ownProps) => {
    const id = ownProps.id;
    return {
        onDelete : () => dispatch(deletePost(id))
    }
}

Post.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);