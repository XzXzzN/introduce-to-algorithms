import React from 'react';
import './index.scss';

const loginPath: string = `${window.location.href}/login`;

const Footer = () => {
    return (
        <nav className='header' id='topbar'>
            <span className='algorithms'>
                XCRACKERS
                <span className='web-path'>.com</span>
            </span>
            <span className='login-button'>
                <a href={loginPath} className='button-box'>
                    LOGIN
                </a>
            </span>
        </nav>
    );
};

export default Footer;
