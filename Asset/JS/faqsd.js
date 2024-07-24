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