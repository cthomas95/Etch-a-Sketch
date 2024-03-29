
const GRIDSIDE = 600;
let squaresPerSide = 16

const sketchArea = document.querySelector("#sketch-area");

const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value")

sliderValue.textContent = `${slider.value} x ${slider.value} (Cells)`;


sketchArea.style.width =
sketchArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor() {
    this.style.backgroundColor = "black";
}

const createGridCells = (squaresPerSide) => {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight =  `${GRIDSIDE / squaresPerSide}`
    for (let i = 0; i < (numOfSquares); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = 
        gridCell.style.height = `${(GRIDSIDE / squaresPerSide)}px`;


        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("click", setBackgroundColor);
    }
}

const cell = document.querySelector(".cell");



function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

function sizeAdjuster() {
    let txt = `${this.value} x ${this.value} (Cells`
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value);
}

slider.addEventListener("input", sizeAdjuster);

createGridCells(16);

