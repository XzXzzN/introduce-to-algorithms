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
                        route: {path: string; element: any},
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
            {/* <RedBlackTree /> */}
        </div>
    );
};

export default App;
