// This part has onclick functions for the difficallity menu
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
let currentDifficality = "medium";

document.getElementById("easy").onclick = function(){
    this.style.transform = "scale(1.1)";
    this.style.zIndex = 1;
    currentDifficality = "easy";
    transform(medium, hard);
}

document.getElementById("medium").onclick = function(){
    this.style.transform = "scale(1.1)";
    this.style.zIndex = 1;
    currentDifficality = "medium";
    transform(easy, hard);
}

document.getElementById("hard").onclick = function(){
    this.style.transform = "scale(1.1)";
    this.style.zIndex = 1;
    currentDifficality = "hard";
    transform(easy, medium);
}

// This part has onclick functions for the difficallity menu
const large = document.getElementById("large");
const midsize = document.getElementById("midsize");
const small = document.getElementById("small");
const ball = document.getElementById("ball");
// These are also used further down in the code to decide how much margin to remove from the corners
const largeSizeInPx = 100;
const midsizeSizeInPx = 50;
const smallSizeInPx = 25;
let currentSize = "midsize";

document.getElementById("large").onclick = function(){
    this.style.transform = "scale(1.1)";
    this.style.zIndex = 1;
    ball.style.height = largeSizeInPx + "px";
    ball.style.width = largeSizeInPx + "px";;
    currentSize = "large";
    transform(midsize, small);
}

document.getElementById("midsize").onclick = function(){
    this.style.transform = "scale(1.1)";
    this.style.zIndex = 1;
    ball.style.height = midsizeSizeInPx + "px";
    ball.style.width = midsizeSizeInPx + "px";
    currentSize = "midsize";
    transform(large, small);
}

document.getElementById("small").onclick = function(){
    this.style.transform = "scale(1.1)";
    this.style.zIndex = 1;
    ball.style.height = smallSizeInPx + "px";
    ball.style.width = smallSizeInPx + "px";
    currentSize = "small";
    transform(large, midsize);
}

// Both menues use this function to change how they are displayed
function transform(mode1, mode2){
    mode1.style.transform = "scale(1.0)";
    mode2.style.transform = "scale(1.0)";
    
    mode1.style.zIndex = 0;
    mode2.style.zIndex = 0;
}






let streak = 0;
let highscore = 0;
let timeout;

document.getElementById('ball').onmouseover = function(){

    console.log(currentDifficality);
    timeout = setTimeout(moveBall, Difficality(currentDifficality));
}

function moveBall(clicked){
    if(!clicked){
        streak = 0;
        document.getElementById('streak').innerHTML = streak;
    }


    const ball = document.getElementById('ball');
    const container = document.getElementsByClassName('ball-container')[0];
    let ballPositionTop = Math.random() * (container.clientHeight - ball.clientHeight);
    let ballPositionLeft = Math.random() * (container.clientWidth - ball.clientWidth);

    if(currentSize == "large"){
        ballPositionTop = ballPositionTop - (((50 / screen.height) * largeSizeInPx) - largeSizeInPx / 2);
        ballPositionLeft = ballPositionLeft - (((50 / screen.width) * largeSizeInPx) - largeSizeInPx / 2);
    }
    if(currentSize == "midsize"){
        ballPositionTop = ballPositionTop - ((50 / screen.height) * midsizeSizeInPx);
        ballPositionLeft = ballPositionLeft - ((50 / screen.width) * midsizeSizeInPx);
    }
    if(currentSize == "small"){
        ballPositionTop = ballPositionTop - (((50 / screen.height) * smallSizeInPx) - smallSizeInPx / 2);
        ballPositionLeft = ballPositionLeft - (((50 / screen.width) * smallSizeInPx) - smallSizeInPx / 2);
    }

    ball.style.top = ballPositionTop + "px";
    ball.style.left = ballPositionLeft + "px";
}

document.getElementById('ball').onclick = function(){
    clearTimeout(timeout);
    moveBall(true);
    ballColor();
    streak = streak + 1;

    if(streak > highscore){
        highscore = highscore + 1;
        document.getElementById('highscore').innerHTML = streak;
    }

    document.getElementById('streak').innerHTML = streak;
}

function ballColor() {
    const colors = ['red', 'green', 'yellow', 'orange', 'purple', 'pink', 'blue'];
    const CurrentColor = document.getElementById('ball').style.background;

    let colorPicker;
    do{
        colorPicker = Math.round(Math.random() * 6);
    }while(CurrentColor == colors[colorPicker])

    document.getElementById('ball').style.background = colors[colorPicker];
}

function Difficality(current){
    if(current == "easy"){
        return 400;
    }
    else if(current == "medium"){
        return 200;
    }
    else{
        return 100;
    }
}




