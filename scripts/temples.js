/* Start with the Base script used for previous footer */
// Get the current year for the copyright
const copyrightYearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
copyrightYearSpan.textContent = currentYear;

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById("last-modified");
const lastModifiedDate = document.lastModified;
lastModifiedSpan.textContent = lastModifiedDate;

const hamButton = document.querySelector('#menu');
const navElement = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamButton.classList.toggle('open');
});


