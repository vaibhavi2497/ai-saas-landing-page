import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

import scene from "./scene.js";
import camera from "./camera.js";
import renderer from "./renderer.js";
import sphere from "../objects/GlassSphere.js";
import controls from "./control.js";
import composer from "./postprocessing.js";
import mouse from "./mouse.js";

scene.add(sphere);

sphere.position.set(2.5, 0.5, 0);

// Ambient Light
const ambientLight = new THREE.AmbientLight(
    0xffffff,
    0.6
);

scene.add(ambientLight);

// Directional Light
const directionalLight = new THREE.DirectionalLight(
    0xffffff,
    3
);

directionalLight.position.set(5, 5, 5);

scene.add(directionalLight);

// Point Light
const pointLight = new THREE.PointLight(
    "#6d7cff",
    20
);

pointLight.position.set(
    -3,
    2,
    4
);

scene.add(pointLight);

// Animation Loop
const clock = new THREE.Clock();

function animate() {

    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();
    sphere.position.x += (mouse.x * 2 - sphere.position.x) * 0.05;
    sphere.position.y += (mouse.y * 1.5 - sphere.position.y) * 0.05;
    // sphere.position.y = Math.sin(elapsed) * 0.2;
    sphere.rotation.y += 0.003;

    controls.update();

    composer.render();
}


const rgbeLoader = new RGBELoader();

rgbeLoader.load("/hdr/royal.hdr", (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;

    scene.environment = texture;

    // Temporary test
    scene.background = texture;
});

animate();

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    composer.setSize(window.innerWidth, window.innerHeight);

});
