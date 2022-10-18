/*
 * @Descripttion:
 * @Author: Xcracker
 * @Date: 2022-10-13 22:36:54
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-18 22:58:06
 */
import React from 'react';

const loginPath: string = `${window.location.href}/login`;

const Footer = () => {
    console.log(abc);
    console.log(bcd);
    const aaa = 0;
    aaa = 1;
    return (
        <nav className='xc-footer' id='bottomBar'>
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
