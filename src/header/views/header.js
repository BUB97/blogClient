import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {logout as Logout} from '../../login';
import headerStyle from './header.module.css';

const Header = ({currentUser}) => {
    return (
        <div className={headerStyle.header}>
            <Link to='/' className={headerStyle.title}>You Name's Blog</Link>
            {currentUser?<div className={headerStyle.userInfo}><div className={headerStyle.welcome}>你好,{currentUser.username} </div><div className={headerStyle.logout}><Logout /></div></div>:<Link to='/login' className={headerStyle.loginLink}>登录</Link>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Header);