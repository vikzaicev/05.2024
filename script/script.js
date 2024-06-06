import { isValid } from "./function.js";
import { Question } from "./url.js";
import { createModal } from "./function.js";
import { getAuthForm } from "./auth.js";
import { aythWithEmailAndPassword } from "./auth.js";


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

function authFormHandler(e) {
    e.preventDefault();

    const btnM = e.target.querySelector('button')
    const email = e.target.querySelector('#email-input').value;
    const password = e.target.querySelector('#password-input').value;

    btnM.disabled = true
    aythWithEmailAndPassword(email, password)
        .then(Question.fetch)
        .then(renderModalAfterAuth)
        .then(() => btnM.disabled = false)
}

function renderModalAfterAuth(content) {
    console.log(content);
    if (typeof content === !'string') {
        createModal('Список вопросов', Question.listToHTML(content))

    }
    else {
        createModal('Ошибка', Question.listToHTML(content))
    }
}
function openModal() {
    createModal("авторизация", getAuthForm())
    document.getElementById('auth-form')
        .addEventListener('submit', authFormHandler, { once: true })
}
