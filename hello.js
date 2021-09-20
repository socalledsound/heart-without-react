const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`

const render = (element, target) => {
    target.appendChild(element)
}

const createDiv = (text = '', styles = {}) => {
    const div = document.createElement('div')
    div.innerText = text
    const keys = Object.keys(styles)
    keys.forEach(key => {
        console.log(key, styles[key])
        div.style[key] = `${styles[key]}`
    })
    return div
}


const helloStyles = {
    color: 'green',
    fontSize: '10rem',
    margin: '0 auto',
    marginTop: '40vh'
}

const flexContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: getRandomColor(),
    height: '100vh'

}

const container = createDiv('', flexContainerStyles)
const content = createDiv('hi there', helloStyles)
render(content, container)
render(container, document.getElementById('root'))
