const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`

const render = (element, target) => {
    target.appendChild(element)
}

const createDiv = (text = '', className = '') => {
    const div = document.createElement('div')
    div.innerText = text
    div.className = className
    return div
}

const Circle = ({ x, y }) => {
    const div = createDiv('', 'shape')
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    div.style.borderRadius = '10rem'
    return div
}

const Square = ({x, y}) => {
    const div = createDiv('', 'shape')
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    div.style.transform = 'rotate(45deg)'
    return div
}

const circle1Position = {
    x: 200,
    y: 200,
}
const circle2Position = {
    x:300,
    y: 200,
}

const squarePosition = {
    x: 250,
    y: 250,
}



const circle1 = Circle(circle1Position)
const circle2 = Circle(circle2Position)
const square = Square(squarePosition) 
const app = createDiv()
render(circle1, app)
render(circle2, app)
render(square, app)
render(app, document.getElementById('root'))



