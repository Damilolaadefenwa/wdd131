
// select the DOM elements for output
const full = document.querySelector("#full");
// use the date object
const today = new Date();

full.innerHTML = `Today is <span id="lastModified">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;
// // Output the formatted date
console.log(`Today's date is: ${full.innerHTML}`);    



// // Get the current date
// const currentDate = new Date();

// // Format the date as a readable string
// const formattedDate = currentDate.toLocaleDateString("en-US", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric"
// });

// // Output the formatted date
// console.log(`Today's date is: ${formattedDate}`);

