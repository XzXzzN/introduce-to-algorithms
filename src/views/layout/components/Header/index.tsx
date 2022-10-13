import React from 'react';

const loginPath = `${window.location.origin}/login`;
const Header = () => {
    return (
        <nav className='xc-header' id='topbar'>
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

export default Header;
