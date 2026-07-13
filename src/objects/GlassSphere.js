import * as THREE from "three";

const geometry = new THREE.SphereGeometry(1, 128, 128);

const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,

    transmission: 1,
    transparent: true,

    roughness: 0,
    metalness: 0,

    thickness: 2,

    ior: 1.5,               // Glass ≈ 1.45–1.52

    clearcoat: 1,
    clearcoatRoughness: 0,

    reflectivity: 1,

    attenuationDistance: 0.5,
    attenuationColor: new THREE.Color("#ffffff")
});

const sphere = new THREE.Mesh(geometry, material);

export default sphere;