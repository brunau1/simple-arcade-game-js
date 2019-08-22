const { canvas, context } = getCanvasAndContext()

var ballPos = { x: 400, y: 300 }
var ballSpeed = { x: 5, y: 5 }
var ballSize = { width: 10, height: 10 }

var palletSize = { width: 15, height: 100 }
var palletPos = { x: 0, y: 0 }
var palletSpeed = { x: 0, y: 8 }

function getCanvasAndContext() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    return { canvas, context }
}

window.onload = () => {
    var frameRate = 60
    setInterval(() => {
        console.clear()
        moveBall()
        movePallet()
        draw()
    }, 1000 / frameRate);
}

function moveBall() {
    console.log(`Ball PosX: ${ballPos.x}`)
    console.log(`Ball PosY: ${ballPos.y}`)

    ballPos.x = ballPos.x + ballSpeed.x
    ballPos.y = ballPos.y + ballSpeed.y

    canvasColision(ballPos, ballSpeed, ballSize)
}

function movePallet() {
    console.log(`Pallet PosY: ${palletPos.y}`)

    palletPos.y = palletPos.y + palletSpeed.y

    canvasColision(palletPos, palletSpeed, palletSize)
}

function canvasColision(pos, speed, size) {
    if (pos.y >= canvas.height - size.height) speed.yy = -speed.y
    else if (pos.y <= 0) speed.y = -speed.y

    if (pos.x >= canvas.width - size.width) speed.x = -speed.x
    else if (pos.x <= 0) speed.x = -speed.x
}

function draw() {
    console.log('drawing')
    createRect(0, 0, canvas.width, canvas.height, 'black');
    createRect(palletPos.x, palletPos.y, palletSize.width, palletSize.height, 'white');
    createRect(ballPos.x, ballPos.y, ballSize.width, ballSize.height, 'red');
}

function createRect(posX, posY, width, height, color) {
    context.fillStyle = color;
    context.fillRect(posX, posY, width, height);
}