const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){

    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var animalList = ['CHICKEN', 'SNAKE', 'TIGER', 'PANDA', 'OCTOPUS', 'SQUID'];
    var fruitsList = ['AVOCADO', 'ORANGE', 'APPLE', 'MANGO', 'CHERRY', 'BANANA'];
    var caountryList = ['GERMANY', 'FRANCE', 'ENGLAND', 'JAPAN', 'DENMARK'];
    var allList = [animalList, fruitsList, caountryList];
    var categoryList = ["Animal", "Fruit", "Country"];

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

    categoryText = document.createTextNode("Category :");
    category = document.createElement("h1");
    categoryText = category.appendChild(categoryText);
    category.setAttribute("class", "category");
    sideGuess.appendChild(category);
    categoryName = document.createElement("h2");
    categoryNameText = document.createTextNode(`${choosenCategory}`);
    categoryName.appendChild(categoryNameText);
    categoryName.setAttribute("class", "category-name");
    sideGuess.appendChild(categoryName);
    livesBar = document.createElement("div");
    livesBar.setAttribute("class", "lives-bar");
    livesBarText = document.createTextNode("Lives : 3");
    livesBar.appendChild(livesBarText);
    sideGuess.appendChild(livesBar);

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

    // Formula Coordinate Unique
    function formula(x, y){
        return (100 * x) + y;
    }

    sumOfCoordinat = [0, 2020, 4420, 4440, 4460, 6420, 6440, 6460, 8420, 8440, 8460, 42040, 42060, 42080, 44040, 44060, 44080, 46040, 46060, 46080];

    // Wall A
    for (x = 40; x<=200; x = x+20){
        sumOfCoordinat.push(formula(x, 40));
    }
    for (x = 40; x<=200; x = x+20){
        sumOfCoordinat.push(formula(x, 60));
    }
    for (y = 40; y<=120; y = y+20){
        sumOfCoordinat.push(formula(40, y));
    }
    for (y = 60; y<=120; y = y+20){
        sumOfCoordinat.push(formula(40, y));
    }
    
    // Wall B
    for (x = 280; x<=440; x = x+20){
        sumOfCoordinat.push(formula(x, 440));
    }
    for (x = 280; x<=440; x = x+20){
        sumOfCoordinat.push(formula(x, 460));
    }
    for (y = 360; y<=440; y = y+20){
        sumOfCoordinat.push(formula(440, y));
    }
    for (y = 360; y<=440; y = y+20){
        sumOfCoordinat.push(formula(460, y));
    }

    // Dinding Tengah
    for (x = 140; x<=360; x = x+20){
        sumOfCoordinat.push(formula(x, 240));
    }
    for (x = 140; x<=360; x = x+20){
        sumOfCoordinat.push(formula(x, 260));
    }
    for (y = 140; y<=360; y = y+20){
        sumOfCoordinat.push(formula(240, y));
    }
    for (y = 140; y<=360; y = y+20){
        sumOfCoordinat.push(formula(260, y));
    }

    console.log(randomLetters);
    console.log(fruitCoordinat);
    while (fruitList.length < randomLetters.length){
        fruit = new Fruit();
        fruit.pickLocation();
        uniqueSum = (100 * fruit.x) + fruit.y; 
        if (sumOfCoordinat.includes(uniqueSum) === false)
        {
            fruitList.push(fruit);
            fruitCoordinat.push([fruit.x, fruit.y]);
            sumOfCoordinat.push(uniqueSum);
        }
    }

    target = answerLetters.length
    let status = 0;
    let collision = 0;
    let lives = 3;

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
                        sideGuessChange.children[listIndexLetter[j]+3].innerHTML = `${randomLetters[i]} `;
                    }
                }
                else{
                    lives = lives - 1;
                    livesBar.innerHTML = `Lives : ${lives}`;
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
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            clearInterval(checkGame);
            snake.stop();
        }

        if (target === 0 || collision === -1 || status === -2){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            clearInterval(checkGame);
            playAgain = document.createElement("div");
            playAgainText = document.createTextNode("Play Again?");
            playAgain.appendChild(playAgainText);
            playAgain.setAttribute("class", "play-again");
            playAgain.setAttribute("onclick", "reload()");
            sideGuess.appendChild(playAgain);
        }

        if (lives === 0){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            alert("You lose!");
            snake.stop();
            clearInterval(checkGame);
            playAgain = document.createElement("div");
            playAgainText = document.createTextNode("Play Again?");
            playAgain.appendChild(playAgainText);
            playAgain.setAttribute("class", "play-again");
            playAgain.setAttribute("onclick", "reload()");
            sideGuess.appendChild(playAgain);
        }
        
    }, 100);
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