const { canvas, context } = getCanvasAndContext()

var getCanvasAndContext = () => {
    return window.onload = () => {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        return { canvas, context }
    }
}