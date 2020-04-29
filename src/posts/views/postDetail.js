import React from 'react';
import { get } from '../../utils/request';
import postsStyle from './posts.module.css';

class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
        this.refreshPost = this.refreshPost.bind(this);
    }

    componentWillMount() {
        this.refreshPost();
    }

    refreshPost() {
        const { id } = this.props.match.params;
        get(`http://localhost:5000/posts/${id}`).then(data => {
            if (!data.error && data.length === 1) {
                this.setState({
                    post: data[0]
                });
            }
        })
    }

    render() {
        if (this.state.post) {
            const { title, content } = this.state.post;
            return (
                <div className={postsStyle.postDetail}>
                    <h1 className={postsStyle.title}>{title}</h1>
                    <p className={postsStyle.content}>{content}</p>
                </div>
            )
        }
        else{
            return <div className={postsStyle.postDetail}></div>;
        }
    }

}

export default PostDetail