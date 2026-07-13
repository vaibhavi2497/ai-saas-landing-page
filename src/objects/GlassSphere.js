import * as THREE from "three";

const geometry = new THREE.SphereGeometry(1, 64, 64);

const material = new THREE.MeshPhysicalMaterial({
     color: 0xffffff,
    roughness: 0.05,           // Slightly above 0 adds realistic micro-surface glare
    transmission: 1.0,         // Pure transmissive glass
    thickness: 1.5,            // Bends light through the sphere volume
    ior: 1.5,                  // Standard index of refraction for glass
    clearcoat: 1.0,            // Extra outer reflective layer
    clearcoatRoughness: 0.0,
    envMapIntensity: 1.5       // Boosts the HDR reflections on the glass surface
});


const sphere = new THREE.Mesh(geometry, material);

export default sphere;
