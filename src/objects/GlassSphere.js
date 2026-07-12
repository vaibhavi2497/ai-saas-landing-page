import * as THREE from "three";

const geometry = new THREE.SphereGeometry(1, 64, 64);

const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,

    transmission: 1,
    transparent: true,
    opacity: 1,

    roughness: 0,
    metalness: 0,

    thickness: 5,
    ior: 1.52,

    clearcoat: 1,
    clearcoatRoughness: 0,

    envMapIntensity: 2
});

const sphere = new THREE.Mesh(geometry, material);

export default sphere;
