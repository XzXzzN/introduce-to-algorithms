/*
 * @Author: Xcracker
 * @Date: 2022-11-20 21:31:58
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-11-20 21:52:29
 * @Descripttion:
 */

/**
 * 格式化时间
 * @param {Date} date
 * @param {string} fmt 要格式的格式
 * @return {string} 格式化后的时间
 */
const dateFmt = (date: Date, fmt: string) => {
    // 获取年份
    if (/(y+)/.test(fmt)) {
    // 把数字变成字符串
        const dateY = date.getFullYear() + '';
        // RegExp.$1 在判断中出现过，且是括号括起来的，所以 RegExp.$1 就是 "yyyy"
        fmt = fmt.replace(RegExp.$1, dateY.substr(4 - RegExp.$1.length));
    }
    // 获取其他
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt) && isValidKey(k, o)) {
            const str = o[k] + '';
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? str : padLeftZero(str)
            );
        }
    }
    return fmt;
};
/**
 * 补0
 * @param {string} str
 * @return {string}
 */
const padLeftZero = (str: string) => {
    return ('00' + str).substring(str.length);
};
/**
 * @param {string | number | symbol} key object's key
 * @param {object} object object
 * @return {boolean} boolean
 */
const isValidKey = (
    key: string | number | symbol,
    object: object
): key is keyof typeof object => {
    return key in object;
};

export {dateFmt, isValidKey};
