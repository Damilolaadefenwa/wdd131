//Activity Instructions 1 DOM

//5. In your blank js file, declare three (3) variables that hold references
// to the input, button, and list elements.

const input = document.querySelector('#favchapter');
const button = document.querySelector('button');
const list = document.querySelector('#list'); //you need to fill in the blank here to reference the HTML element that is a unordered list element.


//Date: 7/06/2025
// CONTINUATION OF THE CODE FOR JAVA SCRIPT LOCAL STORAGE
//Activity Instructions 3 LOCAL STORAGE

// step 2:
// let chaptersArray = getChapterList();   // getChapterList will be defined later.// Function to get the chapter list from local storage

// step 3:
// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('#list');
// The variables input, button, and list are already declared above. No need to redeclare them here.

let chaptersArray = getChapterList() || []; // Initialize chaptersArray with existing chapters or an empty array

// step 4:
//Now populate the displayed list of chapters. 
// Use a forEach on the chaptersArray to process each entry named chapter.
chaptersArray.forEach(chapter => displayList(chapter));


//step 5:
//Change the button click event listener to only do the following tasks.
button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
});

//step 6;
//Create the displayList defined function that receives one parameter named item.
function displayList(item) { };

// step 7:
//Put all the code that builds a list item from the previous button click
//event listener into this new displayList function and use the item parameter as the input.
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

// step 8:
//Define the setChapterList function to set the localStorage item that you have already named.
// Use JSON.stringify() to stringify the array.
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// step 9:
//Define the getChapterList function to get the localStorage item.
// No parameter is needed.
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// step 10:
//Finally, define the deleteChapter function with a parameter
//named chapter that does three things.
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}