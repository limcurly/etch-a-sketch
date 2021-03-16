//CREATE GRIDS AND ALLOW USER TO "DRAW" WHEN HOVERED OVER
for (let i = 0; i < 256; i++) {
    const gridTile = document.createElement('div');
    gridTile.className = "gridTile";
    container.appendChild(gridTile);

    gridTile.addEventListener('mouseover', () => {
        gridTile.style.background = '#348bba';
    });
}; 


document.getElementById('reset-btn').addEventListener
('click', () => {
    
    let userGridInput = prompt('How many square per side in your new grid, good sir/madam?');

    if (userGridInput < 1 || userGridInput > 100 || userGridInput == "" ) {
        alert("Please choose a size between 1 and 100")
    } else if (userGridInput === null) {
        location.reload();
    }

    console.log(userGridInput)
});





