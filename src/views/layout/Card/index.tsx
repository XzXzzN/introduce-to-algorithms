/*
 * @Author: Xcracker
 * @Date: 2022-10-14 00:50:55
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-17 01:00:41
 * @Descripttion:
 */
import React from 'react';

const card = (props: {name: string; gif: string; png: string}) => {
    const {png, gif, name} = props;
    console.log(png, gif, name);
    return <div className='xc-card'></div>;
};

export default card;
