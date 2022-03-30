let gridCount = 256;
let promptBox = document.querySelector('.prompt');
promptBox.textContent = 'Reset';

function deleteOldGrid() {
    const btn = document.getElementsByClassName('btn');
    while(btn.length > 0) {
        btn[0].remove();
    }
}

function createDiv(count) {
    let box = document.querySelector('#box');
    let i = 0;
    
    while (i < count) {
        const lilBox = document.createElement('div');
        lilBox.classList.add('btn');
        box.appendChild(lilBox);
        i += 1;
    }
}

function createButtons() {
    const btn = document.querySelectorAll('.btn');
    for (let count = 0; count < btn.length; count++)
    {
        btn[count].addEventListener('mouseover', () => {
            btn[count].classList.toggle('black');
        })
    }
}
function main() {

    createDiv(gridCount);
    createButtons(); 

    promptBox.addEventListener('click', () => {
        gridCount = prompt('How big is your new grid?');
        deleteOldGrid();
        createDiv((gridCount*gridCount));
        createButtons();
    })
}

main();