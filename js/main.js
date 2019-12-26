var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var animalList = ['CHICKEN', 'CROCODILE', 'SNAKE', 'TIGER'];


function letsPlay(){
    // Change screen from main menu to main game
    let mainGame = document.getElementById("main-game");
    let mainMenu = document.getElementById("main-menu");
    mainMenu.setAttribute("class", "toggle-off");
    mainGame.setAttribute("class", "toggle-on");

    // Insert Audio
    let backgroundMusic = document.getElementById("backgroundmusic");
    backgroundMusic.play();
}