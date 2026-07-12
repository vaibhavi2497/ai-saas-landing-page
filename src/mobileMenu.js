export default function initMobileMenu() {

    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", () => {

        menu.classList.toggle("show");

        if(menu.classList.contains("show")){
            toggle.innerHTML = "✕";
        }else{
            toggle.innerHTML = "☰";
        }

    });

    menu.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("show");
            toggle.innerHTML="☰";

        });

    });

}