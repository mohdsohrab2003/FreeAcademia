
let relCoursesData = [
    {
        id: 1,
        title: "Java And C++ Complete Course for Beginners 2022",
        img: "../Asset/IMG/Courses-img/course12.jpg",
        category: "Programming",
        link: "https://www.udemy.com/course/java-c-plus-plus-complete-course/",
    },
    {
        id: 2,
        title: "Ethical Hacking: Hacker Methodology",
        img: "../Asset/IMG/Courses-img/course13.jpg",
        category: "Hacking",
        link: "https://www.udemy.com/course/hacker-methodology/",
    },
    {
        id: 3,
        title: "AWS Certified Advanced Networking - Specialty (101 Course)",
        img: "../Asset/IMG/Courses-img/course14.jpg",
        category: "AWS",
        link: "https://www.udemy.com/course/aws-certified-advanced-networking-specialty/",
    },
    {
        id: 4,
        title: "Curso de HostGator 2023: El Hosting Ideal Para WordPress",
        img: "../Asset/IMG/Courses-img/course15.jpg",
        category: "Net & Sys",
        link: "https://www.udemy.com/course/hostgator-wordpress/",
    },
    {
        id: 5,
        title: "Learn Blockchain and Cryptocurrency from Beginning",
        img: "../Asset/IMG/Courses-img/course16.jpg",
        category: "Blockchain",
        link: "https://www.udemy.com/course/blockchain-and-cryptocurrency/",
    },
    {
        id: 6,
        title: "NGO, Orphanage, Elderly Care Homes & Retirement Homes 2.0",
        img: "../Asset/IMG/Courses-img/course17.jpg",
        category: "Health",
        link: "https://www.udemy.com/course/ngo-orphanage-elderly-care-homes/",
    },
];

let pCoursesData = [
    {
        id:1,
        title:"Microsoft Word Mastery: Essential Skill for Job and Business",
        img:"../Asset/IMG/Courses-img/course1.jpg",
        category:"Personal Dev",
        link:"Course1.html",
    },
    {
        id: 2,
        title: "UI/UX Design Masterclass with Adobe XD: From Beginner to Pro",
        img: "../Asset/IMG/Courses-img/course2.jpg",
        category: "UI/UX",
        link: "Course2.html",
    },
    {
        id: 3,
        title: "Master Course: Cybersecurity Ransomware Incident Response",
        img: "../Asset/IMG/Courses-img/course4.jpg",
        category: "Hacking",
        link: "https://www.udemy.com/course/cybersecurity-ransomware-incident-response/",
    },
    {
        id: 4,
        title: "50Days of DSA JavaScript Data Structures Algorithms LEETCODE",
        img: "../Asset/IMG/Courses-img/course5.jpg",
        category: "Programming",
        link: "https://www.udemy.com/course/50days-of-dsa-javascript/",
    },
    {
        id: 5,
        title: "Javascript Practicals Crash Course",
        img: "../Asset/IMG/Courses-img/course6.jpg",
        category: "Programming",
        link: "https://www.udemy.com/course/javascript-practicals-crash-course/",
    },
];

const relCoursesContainer = document.querySelector(".related-course");
const pCoursesContainer = document.querySelector(".pcourses");

window.addEventListener("DOMContentLoaded", () => {
    displayCourseData(relCoursesData, relCoursesContainer);
    displayCourseData(pCoursesData, pCoursesContainer);
});

function displayCourseData(courses, container) {
    let displayData = courses.map(function (cat_item) {
        return `<article class="pcourse">
                    <div class="pcourse-img">
                        <img src="${cat_item.img}" alt="">
                    </div>
                    <div class="content">
                        <a href="${cat_item.link}"><h3>${cat_item.title}</h3></a>
                    </div>
                </article>`;
    });
    displayData = displayData.join(" ");
    container.innerHTML = displayData;
}
