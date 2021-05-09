const selectedDiv = document.getElementById('card_Div')

const deleteButton = (arr) => {
    selectedDiv.addEventListener('click', clickEvent => {
        if(clickEvent.target.id.startsWith("deleteBtn--")) {
            const [promp, entryIdString] = clickEvent.target.id.split("--")
            const parser = parseInt(entryIdString)
            deleteEntry(parser, arr)
        }
    })
}

const deleteEntry = (eventId, array) => {
    array.map((unique) => {
        if(unique.id === eventId) {
            console.log('this should delete stuff If I splice')
        }
    })

}

document.addEventListener('click', (e) => {

    let students = []

    const houses = ["hufflepuff", "gryffindor", "ravenclaw", "slytherin"];

    const item = houses[Math.floor(Math.random() * houses.length)];

    if (e.target.id === "card_Display") {
        students.push(
            {
                id: Math.floor(Math.random() * 50),
                studentName: document.getElementById('student_Name').value,
                house: item
            }
        )
        deleteButton(students)
        studentCard(students)
    }
})

const studentCard = (student) => {
    student.map(s => {
        selectedDiv.innerHTML +=
            ` <div id="actual_Card"class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted">${s.house}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${s.studentName}</h6>  
            <p id="this"class="card-text"></p>
            <button name="fuckButton" id="deleteBtn--${s.id}" class="card-link">expel them</button>
        </div>
    </div>`
    })
}

const studentInput = document.querySelector('#name_Input')

const nameInput = () => {
    studentInput.innerHTML = `
    <div class="d-flex justify-content-center pt-4">
        <input id="student_Name" type="text"></input>
        <button id="card_Display" class="d-flex">Enter name</button>
    </div>`
}


export default { studentCard, nameInput }