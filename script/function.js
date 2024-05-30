export const isValid = (n) => n > 10 || n == 10;

export function createModal(title, content) {
    var modalEl = document.createElement('div');
    modalEl.classList.add('modal-style');
    modalEl.innerHTML = `
    <h2>${title}</h2>
    <div>${content}</div>`

    mui.overlay('on', modalEl);
}

