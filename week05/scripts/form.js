/* 1 step: Start with the Base script used for previous footer */
// Get the current year for the copyright
const copyrightYearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
copyrightYearSpan.textContent = currentYear;

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById("last-modified");
const lastModifiedDate = document.lastModified;
lastModifiedSpan.textContent = lastModifiedDate;

// step 2:
//Populate the Product Name options where the array's name field is used 
//for the select option display and the array's id is used for the value field

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productSelect = document.getElementById('products');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


// step 3:
// Use localStorage to keep track of the number of reviews completed by the user client by adding
// a counter to the form submission review.html page.
// Every time that page is loaded successfully upon form submission, add one to the counter.
// Get the current review count from localStorage, or 0 if not set

let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

// Increment the count
reviewCount++;

// Store the new count back in localStorage
localStorage.setItem('reviewCount', reviewCount);

// Optionally, display the count on the page
const reviewCountDisplay = document.getElementById('review-count');
if (reviewCountDisplay) {
    reviewCountDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
}