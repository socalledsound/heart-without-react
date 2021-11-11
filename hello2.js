const App = () => {
    const div = document.createElement('div')
    div.innerText = '👋 hi there'
    div.className = 'hello'
    return div
}

const render = (element, target) => {
    target.appendChild(element)
}


render(App(), document.getElementById('root'))
