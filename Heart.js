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
    div.style.backgroundColor = getRandomColor()
    return div
}

const Square = ({x, y}) => {
    const div = createDiv('', 'shape')
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    div.style.transform = 'rotate(45deg)'
    div.style.backgroundColor = getRandomColor()
    return div
}

const createPositions = (x, y) => {
    const circle1 = {x: x - 50, y: y - 50 }
    const circle2 = {x: x + 50, y: y - 50 }
    const square =  { x: x, y: y}    
    return {
        circle1, 
        circle2,
        square
    }
}


const Heart = ({x, y}) => {
    const heart = createDiv()
    const {circle1, circle2, square } = createPositions(x, y)
    render(Circle(circle1), heart)
    render(Circle(circle2), heart)
    render(Square(square), heart)
    return heart
}


const App = () => {
    const app = createDiv()
    const heartPosition = {
        x: 250,
        y: 250,
    }
    const heartPositions = Array.from({length: 100}, () => {
        const randomX = Math.random() * window.innerWidth
        const randomY = Math.random() * window.innerHeight
        return {
            x: randomX,
            y: randomY
        }
    })
    heartPositions.forEach((position) => {
        render(Heart(position),app)
    })
  

    // render(Heart(heartPosition), app)
    return app
    
}




render(App(), document.getElementById('root'))


// # 2 more hours just now

