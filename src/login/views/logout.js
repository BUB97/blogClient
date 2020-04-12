import React from 'react';
import {logout} from '../actions';
import { connect } from 'react-redux';
import loginStyle from './login.module.css';

const Logout = ({onLogout}) => {
    return (
        <div>
            <button onClick={onLogout} className={loginStyle.logoutButton}>注销</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(null,mapDispatchToProps)(Logout);