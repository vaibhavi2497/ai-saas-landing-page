export default function initNavbar() {

    const links = document.querySelectorAll(".menu a");
    const sections = document.querySelectorAll("section, footer");

    function updateActiveLink() {

        let current = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        links.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }

        });

    }

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink);

}