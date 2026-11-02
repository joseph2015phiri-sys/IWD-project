/* =========================================
   J-TECH ENTERPRISES
   JAVASCRIPT
========================================= */


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =========================================
// UPDATE FOOTER YEAR
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();

// =========================================
// CONTACT FORM
// =========================================

const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();


    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        service === "" ||
        message === ""
    ) {

        showMessage(
            "Please complete all fields before submitting.",
            "danger"
        );

        return;
    }


    showMessage(
        "Thanks, " + name +
        ". This demo form is not connected to a submission service, so your request was not sent. Please use the contact details on this page.",
        "warning"
    );

});


// =========================================
// FORM MESSAGE
// =========================================

function showMessage(message, type) {

    formMessage.style.display = "block";

    formMessage.className = "alert alert-" + type;

    formMessage.textContent = message;


    setTimeout(function () {

        formMessage.style.display = "none";

    }, 6000);

}


// =========================================
// SMOOTH NAVIGATION
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            const navbarHeight =
                document.querySelector(".navbar").offsetHeight;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });


            // Close mobile menu
            const navbarCollapse =
                document.querySelector(".navbar-collapse");

            if (navbarCollapse.classList.contains("show")) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        }

    });

});


// =========================================
// ACTIVE NAVIGATION LINK
// =========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
