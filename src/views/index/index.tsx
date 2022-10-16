/*
 * @Author: Xcracker
 * @Date: 2022-10-13 22:36:54
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-14 00:47:57
 * @Descripttion:
 */
import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Container from '../layout/Container';

const index: React.FC<{}> = () => {
    return (
        <>
            <Header />
            <Container />
            <Footer />
        </>
    );
};

export default index;
