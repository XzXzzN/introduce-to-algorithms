/*
 * @Author: Xcracker
 * @Date: 2022-10-17 01:57:46
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-18 23:06:32
 * @Descripttion:
 */
const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let folderPath = '';
// let createType = 'F';

readline.question(`please input the folder name you need create: `, path => {
    folderPath = path;
    readline.question(
        'do you want to create folder or a file ? (F/f)',
        type => {
            if (type === 'F' || type === 'f') {
                createType = type;
            }
            readline.close();
        }
    );
});

const createFile = fs.WriteStream;

createFile(folderPath);
