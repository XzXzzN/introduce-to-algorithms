/*
 * @Author: Xcracker
 * @Date: 2022-10-13 22:36:54
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-11-20 21:57:41
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

const componentJsonPath = path.resolve(__dirname, '../components.json');

const components = require(componentJsonPath);

if (components[process.argv[2]]) {
    console.error('该组件名已存在！请更换组件名');
    process.exit(1);
}

const compoName = process.argv[2];
// const uppercamelcase = require('uppercamelcase');
// const CompoName = uppercamelcase(compoName);

const path = require('path');
const fs = require('fs');
const util = require('util');
const stylePath = path.resolve(__dirname, '../src/styles');
const appPath = path.resolve(__dirname, '../');
const testPath = path.resolve(__dirname, '../src/test/unit');

// const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const fileStat = util.promisify(fs.stat);
const appendFile = util.promisify(fs.appendFile);


const readdirSync = (p, a = []) => {
    if (fs.statSync(p).isDirectory()) {
        fs.readdirSync(p).map(f => readdirSync(a[a.push(path.join(p, f)) - 1], a));
    }
    return a;
};

const viewFiles = readdirSync(path.resolve(__dirname, '../src/views'));
const componentFiles = readdirSync(path.resolve(__dirname, '../src/components'));

const allFiles = viewFiles.concat(componentFiles).filter(file => {
    return file.indexOf('index.tsx') > -1;
});

const regExpFiles = {};
allFiles.forEach(file => {
    const content = file.split('\\');
    const obj = {
        [content[content.length - 2]]: file
    };
    Object.assign(regExpFiles, obj);
});

deleteFolderRecursive = url => {
    let files = [];
    // 判断给定的路径是否存在
    if (fs.existsSync(url)) {
    // 返回文件和子目录的数组
        files = fs.readdirSync(url);
        files.forEach((file, index) => {
            // var curPath = url + "/" + file;
            const curPath = path.join(url, file);
            // fs.statSync同步读取文件夹文件，如果是文件夹，在重复触发函数
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
                // 是文件delete file
            }
            else {
                fs.unlinkSync(curPath);
            }
        });
        // 清除文件夹
        fs.rmdirSync(url);
    }
    else {
        console.log('给定的路径不存在，请给出正确的路径');
    }
};
deleteFolderRecursive(componentJsonPath);

const files = [
    {
        filename: 'App.scss',
        content: `@import './styles/${compoName}.scss';`,
        path: appPath
    },
    {
        filename: `${compoName}.scss`,
        content: `@import './mixins/mixins.scss';
@include n(${compoName}) {
}`,
        path: stylePath
    },
    {
        filename: `${compoName}.spec.js`,
        content: ``,
        path: testPath
    },
    {
        filename: `components.json`,
        content: `regExpFiles`,
        path: componentJsonPath
    }
];
files.forEach(ele => {
    fileStat(ele.path)
        .then(() => {
            appendFile(ele.path, `${ele.content}`).then(() => {
                console.log(`append ${ele.filename} ${ele.content}`);
            });
        })
        .catch(() => {
            writeFile(ele.path, `${ele.content}`).then(() => {
                console.log(`write ${ele.filename}: ${ele.content}`);
            });
        });
});

