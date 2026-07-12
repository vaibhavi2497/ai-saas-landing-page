
// export default function initCursor() {

//     const cursor = document.querySelector(".cursor");

// let mouseX = 0;
// let mouseY = 0;

// let x = 0;
// let y = 0;

// window.addEventListener("mousemove", (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// // Smooth cursor
// function animate() {
//     x += (mouseX - x) * 0.18;
//     y += (mouseY - y) * 0.18;

//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";

//     requestAnimationFrame(animate);
// }

// animate();

// // Magnetic effect
// document.querySelectorAll("button, a").forEach((item) => {

//     item.addEventListener("mouseenter", () => {
//         cursor.classList.add("active");
//     });

//     item.addEventListener("mouseleave", () => {
//         cursor.classList.remove("active");

//         item.style.transform = "";
//     });

//     item.addEventListener("mousemove", (e) => {

//         const rect = item.getBoundingClientRect();

//         const dx = e.clientX - (rect.left + rect.width / 2);
//         const dy = e.clientY - (rect.top + rect.height / 2);

//         item.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
//     });
// });
// }