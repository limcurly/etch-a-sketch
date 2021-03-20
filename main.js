const container = document.getElementById('container');
const motherDiv = document.getElementById('motherDiv');
let newContainer;
let trueOrFalse = false;

// FUNCTION TO MAKE THE DEFAULT GRID 
function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        const gridTile = document.createElement('div');
        gridTile.className = "gridTile";
        container.appendChild(gridTile);
    
        gridTile.addEventListener('mouseover', () => {
            gridTile.style.background = '#348bba';
        });
    }; 
}


// FUNCTION TO RESET THE GRID
function resetGrid() {
    container.innerHTML = '';

    if (newContainer) { newContainer.innerHTML = '' };
}


//function to build new grid
function buildGrid() {

    //get data from user and log it
    let userInput = prompt('Choose the size of the next grid, 2 - 100, ');

    if (userInput < 2 || userInput > 100 || isNaN(userInput)) {
        alert('Invalid Input');
        resetGrid();
        buildGrid();
    }

    let inputSquared = userInput ** 2;
    console.log('userInput ' + userInput);
    console.log("inputSquared " + inputSquared);

    //1. remove default container
    if (trueOrFalse == false) {document.getElementById('container').remove();}
    else if (trueOrFalse == true) {newContainer.remove()};

    //2. Create new container with columns and grids being created with userInput
    newContainer = document.createElement('div');
    newContainer.className = 'newContainer';
    motherDiv.appendChild(newContainer);
    newContainer.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`
    newContainer.style.gridTemplateRows = `repeat(${userInput}, 1fr)`

    //3. for loop to add the tilees into the new container
    for (let i = 0; i < inputSquared; i++) {
        const gridTile = document.createElement('div');
        gridTile.className = "gridTile";
        newContainer.appendChild(gridTile);
    
        gridTile.addEventListener('mouseover', () => {
        gridTile.style.background = '#348bba';
        });
    }

    trueOrFalse = true;
    console.log(trueOrFalse);
}

//function to build new grid WITH RGB!!!
function buildGridRGB() {

    //get data from user and log it
    let userInput = prompt('Choose the size of the next grid, 2 - 100, ');

    if (userInput < 2 || userInput > 100 || isNaN(userInput)) {
        alert('Invalid Input');
        resetGrid();
        buildGrid();
    }

    let inputSquared = userInput ** 2;
    console.log('userInput ' + userInput);
    console.log("inputSquared " + inputSquared);

    //1. remove default container
    if (trueOrFalse == false) {document.getElementById('container').remove();}
    else if (trueOrFalse == true) {newContainer.remove()};

    //2. Create new container with columns and grids being created with userInput
    newContainer = document.createElement('div');
    newContainer.className = 'newContainer';
    motherDiv.appendChild(newContainer);
    newContainer.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`
    newContainer.style.gridTemplateRows = `repeat(${userInput}, 1fr)`

    //3. for loop to add the tilees into the new container
    for (let i = 0; i < inputSquared; i++) {
        const gridTile = document.createElement('div');
        gridTile.className = "gridTile";
        newContainer.appendChild(gridTile);
    
        gridTile.addEventListener('mouseover', () => {
            let r = Math.floor((Math.random() * 255) + 1);
            let g = Math.floor((Math.random() * 255) + 1);
            let b = Math.floor((Math.random() * 255) + 1);
            console.log(r + ' ' + g + ' ' + b);
            gridTile.style.background = `rgb(${r},${g},${b})`;
        });
    }

    trueOrFalse = true;
    console.log(trueOrFalse);
}

// RESET BUTTON
document.getElementById('reset-btn').addEventListener('click', () => {

    resetGrid();
    buildGrid();

})

// RESET + RGB BUTTON
document.getElementById('rgb-btn').addEventListener('click', () => {
    resetGrid();
    buildGridRGB();
})

//default grid upon load
defaultGrid();