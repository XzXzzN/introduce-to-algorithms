/*
 * @Author: Xcracker
 * @Date: 2022-10-13 22:36:54
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-14 00:08:41
 * @Descripttion: global header component
 */
import React from 'react';

const loginPath = `${window.location.origin}/login`;
const Header = () => {
    return (
        <nav className='xc-header' id='topBar'>
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
