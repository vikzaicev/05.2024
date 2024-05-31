export class Question {
    static create(question) {
        return fetch('https://podcast-app-55f1f-default-rtdb.firebaseio.com/question.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                question.id = response.name
                console.log(question);
                return question
            })
            .then(addToLocalStorage)
            .then(Question.renderList)
    }

    static fetch(token) {
        if (!token) {
            return Promise.resolve(`<p class="error">У Вас нет токена</p>`)
        }
        return fetch(`https://podcast-app-55f1f-default-rtdb.firebaseio.com/question.json?auth=${token}`)
            .then(response => response.json)
            .then(questions => {
                console.log(questions);
            })
    }
    static renderList() {
        const questions = getQuestionFromLocalStorage()

        const html = questions.length ? questions.map(toCard) : `<div class="mui--text-headline">Вы пока ничего не спрашивали</div>`
        const list = document.getElementById('list')
        list.innerHTML = html
    }
}

function addToLocalStorage(question) {
    const all = getQuestionFromLocalStorage()
    all.push(question)
    localStorage.setItem('question', JSON.stringify(all))
}

function getQuestionFromLocalStorage() {
    return JSON.parse(localStorage.getItem('question') || '[]')
}

function toCard(question) {
    return `
    <div class="mui--text-black-54">
    ${new Date(question.date).toLocaleDateString()}
    ${new Date(question.date).toLocaleTimeString()}
    </div>
    <div>${question.text}</div>`
}