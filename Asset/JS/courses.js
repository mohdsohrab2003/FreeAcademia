let coursesData=[
    {
        id:1,
        title:"ChatGPT Prompt Engineering Mastery",
        img:"Asset/IMG/Courses-img/course1.jpg",
        category:"AI",
        link:"https://www.udemy.com/course/ai-powered-side-hustles/?couponCode=FreeCoupon",
    },
    {
        id: 2,
        title: "Ethical Hacking: Linux Intrusion Essentials",
        img: "Asset/IMG/Courses-img/course2.jpg",
        category: "Hacking",
        link: "https://www.udemy.com/course/linux-intrusion-essentials/",
    },
    {
        id: 3,
        title: "Responsive Admin DashBoard UI Design",
        img: "Asset/IMG/Courses-img/course3.jpg",
        category: "UI/UX",
        link: "https://www.udemy.com/course/responsive-admin-dashboard-ui-design/",
    },
    {
        id: 4,
        title: "Master Course: Cybersecurity Ransomware Incident Response",
        img: "Asset/IMG/Courses-img/course4.jpg",
        category: "Hacking",
        link: "https://www.udemy.com/course/cybersecurity-ransomware-incident-response/",
    },
    {
        id: 5,
        title: "50Days of DSA JavaScript Data Structures Algorithms LEETCODE",
        img: "Asset/IMG/Courses-img/course5.jpg",
        category: "Programming",
        link: "https://www.udemy.com/course/50days-of-dsa-javascript/",
    },
    {
        id: 6,
        title: "Javascript Practicals Crash Course",
        img: "Asset/IMG/Courses-img/course6.jpg",
        category: "Programming",
        link: "https://www.udemy.com/course/javascript-practicals-crash-course/",
    },
    {
        id: 7,
        title: "Blender Essential: From Beginner to 3D Masterclass",
        img: "Asset/IMG/Courses-img/course7.jpg",
        category: "Game Dev",
        link: "https://www.udemy.com/course/blender-essential/",
    },
    {
        id: 8,
        title: "Learn Blueprints Programming for Unreal Engine (हिंदी में)",
        img: "Asset/IMG/Courses-img/course8.jpg",
        category: "Game Dev",
        link: "https://www.udemy.com/course/blueprints-programming-unreal-engine-hindi/",
    },
    {
        id: 9,
        title: "Critical Thinking, Decision Analysis & Problem Solving",
        img: "Asset/IMG/Courses-img/course9.jpg",
        category: "Per Dev",
        link: "https://www.udemy.com/course/critical-thinking-decision-analysis/",
    },
    {
        id: 10,
        title: "Figma Design Course 2023. Your Website from Start to Finish",
        img: "Asset/IMG/Courses-img/course10.jpg",
        category: "UI/UX",
        link: "https://www.udemy.com/course/figma-design-course/",
    },
    {
        id: 11,
        title: "AWS Certified Cloud Practitioner Foundational 101 Course",
        img: "Asset/IMG/Courses-img/course11.jpg",
        category: "AWS",
        link: "https://www.udemy.com/course/aws-certified-cloud-practitioner/",
    },
    {
        id: 12,
        title: "Java And C++ Complete Course for Beginners 2022",
        img: "Asset/IMG/Courses-img/course12.jpg",
        category: "Programming",
        link: "https://www.udemy.com/course/java-c-plus-plus-complete-course/",
    },
    {
        id: 13,
        title: "Ethical Hacking: Hacker Methodology",
        img: "Asset/IMG/Courses-img/course13.jpg",
        category: "Hacking",
        link: "https://www.udemy.com/course/hacker-methodology/",
    },
    {
        id: 14,
        title: "AWS Certified Advanced Networking - Specialty (101 Course)",
        img: "Asset/IMG/Courses-img/course14.jpg",
        category: "AWS",
        link: "https://www.udemy.com/course/aws-certified-advanced-networking-specialty/",
    },
    {
        id: 15,
        title: "Curso de HostGator 2023: El Hosting Ideal Para WordPress",
        img: "Asset/IMG/Courses-img/course15.jpg",
        category: "Net & Sys",
        link: "https://www.udemy.com/course/hostgator-wordpress/",
    },
    {
        id: 16,
        title: "Learn Blockchain and Cryptocurrency from Beginning",
        img: "Asset/IMG/Courses-img/course16.jpg",
        category: "Blockchain",
        link: "https://www.udemy.com/course/blockchain-and-cryptocurrency/",
    },
    {
        id: 17,
        title: "NGO, Orphanage, Elderly Care Homes & Retirement Homes 2.0",
        img: "Asset/IMG/Courses-img/course17.jpg",
        category: "Health",
        link: "https://www.udemy.com/course/ngo-orphanage-elderly-care-homes/",
    },
    {
        id: 18,
        title: "STOP HEART ATTACKS AND STROKES IN WOMEN.",
        img: "Asset/IMG/Courses-img/course18.jpg",
        category: "Health",
        link: "https://www.udemy.com/course/stop-heart-attacks-strokes-women/",
    },
    {
        id: 19,
        title: "Componer Musica Con İnteligencia Artificial",
        img: "Asset/IMG/Courses-img/course19.jpg",
        category: "AI",
        link: "https://www.udemy.com/course/componer-musica-con-ia/",
    },
    {
        id: 20,
        title: "Music Production with FL Studio",
        img: "Asset/IMG/Courses-img/course20.jpg",
        category: "Music",
        link: "https://www.udemy.com/course/music-production-with-fl-studio/",
    },
]


const course_container = document.querySelector('.miancontainer-courses');
const ulEl = document.querySelector('ul');
const btnSearch = document.querySelector('.btn-search');
const inputEl = document.querySelector('.form-control');

window.addEventListener("DOMContentLoaded", () => {
    displayMovieData(coursesData); // displaying the data in the DOM
    setupCategoryButtons(coursesData);
    setupPagination(coursesData);
});

function setupCategoryButtons(courseData) {
    // getting unique genres
    const categoriesss = courseData.reduce((values, item) => {
        if (!values.includes(item.category)) values.push(item.category);
        return values;
    }, ["All"]);
    
    const categoryBtn = categoriesss.map(category => 
        `<li data-id="${category}">${category}</li>`
    ).join("");
    ulEl.innerHTML = categoryBtn;

    // links for category
    const linkEl = document.querySelectorAll("li");
    linkEl.forEach(link => {
        link.addEventListener("click", (e) => {
            const category = e.target.dataset.id;
            const filteredCourse = category === "All" ? courseData : courseData.filter(maincourse => maincourse.category === category);
            displayMovieData(filteredCourse);
            setupPagination(filteredCourse);
        });
    });
}


function displayMovieData(courses) {
    let displayData = courses.map(cat_item => 
        `<article class="maincourse">
                <div class="course-img">
                    <img src="${cat_item.img}" alt="">
                </div>
                <div class="course-info">
                    <div class="free-Price">
                        <p class="free">${cat_item.category}</p>
                        <p class="free">Free</p>
                    </div>
                    <h4>${cat_item.title}</h4>
                    <a href="${cat_item.link}" class="btn btn-primary">Learn More</a>
                </div>
            </article>`
    ).join("");
    course_container.innerHTML = displayData;
}

btnSearch.addEventListener("click", () => {
    let searchValue = inputEl.value.trim();
    if (searchValue !== "") {
        let searchResults =coursesData.filter(data => 
            data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            data.category.toLowerCase().includes(searchValue.toLowerCase())
        );
        displayMovieData(searchResults);
        setupPagination(searchResults);
        inputEl.value = "";
    } else {
        alert("Please enter a search term");
    }
});


function setupPagination(courses) {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = ""; // Clear previous pagination

    function getPageList(totalPages, page, maxLength) {
        function range(start, end) {
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }

        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

        if (totalPages <= maxLength) {
            return range(1, totalPages);
        }

        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }

        return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
    }

    $(function() {
        var numberOfItems = courses.length;
        var limitPerPage = 8; // How many card items visible per page 
        var totalPages = Math.ceil(numberOfItems / limitPerPage);
        var paginationSize = 7;  // How many elements to show in the pagination
        var currentPage;

        function showPage(whichPage) {
            if (whichPage < 1 || whichPage > totalPages) return false;
            currentPage = whichPage;
            $(".miancontainer-courses .maincourse").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
            $(".pagination li").slice(1, -1).remove();

            getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dot-page")
                         .toggleClass("active", item === currentPage)
                         .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "..."))
                         .insertBefore(".next-page");
            });

            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPages);
            return true;
        }

        $(".pagination").append(
            $("<li>").addClass("page-item").addClass("previous-page")
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
            $("<li>").addClass("page-item").addClass("next-page")
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
        );

        $(".miancontainer-courses").show();
        showPage(1);

        $(document).on("click", ".pagination li.current-page:not(.active)", function() {
            return showPage(+$(this).text());
        });

        $(".next-page").on("click", function() {
            return showPage(currentPage + 1);
        });
        $(".previous-page").on("click", function() {
            return showPage(currentPage - 1);
        });
    });
}








