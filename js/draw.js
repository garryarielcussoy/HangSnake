const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){

    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var animalList = ['CHICKEN', 'CROCODILE', 'SNAKE', 'TIGER'];
    
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

    snake = new Snake();
    fruitList = [];

    for (i = 0; i < randomLetters.length; i++){
        fruit = new Fruit();
        fruit.pickLocation();
        fruitList.push(fruit);
    }

    target = fruitList.length

    window.setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (i=0; i< randomLetters.length; i++){
            fruitList[i].draw(randomLetters[i]);
        }
        snake.update();
        snake.draw();

        for (i=0; i< randomLetters.length; i++){
            if (snake.eat(fruitList[i])){
                console.log(randomLetters[i]);
                fruitList[i].pickLocation2();
                target = target - 1;
                if (target === 0){
                    snake.stop()
                    alert("You win!")
                }
            }            
        }

        snake.cekTabrakBadan();

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