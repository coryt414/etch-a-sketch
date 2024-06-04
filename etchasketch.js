const container = document.querySelector(".container");
const grid = document.createElement("div");


function createGrid(width, height) {
    for (let i = 0; i < height; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        rowDiv.style.display = 'flex';
        for (let j = 0; j < width; j++) {
            const individualBox = document.createElement("div");
            individualBox.textContent = "test";
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
    width = prompt("Please enter a width", "16");
    height = prompt ("Please enter a height", "16");
    container.innerHTML = "";
    createGrid(width,height);
});

function colorOnHover(e) {
    e.target.style.background = "red";
};

createGrid(16,16);
