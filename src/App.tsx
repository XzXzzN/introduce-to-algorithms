/*
 * @Author: Xcracker
 * @Date: 2022-10-13 22:36:54
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-17 02:11:58
 * @Descripttion:
 */
import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
// import RedBlackTree from './components/RedBlackTree';
import {routeList} from './routes';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Routes>
                {routeList.map(
                    (
                        route: {path: string; element: React.ReactElement; key: string}
                    ): JSX.Element => (
                        <Route
                            path={route.path}
                            key={route.key}
                            element={route.element}
                        />
                    )
                )}
            </Routes>
        </div>
    );
};

export default App;
