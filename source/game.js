const { canvas, context } = getCanvasAndContext()

var ballPos = { x: 400, y: 300 }
var ballSpeed = { x: 5, y: 5 }
var ballSize = { width: 10, height: 10}

var palletSize = { width: 15, height: 100}

function getCanvasAndContext() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    return { canvas, context }
}

window.onload = () => {
    var frameRate = 60
    setInterval(() => {
        moveBall()
        draw()
    }, 1000/frameRate);
}

function moveBall() {
    ballPos.x = ballPos.x + ballSpeed.x
    if(ballPos.x >= canvas.width - ballSize.width) ballSpeed.x = -ballSpeed.x
    else if(ballPos.x <= 0) ballSpeed.x = -ballSpeed.x

    ballPos.y = ballPos.y + ballSpeed.y
    if(ballPos.y >= canvas.height - ballSize.height) ballSpeed.y = -ballSpeed.y
    else if(ballPos.y <= 0) ballSpeed.y = -ballSpeed.y
}

function draw() {
    console.log('drawing')
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.fillRect(0, canvas.height/2 - palletSize.height/2 , palletSize.width, palletSize.height);
    context.fillStyle = 'red';
    context.fillRect(ballPos.x, ballPos.y, ballSize.width, ballSize.height);
}