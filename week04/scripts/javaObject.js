// JavaScript Object:
// JavaScript objects are a way to group related data and functions together.

//1. This below is an example of a JavaScript object literal (a collection of key-value pairs) representing a person in a concise and readable format.

let person = {
    name: "Antonia Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "playing guitar", "hiking"],
    address: {
        street: "123 Camino Real",
        city: "Santa Rosa",
        country: "Honduras"
    },
    isEmployed: true,
    greet: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

//2. Determine / Displaying the output of the following statements given the person object defined above.
console.log(person['isEmployed']);  //bracket notation is an alternative way to access the properties in 
// the object just like dot notation
console.log(person.hobbies[0]);  //dot notation to call the method of the object.
console.log(person.age);  //    dot notation to call the method of the object.
console.log(person['address'].city);  // combined notation
console.log(person.greet());


//Lesson Activity Instructions:
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,

    //Add sections property with two section objects
    sections: [
        { sectionNumber: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        { sectionNumber: "002", enrolled: 80, instructor: "Sarah Gobble" }
    ]
};

// Instruction 1:
//Create a function to set the name and number of the course in HTML.
//Pass the course object into your function. Use dot notation to access the
//parts of the object that you need.

//Step 1
//Set course information to existing HTML element with and id of courseName.
function setCourseInformation(course) {
    document.querySelector(
        "#courseName"
    ).innerHTML = `${course.code} - ${course.title}`;
  }

//Instruction 2
//Create another function that will output the sections
// into a table with an id of sections.

//Step 2
//Create rows in an existing HTML table with an id of sections for each existing section
// This code separates the rendering using a map function from the template that builds a row.
function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNumber}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);
