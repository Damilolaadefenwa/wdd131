//Activity Instructions 1 DOM

//5. In your blank js file, declare three (3) variables that hold references
// to the input, button, and list elements.

const input = document.querySelector('#favchapter');
const button = document.querySelector('button');
const list = Document.querySelector('__________'); //you need to fill in the blank here to reference the HTML element that is a unordered list element.

//6.Create a li element that will hold each entry's chapter title and an associated delete button.

const li = document.createElement('li'); //this will hold the chapter title and delete button

//7.Create a delete button.
const deleteButton = document.createElement('button'); //this will be the delete button
// deleteButton.textContent = 'Delete'; //this will be the text on the delete button

//8.Populate the li element variable's textContent or innerHTML with the input value
li.textContent = input.value; //this will be the text on the li element

//9.Populate the button textContent with a ❌.
deleteButton.textContent = '❌'; //this will be the text on the delete button

//10.Append the li element variable with the delete button
li.append(deleteButton); //this will append the delete button to the li element

//11.Append the li element variable to the unordered list in your HTML
list.append(li); //this will append the li element to the unordered list in your HTML


//Activity Instructions 2 HANDLING DOM EVENTS

//2.Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        //code to execute if the input is not blank
        //1. Create a li element that will hold each entry's chapter title and an associated delete button.
        const li = document.createElement('li'); //this will hold the chapter title and delete button
        //2. Create a delete button.    
        const deleteButton = document.createElement('button'); //this will be the delete button
        //3. Populate the li element variable's textContent or innerHTML with the input value   
        li.textContent = input.value; //this will be the text on the li element
        //4. Populate the button textContent with a ❌.
        deleteButton.textContent = '❌'; //this will be the text on the delete button
        //5. Append the li element variable with the delete button  
        li.append(deleteButton); //this will append the delete button to the li element 
        //6. Append the li element variable to the unordered list in your HTML
        list.append(li); //this will append the li element to the unordered list in your HTML
    }
    else {
        //code to execute if the input is blank
        //1. Provide a message or do nothing and return the .focus() to the input field.
        alert('Please enter a chapter title'); //this will provide a message to the user
        input.focus(); //this will set the focus back to the input field
    }

});

//3.Check to make sure the input is not blank before completing the remaining tasks in
//  this list by using an if block that provides a message or does nothing and returns
// the .focus() to the input field.

// if (input.value.trim() !== '') {
//     //code to execute if the input is not blank
//     //1. Create a li element that will hold each entry's chapter title and an associated delete button.
//     const li = document.createElement('li'); //this will hold the chapter title and delete button
//     //2. Create a delete button.    
//     const deleteButton = document.createElement('button'); //this will be the delete button
//     //3. Populate the li element variable's textContent or innerHTML with the input value   
//     li.textContent = input.value; //this will be the text on the li element
//     //4. Populate the button textContent with a ❌.
//     deleteButton.textContent = '❌'; //this will be the text on the delete button
//     //5. Append the li element variable with the delete button  
//     li.append(deleteButton); //this will append the delete button to the li element 
//     //6. Append the li element variable to the unordered list in your HTML
//     list.append(li); //this will append the li element to the unordered list in your HTML
// }
//NOTE:this will check if the input is not blank
// What does the .trim() method do? Should an else branch be added to this conditional?
// What code should go into the condition true block { ... }?

//4.Move the code that you wrote in the last activity into this if block in order to support
// the correct flow of the program.

// //5.Add an event listener to the delete button that removes the li element when clicked.
// deleteButton.addEventListener('click', function () {
//     //code to execute when the delete button is clicked
//     list.removechild(); //this will remove the li element from the unordered list
//     input.focus(); //this will set the focus back to the input field
// });

// //6.Change the input value to nothing or the empty string to clean up the interface for the user.
// input.value = ''; //this will set the input value to nothing.

// //7.Whether or not a list item was created, the focus (active cursor) should be sent to the input element.
// input.focus(); //this will set the focus back to the input field
