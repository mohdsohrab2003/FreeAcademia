// change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll' , window.scrollY>100)
});


// swiper testimonial students
// var swiper = new Swiper(".mySwiper", {
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     autoplay: {
//         delay: 4500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         768: {
//             slidesPerView: 2
//         }
//     }
// });
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
