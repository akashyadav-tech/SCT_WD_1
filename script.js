// =========================
// Navbar Scroll Effect
// =========================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
});


// =========================
// Smooth Scroll + Active Link Highlight
// =========================
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// =========================
// Mobile Menu Toggle
// =========================
const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-links");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("show-menu");
});


// Close menu on clicking a link (mobile only)
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        burger.classList.remove("open");
    });
});


// =========================
// Contact Form Submit
// =========================
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting me! I’ll get back to you soon.");
    form.reset();
});
