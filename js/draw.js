const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){

    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var animalList = ['CHICKEN', 'SNAKE', 'TIGER', 'PANDA', 'OCTOPUS'];
    var fruitsList = ['AVOCADO', 'ORANGE', 'APPLE', 'MANGO', 'CHERRY'];
    var allList = [animalList, fruitsList];
    var categoryList = ["Animal", "Fruit"];

    // Randoming the category
    randomCategory = Math.floor(Math.random() * allList.length);
    choosenList = allList[randomCategory];
    choosenCategory = categoryList[randomCategory];

    let randomNumb = (Math.floor(Math.random() * choosenList.length));
    let toGuess = choosenList[randomNumb];
    let randomLetters = [];
    for (index in toGuess){
        if (randomLetters.includes(toGuess[index]) === false){
            randomLetters.push(toGuess[index]);
        }
    }

    // Setting the side menu
    sideGuess = document.getElementById("side-guess");

    categoryText = document.createTextNode("Category");
    category = document.createElement("h1");
    categoryText = category.appendChild(categoryText);
    category.setAttribute("class", "category");
    sideGuess.appendChild(category);
    categoryName = document.createElement("h2");
    categoryNameText = document.createTextNode(`${choosenCategory}`);
    categoryName.appendChild(categoryNameText);
    categoryName.setAttribute("class", "category-name");
    sideGuess.appendChild(categoryName);

    for (i = 0; i< toGuess.length; i++){
        underscore = document.createTextNode("_  ");
        underscoreDiv = document.createElement("span");
        underscoreDiv.appendChild(underscore);
        underscoreDiv.setAttribute("class", "valueGuess")
        sideGuess.appendChild(underscoreDiv);
    }

    let answerLetters = randomLetters.map(elem => elem);

    boundLettersInArea = randomLetters.length + 8;
    while (randomLetters.length < boundLettersInArea){
        let randomNumb = (Math.floor(Math.random() * 26));
        if (randomLetters.includes(alphabet[randomNumb]) === false){
            randomLetters.push(alphabet[randomNumb]);
        }
    }

    snake = new Snake();
    fruitList = [];
    fruitCoordinat = [];
    sumOfCoordinat = [0, 40];

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

    var checkGame = window.setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (i=0; i< randomLetters.length; i++){
            fruitList[i].draw(randomLetters[i]);
        }

        if (collision !== -1 || target !== 0 || status !== -2){
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
                        sideGuessChange.children[listIndexLetter[j]+2].innerHTML = `${randomLetters[i]} `;
                    }
                }
                if (target === 0){
                    clearInterval(checkGame);
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
            clearInterval(checkGame);
            snake.stop();
        }

        if (target === 0 || collision === -1 || status === -2){
            clearInterval(checkGame);
            playAgain = document.createElement("div");
            playAgainText = document.createTextNode("Play Again?");
            playAgain.appendChild(playAgainText);
            playAgain.setAttribute("class", "play-again");
            playAgain.setAttribute("onclick", "reload()");
            sideGuess.appendChild(playAgain);
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