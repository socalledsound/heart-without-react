const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`

const render = (element, target) => {
    target.appendChild(element)
}

const maxCircleSize = 500

const data = Array.from( { length: 200}, (element, index) => {
    const x = Math.random() * window.innerWidth/2
    const y = Math.random() * window.innerHeight/2
    const color = getRandomColor()
    const size = Math.random() * maxCircleSize
    return {
        x,
        y,
        color,
        size,
    }
}) 


const circles = data.map((circleData, index) => 
    Circle({
        x: circleData.x, 
        y: circleData.y, 
        color: circleData.color,
        size : circleData.size
    }))

const moveCircle = (idx) => {
    const circle = circles[idx]
    circle.x = circle.x + Math.random() * 10
    circle.y = circle.y + Math.random() * 10
    return circle

}


const loop = () => {
console.log('looping')

circles.forEach((circle, index) => {
    const movedCircle = moveCircle(index)    
    render(movedCircle, document.getElementById('root'))

})
window.requestAnimationFrame(loop)
}

loop()



