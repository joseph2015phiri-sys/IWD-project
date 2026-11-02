/* =========================================
   J-TECH ENTERPRISES
   JAVASCRIPT
========================================= */


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

window.addEventListener("scroll", function () {
    // Run this callback whenever the visitor scrolls the page.

    const navbar = document.querySelector(".navbar");
    // Find the navigation bar that should change style.

    if (window.scrollY > 50) {
        // Add the compact style after scrolling more than 50 pixels.
        navbar.classList.add("scrolled");
    } else {
        // Restore the original style near the top of the page.
        navbar.classList.remove("scrolled");
    }

});


// =========================================
// UPDATE FOOTER YEAR
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();
// Put the current year into the copyright span so it updates automatically.

// =========================================
// CONTACT FORM
// =========================================

const quoteForm = document.getElementById("quoteForm");
// Get the quote form element from the HTML.
const formMessage = document.getElementById("formMessage");
// Get the element where submission or validation feedback should appear.

quoteForm.addEventListener("submit", function (event) {
    // Handle form submission here instead of letting the browser reload the page.

    event.preventDefault();
    // Prevent the default network submission; this demo has no backend.

    const name = document.getElementById("name").value.trim();
    // Read the name and remove whitespace from both ends.
    const phone = document.getElementById("phone").value.trim();
    // Read and trim the phone number.
    const email = document.getElementById("email").value.trim();
    // Read and trim the email address.
    const service = document.getElementById("service").value;
    // Read the selected service option.
    const message = document.getElementById("message").value.trim();
    // Read and trim the enquiry text.


    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        service === "" ||
        message === ""
    ) {
        // Reject any blank required value and tell the visitor what to do.

        showMessage(
            "Please complete all fields before submitting.",
            "danger"
        );

        return;
        // Stop here so the normal feedback is not shown for incomplete fields.
    }


    showMessage(
        "Thanks, " + name +
        ". This demo form is not connected to a submission service, so your request was not sent. Please use the contact details on this page.",
        "warning"
    );
    // Be transparent: the static demo does not actually send or store enquiries.

});


// =========================================
// FORM MESSAGE
// =========================================

function showMessage(message, type) {
    // Display a Bootstrap alert with the supplied text and severity style.

    formMessage.style.display = "block";
    // Make the feedback element visible.

    formMessage.className = "alert alert-" + type;
    // Apply Bootstrap's alert class and the requested type (success, danger, warning).

    formMessage.textContent = message;
    // Insert plain text safely instead of interpreting it as HTML.


    setTimeout(function () {
        // Hide the message again after six seconds.

        formMessage.style.display = "none";

    }, 6000);

}


// =========================================
// SMOOTH NAVIGATION
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    // Attach the same smooth-scroll behavior to every in-page anchor link.

    link.addEventListener("click", function (event) {
        // Respond when this link is clicked.

        const targetId = this.getAttribute("href");
        // Read the destination fragment, such as #services.

        if (targetId === "#") {
            // Do nothing for an empty placeholder link.
            return;
        }

        const target = document.querySelector(targetId);
        // Find the page element whose id matches the link destination.

        if (target) {
            // Only override default navigation if the destination actually exists.

            event.preventDefault();
            // Prevent the browser's immediate jump so we can account for the navbar.

            const navbarHeight =
                document.querySelector(".navbar").offsetHeight;
            // Measure the fixed navbar so it will not cover the target heading.

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight;
            // Compute the target's page position, adjusted for the navbar height.

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
            // Animate the page to the destination.


            // Close mobile menu
            const navbarCollapse =
                document.querySelector(".navbar-collapse");
            // Find the collapsible navigation menu used on small screens.

            if (navbarCollapse.classList.contains("show")) {
                // If the menu is open, close it after a navigation choice.

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);
                // Get Bootstrap's existing controller for the menu.

                if (bsCollapse) {
                    // Hide the menu through Bootstrap so its state stays synchronized.
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
// Collect all named sections so the active navigation item can follow scroll position.
const navLinks = document.querySelectorAll(".nav-link");
// Collect the navigation links that can receive the active class.

window.addEventListener("scroll", function () {
    // Recalculate the active link as the visitor scrolls.

    let current = "";
    // Store the id of the section currently under consideration.

    sections.forEach(function (section) {
        // Check each section against the current scroll position.

        const sectionTop = section.offsetTop - 150;
        // Use an offset so the active link changes before the section heading is covered.
        const sectionHeight = section.offsetHeight;
        // Read the section height to determine its ending position.

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");
            // Remember the id of the section currently in view.

        }

    });


    navLinks.forEach(function (link) {
        // Clear old active states, then mark the link for the current section.

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            // Match the link fragment (for example #about) to the current section id.
            link.classList.add("active");
        }

    });

});
