//Learning javaScript Array Functions
// Array methods that support functional programming include filter(), map(), and reduce().
// There are other array methods that support functional programming, but this learning activity
// dives into these three common and useful methods.

//1. The filter() method of Array instances creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


//2. The map() method of Array instances creates a new array populated with the results of calling a provided
// function on every element in the calling array.
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


//3.The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element
// of the array, in order, passing in the return value from the calculation on the preceding element. The final
// result of running the reducer across all elements of the array is a single value.

const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


//Check Your Understanding Exercise
// Step 1
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

let namesB = names.filter((name) => name.charAt(0) === 'B');
console.log(namesB);

// Step 2
// Using the array.map() method, create a new array named
// namesLength that contains the length of each name in the names array.
// let namesLength = [5, 8, 5, 8, 3];

let nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Step 3
//Using the names.reduce() method, create an expression 
//that returns the average string length of the names in the names array. Expected output is 5.8.
let reducedName = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(reducedName)