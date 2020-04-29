import React from 'react';
import Header from './header';
import Footer from './footer';
import {connect} from 'react-redux';
import {checkUserStatus} from '../actions';

import headerStyle from './header.module.css';

const HOC = (WrappedComponent) => {
    const mapDispatchToProps = (dispatch) => {
        return {
            onCheck: () => dispatch(checkUserStatus())
        }
    }

    class WrapComponet extends React.Component {
        componentWillMount(){
            this.props.onCheck();
        }
    
        render() {
            return (
                <div className={headerStyle.box}>
                    <Header />
                    <WrappedComponent {...this.props} />
                    <Footer />
                </div>
            )
        }
    }
    
    return connect(null,mapDispatchToProps)(WrapComponet);
}

export default HOC;