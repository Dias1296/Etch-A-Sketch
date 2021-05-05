const container_Div = document.querySelector('div.container_Div');
const clear_button = document.querySelector('button.clear_Button');
const new_grid_button = document.querySelector('button.new_Grid_Button');
let animationEnded = true;

let squareGrid;
let squareGridSize;
let gridSizeRoot;

function setGridSize(size) {
    container_Div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i=0; i<size*size; i++){
        const squareElement = document.createElement("div");
        squareElement.classList = "square";
        squareElement.addEventListener("mouseover", changeColorRainbow);
        container_Div.appendChild(squareElement);
    }
}

function changeColorRainbow(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 1)`;
}   

function ClearGrid() {
    squareGrid = Array.from(document.querySelectorAll('div.square'));
    squareGridSize = squareGrid.length;

    for (let i = 0; i<squareGridSize; i++) {
        squareGrid[i].animate([
        {backgroundColor: `${squareGrid[i].style.backgroundColor}`},
        {backgroundColor: 'grey'}],
        500);
        squareGrid[i].style.backgroundColor = 'grey';
            
    }
}

function removeGrid() {
    const gridArray = Array.from(container_Div.childNodes);
    gridArray.forEach((element) => {
        container_Div.removeChild(element);
    })
}

function changeSize() {
    let newGridSize = prompt("Enter new grid size", "16");

    if (newGridSize != null) {
        newGridSize = parseInt(newGridSize);
        if (newGridSize < 1 || newGridSize > 100 || Number.isNaN(newGridSize)){
            alert("Enter a number between 1-100");
        }
        else {
            ClearGrid();
            removeGrid();
            setGridSize(newGridSize);
            fillGrid(newGridSize);
        }
    }
}

clear_button.addEventListener('click', ClearGrid);

new_grid_button.addEventListener('click', changeSize);

setGridSize(16);
fillGrid(16);