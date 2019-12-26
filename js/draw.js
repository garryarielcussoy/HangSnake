const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){

    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var animalList = ['CHICKEN', 'SNAKE', 'TIGER', 'PANDA', 'OCTOPUS'];
    
    let randomNumb = (Math.floor(Math.random() * animalList.length));
    let toGuess = animalList[randomNumb];
    let randomLetters = [];
    for (index in toGuess){
        if (randomLetters.includes(toGuess[index]) === false){
            randomLetters.push(toGuess[index]);
        }
    }

    // Setting the side menu
    sideGuess = document.getElementById("side-guess");
    for (i = 0; i< toGuess.length; i++){
        underscore = document.createTextNode("_  ");
        underscoreDiv = document.createElement("span");
        underscoreDiv.appendChild(underscore);
        underscoreDiv.setAttribute("class", "valueGuess")
        sideGuess.appendChild(underscoreDiv);
    } 

    let answerLetters = randomLetters.map(elem => elem);

    boundLettersInArea = randomLetters.length + 5;
    while (randomLetters.length < boundLettersInArea){
        let randomNumb = (Math.floor(Math.random() * 26));
        if (randomLetters.includes(alphabet[randomNumb]) === false){
            randomLetters.push(alphabet[randomNumb]);
        }
    }

    snake = new Snake();
    fruitList = [];
    fruitCoordinat = [];
    sumOfCoordinat = [];

    console.log(randomLetters);
    console.log(fruitCoordinat);
    while (fruitList.length < randomLetters.length){
        fruit = new Fruit();
        fruit.pickLocation();
        uniqueSum = (100000 * fruit.x) + fruit.y; 
        if (sumOfCoordinat.includes(uniqueSum) === false)
        {
            console.log("Halooo")
            fruitList.push(fruit);
            fruitCoordinat.push([fruit.x, fruit.y]);
            sumOfCoordinat.push(uniqueSum);
        }
    }

    target = answerLetters.length
    let status = 0;
    let collision = 0;

    window.setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (i=0; i< randomLetters.length; i++){
            fruitList[i].draw(randomLetters[i]);
        }

        if (collision !== -1){
            collision = snake.update();
        }
        
        if (status !== -2 && target !== 0 && collision !== -1){
            snake.draw(target);
        }

        for (i=0; i< randomLetters.length; i++){
            if (snake.eat(fruitList[i])){
                console.log(randomLetters[i]);
                fruitList[i].pickLocation2();
                if (answerLetters.includes(randomLetters[i])){
                    target = target - 1
                    listIndexLetter = []
                    for (j = 0; j < toGuess.length; j++){
                        if (toGuess[j] === randomLetters[i]){
                            listIndexLetter.push(j);
                        }
                    }
                
                    sideGuessChange = document.getElementById("side-guess");
                    for (j = 0; j<listIndexLetter.length; j++){
                        sideGuessChange.children[listIndexLetter[j]].innerHTML = `${randomLetters[i]} `;
                    }
                }
                if (target === 0){
                    snake.stop()
                    let backgroundmusic = document.getElementById("backgroundmusic");
                    backgroundmusic.pause();
                    let winningsound = document.getElementById("winning");
                    winningsound.play();
                    alert("You win!")
                }
            }            
        }

        if (target !== 0 && status !== -2 && collision !== -1){
            status = snake.cekTabrakBadan();
        }

        if (status === -2 || collision === -1){
            snake.stop();
        }
        
    }, 250);
}());

window.addEventListener('keydown', ((evt)=>{
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
    console.log(direction);
    console.log(snake.x);
    console.log(snake.y);
    console.log(fruit.x);
    console.log(fruit.y);
}))