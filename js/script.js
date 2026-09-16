"use strict";

/* ==========================================
   GAMEVAULT JAVASCRIPT
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navbar = document.querySelector(".navbar");

const navLinks = document.querySelectorAll(
    ".nav-link, .nav-button"
);


/* ==========================================
   MOBILE MENU
========================================== */

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/*
 * Ketika user memilih menu navigasi,
 * menu mobile otomatis ditutup.
 */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll(
    "main section[id]"
);

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const currentId = entry.target.getAttribute("id");

            document
                .querySelectorAll(".nav-link")
                .forEach((link) => {

                    link.classList.remove("active");

                    const href = link.getAttribute("href");

                    if (href === `#${currentId}`) {
                        link.classList.add("active");
                    }

                });

        });

    },
    {
        threshold: 0.25
    }
);

sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* ==========================================
   PRODUCT BUTTON DEMO
========================================== */

const productButtons = document.querySelectorAll(
    ".product-button"
);

productButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert(
            "GameVault Demo\n\n" +
            "Fitur produk ini masih berupa demo " +
            "karena project hanya merupakan landing page."
        );

    });

});


/* ==========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navMenu.classList.remove("active");

    }

});