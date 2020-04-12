import React from 'react';
import Header from './header';
import Footer from './footer';
import headerStyle from './header.module.css';

const WrapComponet = (WrappedComponent) => {
    return (props) => (
        <div className={headerStyle.box}>
            <Header />
            <WrappedComponent {...props}/>
            <Footer />
        </div>
    )
}

export default WrapComponet;