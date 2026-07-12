import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import camera from "./camera.js";
import renderer from "./renderer.js";

const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Disable zoom if you want
// controls.enableZoom = false;

// Disable panning
controls.enablePan = false;

export default controls;