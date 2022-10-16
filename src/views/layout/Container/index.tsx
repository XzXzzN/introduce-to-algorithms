/* eslint-disable react/jsx-key */
/*
 * @Author: Xcracker
 * @Date: 2022-10-14 00:17:07
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-17 01:42:19
 * @Descripttion: index container
 */
import React from 'react';
import Card from '../Card/index';
import {algorithmsMap} from '../../../utils/constant';

const container = () => {
    return (
        <div className='xc-container'>
            {algorithmsMap.map(list => {
                return <Card {...list} />;
            })}
        </div>
    );
};
export default container;
