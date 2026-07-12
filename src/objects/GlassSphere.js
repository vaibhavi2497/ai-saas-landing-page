import * as THREE from "three";

const geometry = new THREE.SphereGeometry(1, 64, 64);

const material = new THREE.MeshNormalMaterial();

const sphere = new THREE.Mesh(geometry, material);

export default sphere;
