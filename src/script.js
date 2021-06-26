import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// Group of Objects
const group = new THREE.Group();

// Add to Scene
scene.add(group);

// Create Objects for Group
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000})
);
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00})
);
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff})
);

// Position cubes
cube1.position.x = -2;
cube3.position.x = 2;

group.add(cube1, cube2, cube3);

// Alternative to position: Set X Y Z
group.position.set(0.7, -0.6, 1);

// Scale: Set X Y Z
group.scale.set(2,0.5,0.5);

// Rotation: Step-by-step so we don't get  "Gimbal Lock"
// First X, then Y, then Z
group.rotation.reorder('XYZ');
const qr = Math.PI * 0.25;

// First X, then Y, then Z
group.rotation.set(qr, qr, -qr/2);

// Axes Helper, number inside make axes longer/shorter
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

// SET X Y Z
camera.position.set(0.8,-0.5,9);
// Add to Scene
scene.add(camera);


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
/* FINAL MOMENT, AFTER THIS ANY CHANGE WILL NOT BE VISIBLE */
renderer.render(scene, camera);