import React from 'react';
import Index from '../views/index';
import Login from '../views/login';

const routeList = [
    {
        element: <Index />,
        path: '/'
    },
    {
        element: <Login />,
        path: '/login'
    }
];

export {routeList};
