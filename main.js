var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var animalList = ['CHICKEN', 'CROCODILE', 'SNAKE'];

function gameStart(){
    let randomNumb = (Math.floor(Math.random() * animalList.length));
    let toGuess = animalList[randomNumb];
    let randomLetters = [];
    for (index in toGuess){
        if (randomLetters.includes(toGuess[index]) === false){
            randomLetters.push(toGuess[index]);
        }
    }

    boundLettersInArea = randomLetters.length + 4;
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
    let status = False;
    while (status){
        let xRandom = Math.floor(Math.random() * 30) * 20;
        let yRandom = Math.floor(Math.random() * 30) * 20;
        let coord = [xRandom, yRandom];
        if (coordOfLetters.includes(coord))
    }
    divLetterElem.style.top = `${xRandom}px`;
    divLetterElem.style.left = `${yRandom}px`;
    divLetterElem.appendChild(letterElem);
    canvas.appendChild(divLetterElem);
}