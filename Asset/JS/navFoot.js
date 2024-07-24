let navData=[
    {
        id:548758468,
        logo:"FreeAcademia",

        navHome:"Home",

        homeLinks:"index.html",
        navCourse:"Courses",
        courselinks:"courses.html",
        navAbout:"About Us",
        aboutlinks:"about.html",
        navContact:"Contact",
        contactlinks:"contact.html",

    }
]

const navs_container = document.querySelector('.nav_container');

window.addEventListener("DOMContentLoaded", () => {
    displayNavData(navData);
    setupMenuToggle();
});

function displayNavData(navs) {
    let displaydata = navs.map(function(cat_item) {
        return `
            <a href="${cat_item.homeLinks}" class="logo">${cat_item.logo}</a>
            <ul class="nav_menu">
                <li><a href="${cat_item.homeLinks}">${cat_item.navHome}</a></li>
                <li><a href="${cat_item.courselinks}">${cat_item.navCourse}</a></li>
                <li><a href="${cat_item.aboutlinks}">${cat_item.navAbout}</a></li>
                <li><a href="${cat_item.contactlinks}">${cat_item.navContact}</a></li>
            </ul>
            <button id="open-menu-btn"><i class="fa-solid fa-bars"></i></button>
            <button id="close-menu-btn" style="display: none;"><i class="fa-solid fa-xmark"></i></button>
        `;
    });
    displaydata=displaydata.join(" ");
    navs_container.innerHTML = displaydata;
}


// ==============Fotter============

let footerData = [
    {
        // footer 1
        id: 54875846823,
        fLogo: "SkillCamp",
        flogolink: "index.html",
        fslogan: "Welcome to our platform, the best place to get premium, high-quality courses that are now available to everyone with 100% off coupons.",
        fbtnlinks: "about.html",

        // footer 2
        quicktext: "Quick Links",
        fhomelinks: "index.html",
        faboutlink: "about.html",
        fcontactlink: "contact.html",
        fcourselinks: "courses.html",
        fhome: "Home",
        fabout: "About Us",
        fcontact: "Contact",
        fcourse: "Our Courses",

        // footer 3
        ptext: "Links",
        plink1: "privacy.html",
        plink2: "terms.html",
        plink3: "refund.html",
        plink4: "dmca.html",
        pptext: "Privacy Policy",
        tactex: "Terms & Conditions",
        rctext: "Refund Policy",
        dctext: "DMCA Policy",

        // footer 4
        context: "Contact Us",
        email1: "FreeAcademia@info.com",
        email2: "FreeAcademia@support.com",

        facebooklink: "",
        instalink: "",
        twitterlik: "",
        linkedlink: "",

        fcopyright: "&copy; 2024 FreeAcademia. All rights reserved."
    }
];

const footer_container = document.querySelector('.footer');

window.addEventListener("DOMContentLoaded", () => {
    displayFooterData(footerData);
});

// function displayFooterData(footer){
//     let displaydata=footer.map(function(cat_item){
//         return ``;
//     });
// }

function displayFooterData(footer) {
    let displaydata = footer.map(function(cat_item) {
        return `
        <div class="container footer-container">
            <div class="footer-1">
                <h4><a href="${cat_item.fhomelinks}">${cat_item.fLogo}</a></h4>
                <p>${cat_item.fslogan}</p>
                <a href="${cat_item.faboutlink}" class="btn btn-primary">Know More</a>
            </div>

            <div class="footer-2">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="${cat_item.fhomelinks}"><i class="fa fa-arrow-right"></i>${cat_item.fhome}</a></li>
                    <li><a href="${cat_item.fcourselinks}"><i class="fa fa-arrow-right"></i>${cat_item.fcourse}</a></li>
                    <li><a href="${cat_item.fcontactlink}"><i class="fa fa-arrow-right"></i>${cat_item.fcontact}</a></li>
                    <li><a href="${cat_item.faboutlink}"><i class="fa fa-arrow-right"></i>${cat_item.fabout}</a></li>
                </ul>
            </div>

            <div class="footer-3">
                <h4>${cat_item.ptext}</h4>
                <ul class="privacy">
                    <li><a href="${cat_item.plink1}">${cat_item.pptext}</a></li>
                    <li><a href="${cat_item.plink2}">${cat_item.tactex}</a></li>
                    <li><a href="${cat_item.plink3}">${cat_item.rctext}</a></li>
                    <li><a href="${cat_item.plink4}">${cat_item.dctext}</a></li>
                </ul>
            </div>

            <div class="footer-4">
                <h4>Contact Us</h4>
                <div class="contact-info">
                    <p><i class="fa fa-envelope"></i>FreeAcademia@info.com</p>
                    <p><i class="fa fa-envelope"></i>FreeAcademia@support.com</p>
                </div>
                <ul class="share">
                    <li><a href="https://www.facebook.com/profile.php?id=100028439742457" target="_blank" class="fa-brands fa-facebook"></a></li>
                    <li><a href="https://twitter.com/MohdSohrab59263" target="_blank" class="fa-brands fa-twitter"></a></li>
                    <li><a href="https://www.instagram.com/mohd_sohrab__23/" target="_blank" class="fa-brands fa-instagram"></a></li>
                    <li><a href="https://www.linkedin.com/in/mohd-sohrab-alam-046422249/" target="_blank" class="fa-brands fa-linkedin"></a></li>
                </ul>
            </div>
        </div>
        <div class="footer-copyright">
            <small>${cat_item.fcopyright}</small>
        </div>`;
    });
    displaydata = displaydata.join(" ");
    footer_container.innerHTML = displaydata;
}


