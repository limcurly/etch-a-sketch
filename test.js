//random rgb maker

function randomRGB() {

    let r = Math.floor((Math.random() * 255) + 1);
    let g = Math.floor((Math.random() * 255) + 1);
    let b = Math.floor((Math.random() * 255) + 1);

    console.log(r + ' ' + g + ' ' + b)

}

randomRGB();