// change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll' , window.scrollY>100)
});

function setupMenuToggle() {
    const menu = document.querySelector(".nav_menu");
    const menubtn = document.querySelector("#open-menu-btn");
    const closebtn = document.querySelector("#close-menu-btn");

    menubtn.addEventListener('click', () => {
        menu.style.display = "flex";
        closebtn.style.display = "inline-block";
        menubtn.style.display = "none";
    });

    closebtn.addEventListener('click', () => {
        menu.style.display = "none";
        closebtn.style.display = "none";
        menubtn.style.display = "inline-block";
    });
}

