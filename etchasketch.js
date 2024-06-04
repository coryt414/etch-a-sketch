const container = document.querySelector(".container");
const grid = document.createElement("div");


function createGrid(width, height) {
    for (let i = 0; i < height; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        rowDiv.style.display = 'flex';
        for (let j = 0; j < width; j++) {
            const individualBox = document.createElement("div");
            individualBox.classList.add("individualBox");
            rowDiv.appendChild(individualBox);
        }
    container.appendChild(rowDiv);
    let gridBoxes = document.getElementsByClassName('individualBox');
    Array.from(gridBoxes).forEach(function(box) {
        box.addEventListener('mouseenter', colorOnHover);
    });
}
};

let btn = document.querySelector('#resize');
btn.addEventListener('click', function (e) {
    inputWidth = '';
    inputWidth = prompt("Please enter a width between 1 - 100", "16");
    while (isNaN(inputWidth) || inputWidth < 1 || inputWidth > 100) {
        alert("Please enter a valid number")
        inputWidth = prompt("Please enter a width between 1 - 100", "16");
    }
    width = inputWidth;
    inputHeight = '';
    inputHeight = prompt("Please enter a height between 1 - 100", "16");
    while (isNaN(inputHeight) || inputHeight < 1 || inputHeight > 100) {
        alert("Please enter a valid number")
        inputHeight = prompt("Please enter a width between 1 - 100", "16");
    }
    height = inputHeight;
    container.innerHTML = "";
    createGrid(width,height);
});

function colorOnHover(e) {
    currentOpacity = e.target.style.opacity;
    console.log(e.target.style.opacity)
    if (currentOpacity === '') {
        e.target.style.opacity = 0.25;
    }
    else {
        e.target.style.opacity = parseFloat(currentOpacity) + .25;
    }
    e.target.style.background = "teal";
    console.log(currentOpacity)
    console.log(e.target.style.opacity)
};

createGrid(16,16);
