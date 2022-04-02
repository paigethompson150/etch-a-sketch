//initializes first grid to be 16x16
let gridCount = 256;

//deletes a grid
function deleteOldGrid() {
    const btn = document.getElementsByClassName('btn');
    while(btn.length > 0) {
        btn[0].remove();
    }
}

//creates a grid of divs
function createDiv(count) {
    let box = document.querySelector('#box');
    let i = 0;
    let arithmetic = ((1/Math.sqrt(count)*100));
    arithmetic = arithmetic.toFixed(5);
    while (i < count) {
        const lilBox = document.createElement('div');
        lilBox.classList.add('btn');
        lilBox.style.width=`${arithmetic}%`;
        lilBox.style.height=`${arithmetic}%`;
        box.appendChild(lilBox);
        i += 1;
    }
       
}

//changes color of div when hovered over
function changeColor() {
    const btn = document.querySelectorAll('.btn');
    for (let count = 0; count < btn.length; count++)
    {
        btn[count].addEventListener('mouseover', () => {
            btn[count].classList.toggle('black');
        })
    }
}

function main() {

    //creates initial grid and adds event listeners
    createDiv(gridCount);
    changeColor(); 

    //creating slider on bottom of screen
    var slider = document.getElementById('myRange');
    var output = document.getElementById('value');
    

    output.innerHTML = slider.value;
    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    slider.addEventListener('click', () => {
        var x = slider.value;
        deleteOldGrid();
        createDiv(x*x);
        changeColor();
    })

    //adding listener for reset button
    var reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        deleteOldGrid();
        createDiv(slider.value*slider.value);
        changeColor();
    })
}

main();