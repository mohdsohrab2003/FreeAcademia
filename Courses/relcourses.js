let relCoursesData=[
    {
        id: 12,
        title: "Java And C++ Complete Course for Beginners 2022",
        img: "../Asset/IMG/Courses-img/course12.jpg",
        category: "Programming",
        link: "https://www.udemy.com/course/java-c-plus-plus-complete-course/",
    },
    {
        id: 13,
        title: "Ethical Hacking: Hacker Methodology",
        img: "../Asset/IMG/Courses-img/course13.jpg",
        category: "Hacking",
        link: "https://www.udemy.com/course/hacker-methodology/",
    },
    {
        id: 14,
        title: "AWS Certified Advanced Networking - Specialty (101 Course)",
        img: "../Asset/IMG/Courses-img/course14.jpg",
        category: "AWS",
        link: "https://www.udemy.com/course/aws-certified-advanced-networking-specialty/",
    },
    {
        id: 15,
        title: "Curso de HostGator 2023: El Hosting Ideal Para WordPress",
        img: "../Asset/IMG/Courses-img/course15.jpg",
        category: "Net & Sys",
        link: "https://www.udemy.com/course/hostgator-wordpress/",
    },
    {
        id: 16,
        title: "Learn Blockchain and Cryptocurrency from Beginning",
        img: "../Asset/IMG/Courses-img/course16.jpg",
        category: "Blockchain",
        link: "https://www.udemy.com/course/blockchain-and-cryptocurrency/",
    },
    {
        id: 17,
        title: "NGO, Orphanage, Elderly Care Homes & Retirement Homes 2.0",
        img: "../Asset/IMG/Courses-img/course17.jpg",
        category: "Health",
        link: "https://www.udemy.com/course/ngo-orphanage-elderly-care-homes/",
    },
]

const relCourses_Container = document.querySelector(".related-course");

window.addEventListener("DOMContentLoaded", () => {
    displayCourseData(relCoursesData);
});

function displayCourseData(relcourses) {
    let displaydata = relcourses.map(function (cat_item) {
        return `<article class="pcourse">
                    <div class="pcourse-img">
                        <img src="${cat_item.img}" alt="">
                    </div>
                    <div class="content">
                        <a href="${cat_item.link}"><h3>${cat_item.title}</h3></a>
                    </div>
                </article>`;
    });
    displaydata = displaydata.join(" ");
    relCourses_Container.innerHTML = displaydata;
}