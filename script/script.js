import { isValid } from "./function.js";
import { Question } from "./url.js";
import { createModal } from "./function.js";
import { getAuthForm } from "./auth.js";


const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const button = form.querySelector('#submit');
const modalBTN = document.querySelector('.modal-btn')

modalBTN.addEventListener('click', openModal)

window.addEventListener('load', Question.renderList)

input.addEventListener('input', () => {
    button.disabled = !isValid(input.value.length);
})

let question = {}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);
    if (isValid(input.value.length)) {
        question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
    }
    button.disabled = true;
    Question.create(question).then(() => {
        input.value = '';
        input.className = "";
        //button.disabled = false;
    })
    Question.renderList()

})
function openModal() {
    createModal("авторизация", getAuthForm())
}
