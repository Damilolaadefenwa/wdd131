// Check Your Understanding
// Given the following variable declarations

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//1.Write a for loop that will iterate through the studentReport array
//and print to the console the current array value if it is below 30.
//If the current array value is greater than or equal to 30, print "Number is greater than 30".
// for (let number = 0; number < studentReport.length; number++) {
//     if (studentReport[number] < 30)
//     {
//         console.log(studentReport[number]);
//     }
//     else {
//         console.log("Number is greater than 30");
//     }
// }

//2. Repeat the previous programming snippet by using a while loop.
// let number = 0;
// while (number < studentReport.length) {
//     if (studentReport[number] < 30)
//     {
//         console.log(studentReport[number]);
//     }
//     else {
//         console.log("Number is greater than 30");
//     }
//     number++;
// }

//3. Repeat the previous programming snippet by using a forEach loop.
// studentReport.forEach((number) => {
//     if (number < 30)
//     {
//         console.log(number);
//     }
//     else {
//         console.log("Number is greater than 30");
//     }
// });

// Repeat the previous programming snippet by using a for...in loop.
for (let index in studentReport) {
    if (studentReport[index] < 30) {
        console.log(studentReport[index]);
    }
    else {
        console.log("Number is greater than 30");
    }
}

//Use any type of repetition (looping) statement to dynamically produce the day names
//(Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.

const today = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = today.getDay();
const nextDays = [];
for (let i = 1; i <= DAYS; i++) {
    const nextDayIndex = (currentDay + i) % 7;
    nextDays.push(dayNames[nextDayIndex]);
}
console.log(`The next ${DAYS} days are: ${nextDays.join(", ")}`);
