import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initAnimations() {

    // Navbar Animation
    gsap.from(".navbar", {
        y: -80,
        opacity: 0,
        duration: 1
    });

    // Hero Animation
    gsap.from(".hero .content", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3
    });

    // Features Animation
    gsap.utils.toArray(".feature-card").forEach((card) => {
        gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 1,

            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    // Stats Animation
    gsap.utils.toArray(".stat-card").forEach((card) => {
        gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 1,

            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        });
    });

    // Pricing Animation
    gsap.utils.toArray(".pricing-card").forEach((card) => {
        gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 1,

            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        });
    });

    // Testimonials Animation
    gsap.utils.toArray(".testimonial-card").forEach((card) => {
        gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 1,

            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            }
        });
    });

    // FAQ Animation
    gsap.utils.toArray(".faq-item").forEach((item) => {
        gsap.from(item, {
            y: 60,
            opacity: 0,
            duration: 0.8,

            scrollTrigger: {
                trigger: item,
                start: "top 90%"
            }
        });
    });

    // CTA Animation
    gsap.from(".cta-box", {
        scale: 0.9,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
            trigger: ".cta",
            start: "top 80%"
        }
    });

    // Footer Animation
    gsap.from(".footer", {
        opacity: 0,
        y: 50,
        duration: 1,

        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%"
        }
    });

}