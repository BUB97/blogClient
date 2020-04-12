import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
import Post from './post';
import postsStyle from './posts.module.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
    componentWillMount(){
        this.props.onLoad();
    }
    render() {
        if (this.props.posts) {
            return (
                <div className={postsStyle.container}>
                <div className={postsStyle.nav}></div>
                <div className={postsStyle.posts}>
                    {this.props.currentUser?<Link to='/posts/add' className={postsStyle.addLink}><button className={postsStyle.add}>+</button></Link>:null}
                    {
                        this.props.posts.map((post) => (
                            <Post
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                content={post.content.slice(0, 100)}
                            />
                        ))
                    }
                </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    {this.props.currentUser?<Link to='/posts/add'><button>+</button></Link>:null}
                    <span>还没有文章😵</span>
                </div>
            )
        }
    }
}
Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        currentUser: state.currentUser
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onLoad: getPosts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);