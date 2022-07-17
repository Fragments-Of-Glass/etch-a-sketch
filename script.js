let container = document.getElementById("container");
container.style.display = 'grid';
let cell;
let color = [];
var eraser = false;
var coloring = true;
let height;
var div;
const btn = document.getElementById('info');
const resetbtn = document.getElementById('reset');
const erasebtn = document.getElementById('erase');
const colorbtn = document.getElementById('color');
makeGrid();
function makeGrid() {
    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    
    for (let i = 0; i < (16 * 16); i++) {
        cell = document.createElement("div");
        container.appendChild(cell).className = 'grid-block';
        color.push(cell);
    }
    for (let i = 0; i < (16 * 16); i++) {
        color[i].addEventListener('click', () => (changeColor(color[i])));
    }
}
function makeNewGrid(rows) {
    height = 512 / rows;
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    while (container.firstElementChild) {
        color.pop(cell);
        container.removeChild(container.lastChild);
    }
    for (let i = 0; i < (rows * rows); i++) {

        cell = document.createElement("div");
        container.appendChild(cell).className = 'grid-block';
        div=document.querySelector('.grid-block');
        div.height=height;
        div.width=height;
        color.push(cell);
    }
    for (let i = 0; i < (rows * rows); i++) {
        color[i].addEventListener('click', () => (changeColor(color[i])));

    }
    erasebtn.addEventListener('click', () => {
        eraser = true;
        for (let i = 0; i < (rows * rows); i++) {
            color[i].addEventListener('mouseover', () => erase(color[i], 1));
        }
        coloring = false;
    })
    resetbtn.addEventListener('click', () => {
        for (let i = 0; i < (rows * rows); i++) {
            color[i].addEventListener('click', reset(color[i]));
        }
    })

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
colorbtn.addEventListener('click', () => {
    eraser = false;
    for (let i = 0; i < (16 * 16); i++) {
        color[i].addEventListener('click', () => changeColor(color[i]));
    }
    erase(0, 0);
    coloring = true;
})
erasebtn.addEventListener('click', () => {
    eraser = true;
    for (let i = 0; i < (16 * 16); i++) {
        color[i].addEventListener('mouseover', () => erase(color[i], 1));
    }
    coloring = false;
})
resetbtn.addEventListener('click', () => {
    for (let i = 0; i < (16 * 16); i++) {
        color[i].addEventListener('click', reset(color[i]));
    }
})
btn.addEventListener('click', () => {
    let size = parseInt(prompt('Enter new number of squares per side'));
    if (size > 100 || size < 1) alert('no');
    else {
        makeNewGrid(size);
    }
});
