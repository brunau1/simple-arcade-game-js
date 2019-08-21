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
    if(ballPos.x == 800 - ballSize.width) ballSpeed.x = -5
    else if(ballPos.x == 0) ballSpeed.x = 5
}

function draw() {
    console.log('drawing')
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.fillRect(0, 200, palletSize.width, palletSize.height);
    context.fillStyle = 'red';
    context.fillRect(ballPos.x, ballPos.y, ballSize.width, ballSize.height);
}