/* Start with the Base script used for previous footer */
// Get the current year for the copyright
const copyrightYearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
copyrightYearSpan.textContent = currentYear;

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById("last-modified");
const lastModifiedDate = document.lastModified;
lastModifiedSpan.textContent = lastModifiedDate;

// This script is used to manage the temples page. it includes functions to handle the display of temple information.


// document.addEventListener('DOMContentLoaded', function () {
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//     const mobileNav = document.querySelector('.mobile-nav');
//     const navLinks = document.querySelectorAll('header nav a');
//     const galleryFigures = document.querySelectorAll('.gallery figure'); // Get all figure elements
//     // const currentDateElement = document.getElementById('currentDate');

//     // // Function to display the current date
//     // function displayCurrentDate() {
//     //     if (currentDateElement) {
//     //         const now = new Date();
//     //         const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     //         currentDateElement.textContent = now.toLocaleDateString(undefined, options);
//     //     }
//     // }
//     // displayCurrentDate(); // Call it on load

//     function filterGallery(filter) {
//         galleryFigures.forEach(figure => {
//             const categories = figure.dataset.categories.split(' '); // Get categories as an array

//             if (filter === 'all' || categories.includes(filter)) {
//                 figure.classList.remove('hidden'); // Show the figure
//             } else {
//                 figure.classList.add('hidden'); // Hide the figure
//             }
//         });
//     }

//     // Initial filter (show all - though they are visible by default without 'hidden' class)
//     // If you want to ensure the 'hidden' class isn't present initially on any:
//     galleryFigures.forEach(figure => figure.classList.remove('hidden'));
//     // Or ensure the "Home" filter is applied to set active state:
//     const homeLink = document.querySelector('header nav a[data-filter="all"]');
//     if (homeLink) {
//         homeLink.classList.add('active');
//     }
//     filterGallery('all'); // Apply the initial filter (mainly for consistency if you add hidden by default)


//     // Toggle mobile navigation
//     hamburgerMenu.addEventListener('click', () => {
//         mobileNav.classList.toggle('open');
//     });

//     // Filter gallery on navigation link click
//     navLinks.forEach(link => {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();
//             const filter = this.dataset.filter;
//             filterGallery(filter);

//             // Close mobile nav if it's open after clicking a link
//             if (mobileNav.classList.contains('open')) {
//                 mobileNav.classList.remove('open');
//             }

//             // Set active class on the clicked link
//             navLinks.forEach(l => l.classList.remove('active'));
//             this.classList.add('active');
//             // Also set active on corresponding mobile nav link if it exists
//             const mobileEquivalent = document.querySelector(`.mobile-nav a[data-filter="${filter}"]`);
//             if (mobileEquivalent) {
//                 document.querySelectorAll('.mobile-nav a').forEach(l => l.classList.remove('active'));
//                 mobileEquivalent.classList.add('active');
//             }
//         });
//     });
// });


