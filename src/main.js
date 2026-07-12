import "./style.css";
import "./three/threeScene.js";

import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Features from "./components/Features.js";
import Stats from "./components/Stats.js";
import Pricing from "./components/Pricing.js";
import Testimonials from "./components/Testimonials.js";
import FAQ from "./components/FAQ.js";
import CTA from "./components/CTA.js";
import Footer from "./components/Footer.js";
import initFAQ from "./faq.js";
import initAnimations from "./animations.js";
import initNavbar from "./navbar.js"
import initMobileMenu from "./mobileMenu.js";
// import initCursor from "./cursor.js";

document.querySelector("#app").innerHTML = `
  
    ${Navbar()}
    ${Hero()}
    ${Features()}
    ${Stats()}
    ${Pricing()}
   ${Testimonials()}
${FAQ()}
${CTA()}
${Footer()}
`;
initFAQ();
initNavbar();
initMobileMenu();
initAnimations();
// initCursor();