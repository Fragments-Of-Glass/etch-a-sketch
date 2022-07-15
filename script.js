let container = document.getElementById("container");
container.style.display = 'grid';
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;
let cell = [];
let color = [];
var eraser = false;
var coloring=true;
makeGrid();
function makeGrid() {
    for (let i = 0; i < (16 * 16); i++) {
        cell = document.createElement("div");
        container.appendChild(cell).className = 'grid-block';
        color.push(cell);
    }
    for (let i = 0; i < (16 * 16); i++) {

        color[i].addEventListener('click', () => (changeColor(color[i])));
    }

}
function changeColor(item) {
    if (!coloring) return;
    item.style.background = 'black';
}
function reset(item) {
    item.style.background = 'white';
}
function erase(item) {
    if (!eraser) return;
    item.style.background = 'white';
}
const btn = document.getElementById('info');
const resetbtn = document.getElementById('reset');
const erasebtn = document.getElementById('erase');
const colorbtn = document.getElementById('color');
colorbtn.addEventListener('click', () => {
    eraser = false;
    for (let i = 0; i < (16 * 16); i++) {
        color[i].addEventListener('click', () => changeColor(color[i]));
    }
    erase(0, 0);
    coloring=true;
})
erasebtn.addEventListener('click', () => {
    eraser = true;
    for (let i = 0; i < (16 * 16); i++) {
        color[i].addEventListener('mouseover', () => erase(color[i], 1));
    }
    coloring=false;
})
resetbtn.addEventListener('click', () => {
    for (let i = 0; i < (16 * 16); i++) {
        color[i].addEventListener('click', reset(color[i]));
    }
}
)
btn.addEventListener('click', () => {
    let size = parseInt(prompt('Enter new number of squares per side'));
    if (size > 100) alert('no');
    else {
        makeNewGrid(size, size);
    }
});
function makeNewGrid(rows, cols) {
    container.style.gridTemplateColumns = `repeat(rows, 1fr)`;
    container.style.gridTemplateRows = `repeat(cols, 1fr)`;
    cell = document.createElement("div");
    container.appendChild(cell).className = 'grid-block';
    color.push(cell);
}