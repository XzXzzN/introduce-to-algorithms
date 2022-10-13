import React, {useEffect} from 'react';
import * as THREE from 'three';

// 设置
const scene = new THREE.Scene();

// 相机
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
// 渲染器
const renderer = new THREE.WebGLRenderer();
// 渲染范围
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
const resizeRubik = () => {
    // 重置渲染器输出画布canvas尺寸
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
    camera.aspect = window.innerWidth / window.innerHeight;
    // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
    // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
    // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
    camera.updateProjectionMatrix();
};
const rubik: React.FC<{}> = () => {
    useEffect(() => {
        const canvasTag = document.getElementById(
            'canvas-rubik'
        ) as HTMLInputElement;
        canvasTag.appendChild(renderer.domElement);
        animate();
        // 监听浏览器窗口变动
        window.addEventListener('resize', resizeRubik, false);
        return function cleanUp() {
            window.removeEventListener('resize', resizeRubik, false);
        };
    });

    return (
        <div className='xc-rubik'>
            <div className='canvas' id='canvas-rubik'></div>
        </div>
    );
};

export default rubik;
