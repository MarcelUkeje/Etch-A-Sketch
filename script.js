const container = document.querySelector(".container");

let gridSize = 50;
const colour = "#FF0000";
const resizer = document.querySelector(".resizer");
resizer.addEventListener("click", () => {
    let prompter = true;
    while(prompter){
        gridSize = parseInt(prompt("How many units long do you want your grid? "), 10);
        if (isNaN(gridSize) || gridSize > 100 || gridSize < 0) {
            alert("Please enter a valid size.")
        }else {
            prompter = false
        }
    }
    buildGrid(gridSize);
}
)

function clearGrid(){
    container.innerHTML = "";
    container.style.backgroundColor = "#FFFFFF"
}
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearGrid);   

let isMouseDown = false;
document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
});
document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function buildGrid(gridSize){
    clearGrid();
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < gridSize; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mousedown", () => {
                cell.style.backgroundColor = colour;
            });
            cell.addEventListener("mouseover", () => {
                if(isMouseDown){
                    cell.style.backgroundColor = colour;
                }
            });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
buildGrid(gridSize);
//The event listener on line 12 takes a function that colors the div. 
//However, the function that colours the div takes in a value that tells it what colour to apply.
//The colour to be applied is gotten from the user's selection.


