 let popCoursesData=[
    {
        id:1,
        title:"ChatGPT Prompt Engineering Mastery",
        img:"Asset/IMG/Courses-img/course1.jpg",
        Category:"Web Dev",
        link:"https://www.udemy.com/course/ai-powered-side-hustles/?couponCode=FreeCoupon",
    },
    {
        id:2,
        title:"Ethical Hacking: Linux Intrusion Essentials",
        img:"Asset/IMG/Courses-img/course2.jpg",
        Category:"Hacking",
        link:"Courses/course1.html",
    },
    {
        id:3,
        title:"Responsive Admin DashBoard UI Design",
        img:"Asset/IMG/course3.jpg",
        Category:"UI/UX",
        link:"Courses/course1.html", 
    },

    {
        id:4,
        title:"ChatGPT Prompt Engineering Mastery",
        img:"Asset/IMG/Courses-img/course1.jpg",
        Category:"Web Dev",
        link:"Courses/course1.html",
    },
    {
        id:5,
        title:"Ethical Hacking: Linux Intrusion Essentials",
        img:"Asset/IMG/Courses-img/course2.jpg",
        Category:"Hacking",
        link:"Courses/course1.html",
    },
    {
        id:6,
        title:"Responsive Admin DashBoard UI Design",
        img:"Asset/IMG/course3.jpg",
        Category:"UI/UX",
        link:"Courses/course1.html", 
    },
    {
        id:7,
        title:"ChatGPT Prompt Engineering Mastery",
        img:"Asset/IMG/Courses-img/course1.jpg",
        Category:"Web Dev",
        link:"Courses/course1.html",
    },
    {
        id:8,
        title:"Ethical Hacking: Linux Intrusion Essentials",
        img:"Asset/IMG/Courses-img/course2.jpg",
        Category:"Hacking",
        link:"Courses/course1.html",
    },
    {
        id:9,
        title:"Responsive Admin DashBoard UI Design",
        img:"Asset/IMG/course3.jpg",
        Category:"UI/UX",
        link:"Courses/course1.html", 
    },
]


const course_container = document.querySelector('.courses-container');

window.addEventListener("DOMContentLoaded", () => {
    displayMovieData(popCoursesData);
});

function displayMovieData(courses){
    let displaydata=courses.map(function(cat_item){
        return `<article class="course">
            <div class="course-img">
                <img src="${cat_item.img}" alt="">
            </div>
            <div class="course-info">
                <h4>${cat_item.title}</h4>
                <div class="free-Price">
                    <p class="free">${cat_item.Category}</p>
                    <p class="free">Free</p>
                </div>
                <a href="${cat_item.link}" class="btn btn-primary">Learn More</a>
            </div>
         </article>`;
    });
    displaydata=displaydata.join(" ");
    course_container.innerHTML=displaydata;
}

// <<==============FAQS Start  =============>>

let faqsData=[
    {
        id:37981,
        question: "What is FreeAcademia?",
        answer: "From web programming to ethical hacking to UI/UX design, FreeAcademia offers a wide range of free courses in many disciplines online."
    },
    {
        id:37982,
        question: "How am I registered for a course?",
        answer: "To register for a course, simply review our course catalog, choose the one you wish to take, then click the 'Learn More' option to access the course materials."
    },
    {
        id:37983,
        question: "Exist any paid courses on FreeAcademia?",
        answer: "Every course on FreeAcademia is really completely free. Everybody should, in our opinion, be able to afford education."
    },
    {
        id:37984,
        question: "Are any courses prerequisites necessary?",
        answer: "While some of our advanced courses could, most of our introductory classes do not call for any prior knowledge or experience."
    },
    {
        id:37985,
        question: "Can I download the course contents?",
        answer: "Most of our classes let you download readings, assignments, and lecture notes for offline use."
    },
    {
        id:37986,
        question: "Does finishing a course earn me a certificate?",
        answer: "After completing the course, you will get a digital certificate of completion that you may put on LinkedIn or your résumé."
    },
    {
        id:37987,
        question: "Does registering help me to be able to access the courses?",
        answer: "No, viewing any of our course materials does not need you registering. Making an account, on the other hand, helps you keep track of your progress and receive announcements regarding next seminars."
    },
    {
        id:37988,
        question: "How can I get in touch with the teachers should I have questions?",
        answer: "Every course has a designated discussion area where you may submit questions and interact with the instructors and other students."
    },
    {
        id:37989,
        question: "Could I propose for FreeAcademia fresh courses or subjects?",
        answer: "We are indeed receptive to community recommendations. Using the contact form on the website, kindly provide ideas for next courses or subjects."
    },
    {
        id:37990,
        question: "New courses added to FreeAcademia are added how often?",
        answer: "We regularly add fresh material to our course library. Subscribe to our newsletter or follow us on social media to be informed on the most recent course launches."
    }
]



// Display FAQs
const faqs_container = document.querySelector('.faqs-container');
window.addEventListener("DOMContentLoaded", () => {
    displayFaqsData(faqsData); // displaying the data in the DOM
    // Add event listeners for show/hide functionality
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');

            // Change icons 
            const icons = faq.querySelector('.faqs-icon i');
            if (icons.className === 'uil uil-plus') {
                icons.className = "uil uil-minus";
            } else {
                icons.className = "uil uil-plus";
            }
        });
    });
});

// Display the FAQ data
function displayFaqsData(faqs) {
    let displaydata = faqs.map(function (cat_item) {
        return `<article class="faq">
            <div class="faqs-icon"><i class="uil uil-plus"></i></div>
            <div class="question-answer">
                <h4>${cat_item.question}</h4>
                <p>${cat_item.answer}</p>
            </div>
        </article>`;
    });
    displaydata = displaydata.join(" ");
    faqs_container.innerHTML = displaydata;
}

// <<==============FAQS End  =============>>


// <<==============Testimonial Dynamic Data  =============>>

let testimonialData=[
    {
        id: 47990,
        test: "FreeAcademia has been revolutionary. The classes cover all ground, and the teachers are experienced. My profession has progressed thanks in great part to the acquired useful abilities. Highly advised!",
        pic: "Asset/IMG/avatar1.jpg",
        name: "Sarah J.",
        role: "Marketing Expert"
    },
    {
        id: 47991,
        test: "FreeAcademia's SEO course much above my expectations. The useful advice and practical exercises gave me the assurance to maximize my own website. A plus was the community's support!",
        pic: "Asset/IMG/avatar2.jpg",
        name: "Mark L.",
        role: "Small Business Owner"
    },
    {
        id: 47992,
        test: "The caliber of the FreeAcademia courses really astounded me. Given the current and relevant nature of the material, staying current in the hectic realm of IT is simple. The understandable layout of the platform made learning fun.",
        pic: "Asset/IMG/avatar3.jpg",
        name: "Emily R.",
        role: "IT Expert"
    },
    {
        id: 47993,
        test: "I've been able to switch into a new job in digital marketing thanks to FreeAcademia. The courses have a clear framework, and the tests served to reinforce what I learned. The nicest thing is that everything is free!",
        pic: "Asset/IMG/avatar4.jpg",
        name: "James T.",
        role: "Passionate Digital Marketer"
    },
    {
        id: 47994,
        test:"It's amazing how much free knowledge FreeAcademia provides at no expense. The courses cover everything from foundations to advanced subjects; the teachers are authorities in their domains. I have suggested this site to every one of my friends.",
        pic:"Asset/IMG/avatar5.jpg",
        name:"Jessica M.",
        role:"Freelancing Content Writer"
    },
    {
        id: 47995,
        test: "I never would have imagined I could pick up so much without shelling out money. The courses offered by FreeAcademia are first-rate, and the freedom to pick things at my own speed is priceless. I apply daily in my work the useful talents I have acquired.",
        pic: "Asset/IMG/avatar6.jpg",
        name: "Daniel K.",
        role: "Web Developer"
    }

]


const testimonial_container = document.querySelector('.swiper-wrapper');

window.addEventListener("DOMContentLoaded", () => {
    displayTestimonialData(testimonialData);
    initSwiper();
});

function displayTestimonialData(testimonials) {
    let displaydata = testimonials.map(function(cat_item) {
        return `<article class="testimonial swiper-slide">
            <div class="avatar">
                <img src="${cat_item.pic}" alt="${cat_item.name}">
            </div>
            <div class="testimonial-info">
                <h5>${cat_item.name}</h5>
                <small>${cat_item.role}</small>
            </div>
            <div class="testimonial-body">
                <p>"${cat_item.test}"</p>
            </div>
        </article>`;
    });
    displaydata=displaydata.join(" ");
    testimonial_container.innerHTML = displaydata;
}

function initSwiper() {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
    
        
    });
}



// header part  dynamicaly data===========

let headerData=[
    {
        id:978488548567,
        slogan:"Grow your Skill to Advance your Career Path",
        discrip:"FreeAcademia offers free, high-quality courses across various disciplines, empowering learners globally to achieve goal",
        courseLink:"courses.html",
        banner:"Asset/IMG/header1.png"
    }
]

const banner= document.querySelector(".header-container");

window.addEventListener("DOMContentLoaded", () => {
    displayBannerData(headerData);
});


function displayBannerData(banners){
    let displaydata=banners.map(function(cat_item){
        return `<div class="header-left">
                <h1>${cat_item.slogan}</h1>
                <p>${cat_item.discrip}</p>
                <a href="${cat_item.courseLink}" class="btn btn-primary">Get Start</a>
            </div>
            <div class="header-right">
                <div class="header-right-img">
                    <img src="${cat_item.banner}" alt="">
                </div>
            </div>`;
    });
    displaydata=displaydata.join(" ");
    banner.innerHTML=displaydata;
}

// <<==============Header End  =============>>

// <<==============Header End  =============>>
