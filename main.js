var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var animalList = ['CHICKEN', 'CROCODILE', 'SNAKE', 'TIGER'];

function gameStart(){
    let randomNumb = (Math.floor(Math.random() * animalList.length));
    let toGuess = animalList[randomNumb];
    let randomLetters = [];
    for (index in toGuess){
        if (randomLetters.includes(toGuess[index]) === false){
            randomLetters.push(toGuess[index]);
        }
    }

    boundLettersInArea = randomLetters.length + 5;
    while (randomLetters.length < boundLettersInArea){
        let randomNumb = (Math.floor(Math.random() * 26));
        if (randomLetters.includes(alphabet[randomNumb]) === false){
            randomLetters.push(alphabet[randomNumb]);
        }
    }

    console.log(toGuess);
    console.log(randomLetters);
    return randomLetters;
}

let letters = gameStart();

let canvas = document.getElementById("canvas");
let coordOfLetters = [];

for (let index = 0; index < letters.length; index++){
    let letterElem = document.createTextNode(letters[index]);
    let divLetterElem = document.createElement("div");
    divLetterElem.setAttribute("class", `letter letter${index}`);
    let status = true;
    while (status){
        let xRandom = Math.floor(Math.random() * 25) * 20;
        let yRandom = Math.floor(Math.random() * 25) * 20;
        let coord = [xRandom, yRandom];
        console.log(coordOfLetters);
        console.log(coord);
        if (coordOfLetters.includes(coord) === false){
            coordOfLetters.push(coord);
            status = false;
        }
    }
    divLetterElem.style.top = `${coordOfLetters[index][0]}px`;
    divLetterElem.style.left = `${coordOfLetters[index][1]}px`;
    divLetterElem.appendChild(letterElem);
    canvas.appendChild(divLetterElem);
}

// Change screen from main menu to main game
function letsPlay(){
    let mainGame = document.getElementById("main-game");
    let mainMenu = document.getElementById("main-menu");
}