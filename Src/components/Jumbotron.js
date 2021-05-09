import name from './Card.js'

const selectedDiv = document.getElementById('form_Appear')

const jumboTron = () => {
  selectedDiv.addEventListener('click', (e) => {
        if (e.target.id === "form_Appear") {
            return name.nameInput()
        }
    })
}

export default { jumboTron }