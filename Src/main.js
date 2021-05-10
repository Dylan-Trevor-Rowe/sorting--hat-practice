const house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const students = [];


const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// Add form to DOM
const launchForm = () => {
    let domString = '';
    domString += '<div class="form-container col-lg-8 col-md-10 ml-auto mr-auto bg-white border border-dark rounded p-3">';
    domString += '   <div class="form-header mb-2">';
    domString += '       <h2 class="form-instructions">Enter First Year\'s Name</h2>';
    domString += '   </div>';
    domString += '   <form class="form-inline d-flex justify-content-end">';
    domString += '       <div class="form-group d-flex mx-sm-3 mb-2">';
    domString += '           <span class="align-middle pr-5">Student:</span>';
    domString += '           <label for="inputName" class="sr-only">Name</label>';
    domString += '           <input type="text" class="form-control border border-dark mr-5" id="inputName" placeholder="Neville Longbottom">';
    domString += '       </div>';
    domString += '       <button id="add-student" class="btn btn-light border border-dark rounded mb-2">Sort!</button>';
    domString += '   </form>';
    domString += '</div>';
    printToDom('sorting-form', domString);
    document.getElementById('add-student').addEventListener('click', createStudent);
};

// counter function for assigning student ID - also converts number to string
const idCounter = () => {
    let output = students.length + 1;
    return output.toString();
};

// randomizer function calling a random house
const randomArrElement = (arr) => {
    return Math.floor(Math.random()*arr.length);
};

// add new student object to students array function
const createStudent = (e) => {
    e.preventDefault(); // keeps page from refreshing when submitting form
    const formInput = document.getElementById("inputName").value;
    students.push({id: idCounter(), name: formInput, house: house[randomArrElement(house)]});
    createStudentCard(students);
    console.log("creates students")
    document.getElementById("inputName").value = '';
};

// push studentCard to DOM function
const createStudentCard = (arr) => {
    let domString = '';
    for(const i of arr) {
        domString += '<div class="card d-block col-lg-3 col-md-3 col-sm-12 m-2">';
        domString +=    '<div class="card-body text-center">';
        domString +=        `<h2 class="student-name">${i.name}</h2>`;
        domString +=        `<p class="house-assignment">${i.house}</p>`;
        domString +=        `<button id="${i.id}" type="button" class="expel-button btn btn-light border border-dark rounded">Expel</button>`;
        domString +=    '</div>';
        domString += '</div>';
    };
    printToDom('student-cards-container', domString);
    addExpelClickEvent(students);
};

// function that loops through all objects and adds click event to expel button on each object card
const addExpelClickEvent = (arr) => {
    for (const i of arr) {
        document.getElementById(`${i.id}`).addEventListener('click', expel);
    }
};

// expel click event function
const expel = (e) => {
    for (const i of students) {
        if (e.target.id === i.id) {
            students.splice(i, 1);
        }
    }
    createStudentCard(students);
};

const events = () => {
    document.getElementById('start-sorting').addEventListener('click', launchForm);
};

const init = () => {
    events();
};

init();