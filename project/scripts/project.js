
// 1. HOME PAGE SCRIPT
// This script is used for the project page to handle footer updates, hamburger menu interaction, and hero section image slider functionality

/* FOOTER: Start with the Base script used for previous footer */
// Get the current year for the copyright
const copyrightYearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
copyrightYearSpan.textContent = currentYear;

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById("last-modified");
const lastModifiedDate = document.lastModified;
lastModifiedSpan.textContent = lastModifiedDate;

// HEADER HAMBURGER MENU: Write code for the hamburger menu interation
// create variable first and target your selector
//Use Eventlistiener to fire an action for interactivity
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navList = document.querySelector('.main-nav ul');
    menuButton.addEventListener('click', function () {
        navList.classList.toggle('open');
    });
});


// 2. WILDLIFE GALLERY PAGE SCRIPT
// Step 1: Create Array of local images with details for the gallery
const galleryImages = [
    {
        title: "African Bush Elephant",
        park: "NCF-LCC",
        status: "Endangered",
        filePath: "images/africanBushElephants.webp"
    },
    {
        title: "African Wild Donkey",
        park: "Lufasi Park",
        status: "Endangered",
        filePath: "images/africanWildDonkey.webp"
    },
    {
        title: "Cross River Gorilla",
        park: "NCF-LCC",
        status: "Endangered",
        filePath: "images/crossriverGorilla.webp"
    },
    {
        title: "Giraffe",
        park: "Omu Resort Zoo",
        status: "Endangered partially",
        filePath: "images/giraffeOmuResort.webp"
    },
    {
        title: "Helmeted Guinea Fowl",
        park: "Lufasi Park",
        status: "Endangered",
        filePath: "images/helmetedGuineafowl.webp"
    },
    {
        title: "A Male Lion",
        park: "Omu Resort Zoo",
        status: "Endangered",
        filePath: "images/lionOmuResort.webp"
    },
    {
        title: "Mona Monkey",
        park: "NCF-LCC",
        status: "Endangered",
        filePath: "images/monaMonkey.webp"
    },
    {
        title: "Leather Back Sea Turtle",
        park: "NCF-LCC",
        status: "Endangered",
        filePath: "images/leatherbackSeaturtle.webp"
    },
    {
        title: " Plain Zebras",
        park: "Omu Resort Zoo",
        status: "Endangered partially",
        filePath: "images/omuResortZebras.webp"
    },
    {
        title: "Black bellied Pangolins",
        park: "NCF-LCC and Lufasi Park",
        status: "Endangered",
        filePath: "images/pangolins.webp"
    },
    {
        title: "West Africa Barb Horse",
        park: "Lufasi Park",
        status: "Not Endangered",
        filePath: "images/westafricaBarbHorse.webp"
    },
    {
        title: "West Africa Vulture",
        park: "NCF-LCC",
        status: "Endangered",
        filePath: "images/westAfricanVultures.webp"
    },
];

// Function to display gallery images and no filter apply
function displayGalleryImages(filterFn = null) {
    const galleryContainer = document.querySelector('.gallery');
    if (!galleryContainer) return;

    const imagesToShow = filterFn ? galleryImages.filter(filterFn) : galleryImages;
    galleryContainer.innerHTML = '';

    imagesToShow.forEach(img => {
        const card = document.createElement('div');
        card.className = 'gallery-card';

        const image = document.createElement('img');
        image.src = img.filePath;
        image.alt = img.title;
        image.className = 'gallery-img';
        image.loading = 'lazy'; // <-- Add this line for lazy loading

        const title = document.createElement('h4');
        title.textContent = img.title;

        const park = document.createElement('p');
        park.textContent = `Park: ${img.park}`;

        const status = document.createElement('p');
        status.textContent = `Status: ${img.status}`;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(park);
        card.appendChild(status);

        galleryContainer.appendChild(card);
    });
}

//Step 2: // Add event listeners to nav menu items If you need to filtered the images
// Example usage: Display all images on page load
// document.addEventListener('DOMContentLoaded', function () {
//     displayGalleryImages();
// });
// Example usage: Filter by endangered status
// displayGalleryImages(img => img.status === "Endangered");

//step 3: Call the function to display Gallery images with no filter.
displayGalleryImages();



// 3. CONTACT FORM PAGE SCRIPT.
// create localStorage to keep track of the number of times the user client visited to the contact page
//  by adding a counter to the form submission at formcount.html page.
// let visitCount = Number(localStorage.getItem('visitCount')) || 0;
// // Increment the count
// visitCount++;
// // Store the new count back in localStorage
// localStorage.setItem('visitCount', visitCount);
// // Optionally, display the count on the page
// const visitCountDisplay = document.getElementById('visit-count');
// if (visitCountDisplay) {
//     visitCountDisplay.textContent = `You have submitted ${visitCount} review(s).`;
// }

function updateVisitCount(elementId = 'visit-count') {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    if (document.getElementById(elementId)) {
        document.getElementById(elementId).textContent = visitCount;
    }
}

// Executing the function:
updateVisitCount(); // and I can also use updateVisitCount('visit-count')