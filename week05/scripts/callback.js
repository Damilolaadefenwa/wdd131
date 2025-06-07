// avaScript Callback Functions
// Activity Instructions

//1.Given these function declarations:
function calculate(a, b, callback) {
    callback(2 + 3, result => {
        console.log(`The sum of ${a} and ${b} is: ${result}`);
    });
}

function displayResult(result) {
    console.log(`The result is:' ${result}`);
}

calculate(2, 3, displayResult);

//A common use of a callback functions in JavaScript is for asynchronous operations,
// such as handling events or making asyncchronous requests.
// Here is a simulated example:

function fetchData(callback) {
    // using setTimeout to simulate fetching data from a server
    setTimeout(() => {
        // This calls the 'callback' function and passes data to it.
        callback('Data has been fetched');
    }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
    console.log("Data received:", data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);