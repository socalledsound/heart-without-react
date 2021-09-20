const Circle = ({x, y, color, size}) => {
    const div = document.createElement('div')
    div.className= 'circle'
    console.log(x, y)
    div.style.backgroundColor = color
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    div.style.borderRadius = `${size/2}px`
    console.log(div.style.left)
    return div
}