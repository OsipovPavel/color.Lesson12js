'use strict';

let content = document.querySelector('#content');
let arrowUp = document.querySelector('#arrow-up');
let arrowDown = document.querySelector('#arrow-down');
let currentNumber = content.textContent;

function printNumber () {
    if (currentNumber>=0) {
        if (currentNumber<10) {
            currentNumber= '0' + currentNumber;
        }} else if (currentNumber>-10) {
            currentNumber = '-0'+Math.abs(currentNumber);
        }
    content.textContent = currentNumber;
}

arrowUp.addEventListener('click', () => {
    currentNumber++;
    printNumber();
})

arrowDown.addEventListener('click', () => {
    currentNumber--;
    printNumber();
})