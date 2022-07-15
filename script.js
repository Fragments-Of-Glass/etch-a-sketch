let container = document.getElementById("container");
container.style.display = 'grid';
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;
let cell = [];
let color = [];

makeGrid();
function makeGrid() {
    for (let i = 0; i < (16 * 16); i++) {
        cell = document.createElement("div");
        container.appendChild(cell).className = 'grid-block';
        color.push(cell);
    }
    for (let i = 0; i < (16 * 16); i++) {

        color[i].addEventListener('mouseover', () => (changecolor(color[i])));
    }

}
function changecolor(item) {
    item.style.background = 'black';
}
function reset(item) {
    item.style.background = 'white';
}
function erase(item) {
    item.style.background = 'white';
}



const btn = document.getElementById('info');
const resetbtn = document.getElementById('reset');
const erasebtn = document.getElementById('erase');
erasebtn.addEventListener('click', () => {
    for (let i = 0; i < (16 * 16); i++) {
        color[i].addEventListener('mouseover', () => reset(color[i]));
    }
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

    }
});
