const container = document.querySelector("#container");
const grid = document.createElement("div");


function createBoxes(index) {
    for (let i = 0; i < index; i ++) {
        const grid = document.createElement("div");
        grid.style.display = 'flex';
        
        grid.textContent = "blue";
        container.appendChild(grid);
    }
}

createBoxes(16);