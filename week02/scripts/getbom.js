//Activity Instructions 1 DOM

//5. In your blank js file, declare three (3) variables that hold references
// to the input, button, and list elements.

const input = document.querySelector('#favchapter');
const button = document.querySelector('button');
const list = document.querySelector('#list'); //you need to fill in the blank here to reference the HTML element that is a unordered list element.

//6.Create a li element that will hold each entry's chapter title and an associated delete button.

const li = document.createElement('li'); //this will hold the chapter title and delete button

//7.Create a delete button.
const deleteButton = document.createElement('button'); //this will be the delete button
// deleteButton.textContent = 'Delete'; //this will be the text on the delete button

//8.Populate the li element variable's textContent or innerHTML with the input value
li.textContent = input.value; //this will be the text on the li element

// //9.Populate the button textContent with a ❌.
// deleteButton.textContent = '❌'; //this will be the text on the delete button

//10.Append the li element variable with the delete button
li.append(deleteButton); //this will append the delete button to the li element

//11.Append the li element variable to the unordered list in your HTML
list.append(li); //this will append the li element to the unordered list in your HTML


//Activity Instructions 2 HANDLING DOM EVENTS
//1 open file and 2. Create a click event listener for the Add Chapter button in the html using an addEventListener.
//3.Within the Add Chapter button click event function block,do the following:
button.addEventListener('click', function () {
    //code to execute when the button is clicked
    const addChapter = input.value.trim(); //this will be the value of the input element
    if (addChapter !== "") {
        const li = document.createElement('li'); //this will hold the chapter title and delete button
        li.textContent = addChapter; //this will be the text on the li element

        const deleteButton = document.createElement('button'); //this will be the delete button
        deleteButton.textContent = '❌'; //this will be the text on the delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li); //this will remove the li element from the unordered list
            input.focus(); //this will set the focus back to the input element.
        });

        li.appendChild(deleteButton); //this will append the delete button to the li element
        list.appendChild(li); //this will append the li element to the unordered list in your HTML
        input.value = ""; //this will clear the input element //13.Change the input value to clean up the interface for the user.
        input.focus(); //this will set the focus back to the input element.
    }
    // else {
    //     alert("Please enter a chapter title."); //this will alert the user to enter a chapter title
    // }
});

