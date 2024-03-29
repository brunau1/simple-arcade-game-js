const { canvas, context } = getCanvasAndContext()

var ball = {
    pos: { x: 400, y: 300 },
    speed: { x: 5, y: 5 },
    size: { width: 10, height: 10 }
}

var pallet = {
    pos: { x: 0, y: 0 },
    speed: { x: 0, y: 8 },
    size: { width: 15, height: 150 }
}

function getCanvasAndContext() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    return { canvas, context }
}

window.onload = () => {
    var frameRate = 60
    setInterval(() => {
        // console.clear()
        moveBall()
        movePallet()
        draw()
    }, 1000 / frameRate);
}

function moveBall() {
    // console.log(`Ball PosX: ${ball.pos.x}`)
    // console.log(`Ball PosY: ${ball.pos.y}`)

    ball.pos.x = ball.pos.x + ball.speed.x
    ball.pos.y = ball.pos.y + ball.speed.y

    canvasColision(ball)
    handleColision(objectColision(ball, pallet), ball)
}

function movePallet() {
    // console.log(`Pallet PosY: ${pallet.pos.y}`)

    pallet.pos.y = pallet.pos.y + pallet.speed.y

    canvasColision(pallet)
}

function canvasColision(object) {
    if (object.pos.y >= canvas.height - object.size.height) object.speed.y = -object.speed.y
    else if (object.pos.y <= 0) object.speed.y = -object.speed.y

    if (object.pos.x >= canvas.width - object.size.width) object.speed.x = -object.speed.x
    else if (object.pos.x <= 0) object.speed.x = -object.speed.x
}

function objectColision(gameObject, testObject) {
    //teste de colisão baseado nos testes do projeto "simple-game"
    //acesso em https://github.com/brunau1/simple-game/blob/master/javascript/controller.js
    /*
        Esta simples função consiste na verificação dos pontos de referência nas extremidades do topo
        da bolinha, em que é feito o teste da sua posição em relação à área ocupada pelo objeto a qual
        desejamos verificar se ele colidiu ou não.

        Primeiro ponto -> ball.pos.x e ball.pos.y
        Segundo ponto -> ball.pos.x + ball.size.width e ball.pos.y + ball.size.height
    */
    if ((gameObject.pos.x >= testObject.pos.x) && (gameObject.pos.x <= testObject.pos.x + testObject.size.width)
        && (gameObject.pos.y >= testObject.pos.y) && (gameObject.pos.y <= testObject.pos.y + testObject.size.height))
        return { wasColided: true, direction: 'left' }
    if ((gameObject.pos.x + gameObject.size.width >= testObject.pos.x) && (gameObject.pos.x + gameObject.size.width <= testObject.pos.x + testObject.size.width)
        && (gameObject.pos.y + gameObject.size.height >= testObject.pos.y) && (gameObject.pos.y + gameObject.size.height <= testObject.pos.y + testObject.size.height))
        return { wasColided: true, direction: 'right' }
    return { wasColided: true, direction: 'none' }
}

function handleColision(colision, object) {
    if (colision.direction == 'left') {
        console.log("LEFT")
        object.speed.x = -object.speed.x
    }
    if (colision.direction == 'right') {
        console.log("RIGHT")
        object.speed.x = -object.speed.x
    }
    if (colision.direction == 'none') console.log("NONE")
}

function draw() {
    console.log('drawing')
    createRect(0, 0, canvas.width, canvas.height, 'black');
    createRect(pallet.pos.x, pallet.pos.y, pallet.size.width, pallet.size.height, 'white');
    createRect(ball.pos.x, ball.pos.y, ball.size.width, ball.size.height, 'red');
}

function createRect(posX, posY, width, height, color) {
    context.fillStyle = color;
    context.fillRect(posX, posY, width, height);
}