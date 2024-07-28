let coursesData=[
    {
        id:12,
        title:"The Ultimate Filmora Video Editing Course: Beginner to Pro",
        img:"Asset/IMG/Courses-img/course12.jpg",
        category:"Video Editing",
        link:"Courses/Course12.html"
    },
    {
        id:1,
        title:"Microsoft Word Mastery: Essential Skill for Job and Business",
        img:"Asset/IMG/Courses-img/course1.jpg",
        category:"Personal Dev",
        link:"Courses/Course1.html"
    },
    {
        id: 2,
        title: "UI/UX Design Masterclass with Adobe XD: From Beginner to Pro",
        img: "Asset/IMG/Courses-img/course2.jpg",
        category: "UI/UX",
        link: "Courses/Course2.html"
    },
    {
        id: 3,
        title: "Microsoft Excel Comprehensive Guide",
        img: "Asset/IMG/Courses-img/course3.jpg",
        category: "Personal Dev",
        link: "Courses/Course3.html"
    },
    {
        id: 4,
        title: "Automated Machine Learning for Beginners (Google & Apple)",
        img: "Asset/IMG/Courses-img/course4.jpg",
        category: "Hacking",
        link: "Courses/Course4.html",
    },
    {
        id: 5,
        title: "CyberSecurity Bootcamp: The Ultimate Beginner's Course",
        img: "Asset/IMG/Courses-img/course5.jpg",
        category: "Hacking",
        link: "Courses/Course5.html",
    },
    {
        id: 6,
        title: "Learning Python in Just Five Hours: Novice to Ninja",
        img: "Asset/IMG/Courses-img/course6.jpg",
        category: "Programming",
        link: "Courses/Course6.html",
    },
    {
        id: 7,
        title: "Executive Diploma in Engineering Management",
        img: "Asset/IMG/Courses-img/course7.jpg",
        category: "Business",
        link: "Courses/Course7.html",
    },
    {
        id: 8,
        title: "PHP Laravel: Build Travel Agency Management System",
        img: "Asset/IMG/Courses-img/course8.jpg",
        category: "Development",
        link: "Courses/Course8.html",
    },
    {
        id: 9,
        title: "Build, Host & Manage WordPress Websites using AI [10Web]",
        img: "Asset/IMG/Courses-img/course9.jpg",
        category: "WordPress",
        link: "Courses/Course9.html",
    },
    {
        id: 10,
        title: "Mastering Social Media Marketing: Brand Building & Growth",
        img: "Asset/IMG/Courses-img/course10.jpg",
        category: "Marketing",
        link: "Courses/Course10.html",
    },
    {
        id: 11,
        title: "Graphic Design with Photoshop and InDesign: Beginner to Pro",
        img: "Asset/IMG/Courses-img/course11.jpg",
        category: "Graphic Design",
        link:"Courses/Course11.html"
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








