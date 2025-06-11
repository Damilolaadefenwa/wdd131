
// project.js HOME PAGE SCRIPT
// This script is used for the project page to handle footer updates, hamburger menu interaction, and hero section image slider functionality

/* 1 step: Start with the Base script used for previous footer */
// Get the current year for the copyright
const copyrightYearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
copyrightYearSpan.textContent = currentYear;

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById("last-modified");
const lastModifiedDate = document.lastModified;
lastModifiedSpan.textContent = lastModifiedDate;

// 2 step: Write code for the hamburger menu interation
// create variable first and target your selector
//Use Eventlistiener to fire an action for interactivity
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navList = document.querySelector('.main-nav ul');
    menuButton.addEventListener('click', function () {
        navList.classList.toggle('open');
    });
});
