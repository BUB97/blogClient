import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import postsStyle from './posts.module.css';
import { Link} from 'react-router-dom';

class AddPost extends React.Component {
    constructor(props){
        super(props);
        this.state={
                id: this.props.posts.length+1,
                title: '',
                content: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        if(e.target.name==='title'){
            this.setState({title:e.target.value})
        }
        if(e.target.name==='content'){
            this.setState({content:e.target.value})
        }
    }

    handleSubmit(){
        this.props.onSave(this.state);
    }

    render() {
        return (
            <div className={postsStyle.addPosts}>
                <div className={postsStyle.postTitle}><span className={postsStyle.label}>标题</span><input type='text' name='title' onChange={this.handleChange} value={this.state.title} className={postsStyle.titleInput}></input></div>
                <div className={postsStyle.postContent}><span className={postsStyle.label}>内容</span><textarea name='content' onChange={this.handleChange} value={this.state.content} className={postsStyle.contentInput}></textarea></div>
                <br />
                <Link to='/posts' className={postsStyle.save}><button type='submit' className={postsStyle.saveButton} onClick={this.handleSubmit}>保存</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (data) => dispatch(addPost(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);