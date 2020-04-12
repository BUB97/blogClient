import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';
import { Link } from 'react-router-dom';
import loginStyle from './login.module.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if (e.target.name === 'username') {
            this.setState({ username: e.target.value })
        }
        if (e.target.name === 'password') {
            this.setState({ password: e.target.value })
        }
    }

    handleSubmit() {
        this.props.onLogin(this.state);
    }

    render() {
        return (
            <div className={loginStyle.login}>
                <div className={loginStyle.loginForm}>
                <div className={loginStyle.input}><span className={loginStyle.label}>用户名</span><input type='text' name='username' onChange={this.handleChange} className={loginStyle.inputBox}></input></div>
                <div className={loginStyle.input}><span className={loginStyle.label}>密    码</span><input type='password' name='password' onChange={this.handleChange} className={loginStyle.inputBox}></input></div>
                <Link to="/" className={loginStyle.submit}><button onClick={this.handleSubmit} className={loginStyle.submitButton}>登录</button></Link>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (data) => dispatch(login(data))
    }
}

export default connect(null,mapDispatchToProps)(Login);