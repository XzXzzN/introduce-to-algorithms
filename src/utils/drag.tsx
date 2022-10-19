/*
 * @Author: Xcracker
 * @Date: 2022-10-19 22:16:56
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-19 23:17:51
 * @Descripttion: 分页拖拽方法, 注意: 盒模型需要flex布局
 */
/**
 * 处理输入参数
 * @param {string} screenLeft 左dom节点数据
 * @param {string} middle 拖拽dom节点数据
 * @param {string} screenRight 右dom节点数据
 * @param {string} box 拖拽盒模型dom节点数据
 * @param {number} minWidthLeft 左dom节点最小宽度
 * @param {number} minWidthRight 右dom节点最小宽度
 */
interface DragParam {
    screenLeft: string;
    middle: string;
    screenRight: string;
    box: string;
    minWidthLeft: number;
    minWidthRight: number;
}

/**
 * 处理输入参数
 * @param {DragParam} dragParam 传入的dom节点数据
 */
export function dragDiv(dragParam: DragParam): void {
    const {
        screenLeft,
        middle,
        box,
        screenRight,
        minWidthLeft,
        minWidthRight
    } = dragParam;
    const mid: HTMLElement = document.getElementById(middle)!;
    const ld: HTMLElement = document.getElementById(screenLeft)!;
    const rd: HTMLElement = document.getElementById(screenRight)!;
    const bd: HTMLElement = document.getElementById(box)!;
    mid.onmousedown = e => {
        const x = e.clientX;
        document.onmousemove = evt => {
            const midLen = mid.offsetWidth;
            const endX = evt.clientX;
            const expBox = bd.clientWidth - midLen;
            let moveLen = mid.offsetLeft + (endX - x);
            moveLen < minWidthLeft && (moveLen = minWidthLeft);
            moveLen > expBox - minWidthRight && (moveLen = expBox - minWidthRight);
            mid.style.left = moveLen + 'px';
            ld.style.width = moveLen + 'px';
            rd.style.width = (moveLen - midLen) + 'px';
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
}
