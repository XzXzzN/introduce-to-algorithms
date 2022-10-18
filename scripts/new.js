/*
 * @Author: Xcracker
 * @Date: 2022-10-13 22:36:54
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-18 01:02:19
 * @Descripttion: create new component file
 */
'use strict';

process.on('exit', () => {
    console.log();
});

if (!process.argv[2]) {
    console.error('[组件名]必填 - Please enter new component name');
    process.exit(1);
}

if (encodeURIComponent(process.argv[2]).indexOf('%') > -1) {
    console.error('[组件名]禁止包含中文或特殊字符 - Chinese or special characters are not allowed in component name');
    process.exit(1);
}

const compoName = process.argv[2];
// const uppercamelcase = require('uppercamelcase');
// const CompoName = uppercamelcase(compoName);

const path = require('path');
// const fs = require('fs');
// const fileSave = require('file-save');
// const { type } = require('os');
const stylePath = path.resolve(__dirname, '../src/styles');
const appPath = path.resolve(__dirname, '../');
const files = [
    {
        filename: 'App.scss',
        content: `@import './styles/${compoName}.scss';`,
        path: appPath,
        type: 'append'
    },
    {
        filename: `${compoName}.scss`,
        content: `@import './mixins/mixins.scss';
@include n(${compoName}) {
}`,
        path: stylePath,
        type: 'new'
    }
];

/* if (let i = 0; i < files.length; ++i) {
    const obj = {
        new: () => {

        },
        append: () => {

        }
    };
    obj[files[i].type];
}
 */
