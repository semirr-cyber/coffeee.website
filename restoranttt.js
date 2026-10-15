
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
const navLinks = nav.querySelectorAll("a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    if (!form) {
        alert("Contact form not found!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');

        if (!nameInput.value.trim() || !emailInput.value.trim()) {
            alert("Sorry! Please make sure to enter your full name and email.");
            return;
        }

        if (!emailInput.validity.valid) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you, " + nameInput.value.trim() + "!");
    });
});

function goToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

function goToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}
/* ===== BACK TO TOP BUTTON ===== */

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    // Show button after scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Scroll smoothly to the top
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


/* ===== IMAGE POPUP ===== */

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".image-popup");
    const popupImage = popup.querySelector("img");
    const closePopup = popup.querySelector(".close-popup");

    // Open popup when a gallery image is clicked
    document.querySelectorAll(".gallery img").forEach(function (img) {
        img.addEventListener("click", function () {
            popupImage.src = img.src;
            popup.classList.add("active");
        });
    });

    // Close popup using X
    closePopup.addEventListener("click", function () {
        popup.classList.remove("active");
    });

    // Close popup by clicking outside the image
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("active");
        }
    });
});
