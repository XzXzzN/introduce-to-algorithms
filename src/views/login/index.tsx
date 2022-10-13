import React from 'react';
import Rubik from '../../components/Rubik';

const index: React.FC<{}> = () => {
    return (
        <div className='xc-login'>
            <div className='reset-rubik'>
                <Rubik />
            </div>
            <div className='login-box'></div>
        </div>
    );
};

export default index;
