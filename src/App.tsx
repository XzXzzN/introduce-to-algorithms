/*
 * @Author: Xcracker
 * @Date: 2022-10-13 22:36:54
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-14 00:14:54
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
                        route: {path: string; element: React.ReactElement},
                        index: React.Key | null | undefined
                    ): JSX.Element => (
                        <Route
                            path={route.path}
                            key={index}
                            element={route.element}
                        />
                    )
                )}
            </Routes>
        </div>
    );
};

export default App;
