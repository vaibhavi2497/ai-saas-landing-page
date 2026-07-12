import * as THREE from "three";

const geometry = new THREE.SphereGeometry(1, 64, 64);

const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 0.9,
    opacity: 1,
    transparent: true,

    roughness: 0.1,
    metalness: 0,

    thickness: 2,
    ior: 1.5,

    clearcoat: 1,
    clearcoatRoughness: 0,

    envMapIntensity: 2
});

const sphere = new THREE.Mesh(geometry, material);

export default sphere;
