'use strict';

let content = document.querySelector('#content');
let btnAdd = document.querySelector('#btn-add');

function numRandom (num) {
    return Math.trunc(Math.random() * num);
}
// Создание блоков
function addBox () {
    let newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.style.backgroundColor = `rgb( ${numRandom(255)}, ${numRandom(255)}, ${numRandom(255)})`;
    // console.dir(newBox);
    content.insertAdjacentElement('beforeend', newBox);
}
// Удаление блоков
btnAdd.addEventListener ('click', addBox);
content.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('box')) target.remove();
});