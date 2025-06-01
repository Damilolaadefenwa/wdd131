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
const hamButton = document.querySelector('#menu');
const navElement = document.querySelector('nav');
//Use Eventlistiener to fire an action for interactivity
hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//Date: 30/05/2025
//Created this to add a div element to my h1 tag instead of the formal overlay position style of h1
document.addEventListener("DOMContentLoaded", function () {
    function wrapH1ForSmallScreen() {
        const h1 = document.querySelector('header h1');
        if (window.innerWidth <= 700 && !h1.parentElement.classList.contains('h1-container')) {
            // Create a div and wrap h1
            const div = document.createElement('div');
            div.className = 'h1-container';
            h1.parentNode.insertBefore(div, h1);
            div.appendChild(h1);
        } else if (window.innerWidth > 700 && h1.parentElement.classList.contains('h1-container')) {
            // Unwrap h1 if screen is large
            const div = h1.parentElement;
            div.parentNode.insertBefore(h1, div);
            div.parentNode.removeChild(div);
        }
    }

    wrapH1ForSmallScreen();
    window.addEventListener('resize', wrapH1ForSmallScreen);
});


//DATE: 31/05/2025
//3. Replacing the deleted html figures with dynamically generated HTML using JavaScript.
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 24282,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758797-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia Temple",
        location: "Marden, South Australia",
        dedicated: "2000, June, 15",
        area: 28086,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg",
    },
    {
        templeName: "Johannesburg, South Africa Temple",
        location: "Parktown-Johannesburg, South Africa",
        dedicated: "1985, August, 24-25",
        area: 4047,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg",
    },
    {
        templeName: "Manhattan New York Temple",
        location: "New-York, United State",
        dedicated: "2004, June, 13",
        area: 1214,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manhattan-new-york/400x250/manhattan-temple-lds-903670-wallpaper.jpg",
    },
    {
        templeName: "Durban South Africa Temple",
        location: "KwaZulu-Natal, South Africa",
        dedicated: "2020, February, 16",
        area: 58641,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/5-a34bb1899983ed73e499a18da741b3704e1d4d35.jpg",
    },
];

//4.Loop through the array and create "temple cards" for each temple by displaying the required information:

// function createTempleCards() {
//     temples.forEach(temple => {
//         let card = document.createElement("section");
//         let name = document.createElement("h3");
//         let location = document.createElement("p");
//         let dedication = document.createElement("p");
//         let area = document.createElement("p");
//         let img = document.createElement("img");

//         name.textContent = temple.templeName;
//         location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
//         dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
//         area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
//         img.setAttribute("src", temple.imageUrl);
//         img.setAttribute("alt", `${temple.templeName} Temple`);
//         img.setAttribute("loading", "lazy");

//         card.appendChild(name);
//         card.appendChild(location);
//         card.appendChild(dedication);
//         card.appendChild(area);
//         card.appendChild(img);

//         document.querySelector(".gallery").appendChild(card);
//     });

// }

// Display the temple cards(images) by calling the function
// createTempleCards();

const demandMercy = "Marcy";

//5.Respond to the main navigation menu items by filtering and displaying the required information;
//comment out the createTempleCard to create displayfilteredtemple inorder to maintain consistency.

// Helper function to clear and display temples
function displayFilteredTemples(filteredTemples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear previous cards

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        gallery.appendChild(card);
    });
}

// Add event listeners to nav menu items
document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove 'active' class from all links and add to clicked one
        document.querySelectorAll('#main-nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        let filter = this.textContent.trim();

        let filtered;
        switch (filter) {
            case "Old":
                filtered = temples.filter(t => {
                    // Extract year from dedicated string
                    let year = parseInt(t.dedicated.split(',')[0]);
                    return year < 1900;
                });
                break;
            case "New":
                filtered = temples.filter(t => {
                    let year = parseInt(t.dedicated.split(',')[0]);
                    return year > 2000;
                });
                break;
            case "Large":
                filtered = temples.filter(t => t.area > 90000);
                break;
            case "Small":
                filtered = temples.filter(t => t.area < 10000);
                break;
            default: // Home
                filtered = temples;
        }

        displayFilteredTemples(filtered);
    });
});

// Display all temples on initial page load
displayFilteredTemples(temples);
