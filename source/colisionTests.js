/* ------------ colision tests ------------ */
const { canvas, context } = getCanvasAndContext()

var ball = {
    pos: { x: 400, y: 300 },
    speed: { x: 5, y: 5 },
    size: { width: 10, height: 10 },
    isColliding: false
}

var arrayBalls = []

for (let i = 0; i < 30; i++) {
    const ball = new ball
    ball.pos.x = Math.floor(Math.random() * 800)
    ball.pos.y =  Math.floor(Math.random() * 600)
    ball.size = { width: 20, height: 20 }
    arrayBalls.push(ball)
}

function draw(ball) {
    console.log('drawing')
    createRect(ball.pos.x, ball.pos.y, ball.size.width, ball.size.height, ball.isColliding?'red':'green');
}

function createRect(posX, posY, width, height, color) {
    context.fillStyle = color;
    context.fillRect(posX, posY, width, height);
}

/* ------------ colision tests ------------ */