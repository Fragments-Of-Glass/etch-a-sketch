const container = document.getElementById("container");
let cell
document.getElementById("container").style.width = "100%";
document.getElementById("container").style.height = "100%";
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        cell = document.createElement("div");
        container.appendChild(cell).className = 'grid-block';
    }
}

makeGrid(16, 16);