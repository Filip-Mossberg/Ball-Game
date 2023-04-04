let streak = 0;
let highscore = 0;
let timeout;

document.getElementById('ball').onmouseover = function(){

    timeout = setTimeout(moveBall, 200);
}

function moveBall(clicked){
    if(!clicked){
        streak = 0;
        document.getElementById('streak').innerHTML = streak;
    }

    const ball = document.getElementById('ball');
    let ballPositionTop = 0;
    let ballPositionLeft = 0;

    ballPositionTop = Math.random() * 100;
    if(ballPositionTop > 80){
    ballPositionTop = ballPositionTop - ((50 / screen.height) * 138);
    }

    ballPositionLeft = Math.random() * 100;
    if(ballPositionLeft > 80){
        ballPositionLeft = ballPositionLeft - ((50 / screen.width) * 125);
    }

    ball.style.top = ballPositionTop + "%";
    ball.style.left = ballPositionLeft + "%";
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

document.getElementById("easy").onclick = function(){
    this.style.transform = "scale(1.1)";
    this.style.z.index = 1;
}

document.getElementById("medium").onclick = function(){
    this.style.transform = "scale(1.1)";
    this.style.z.index = 0;
}

document.getElementById("hard").onclick = function(){
    this.style.transform = "scale(1.1)";
}
