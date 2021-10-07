'use strict';

let palette = document.querySelector('.palette');
let mainText = document.querySelector('.main-text');

palette.addEventListener('click', event => {
    let currentColor = event.target.dataset.color;
    console.log(currentColor);
    mainText.style.color = currentColor;
})
