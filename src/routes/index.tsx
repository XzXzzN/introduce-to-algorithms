/*
 * @Author: Xcracker
 * @Date: 2022-10-13 22:36:54
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-17 02:11:27
 * @Descripttion: route file
 */
import React from 'react';
import Index from '../views/index';
import Login from '../views/login';

const routeList = [
    {
        element: <Index />,
        path: '/',
        key: 'index'
    },
    {
        element: <Login />,
        path: '/login',
        key: 'login'
    }
];

export {routeList};
