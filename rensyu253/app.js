const div = document.querySelector('div')

let randColorOne = Math.floor(Math.random() * 256)
let randColorTwo = Math.floor(Math.random() * 256)
let randColorThree = Math.floor(Math.random() * 256)
let randColorText = `rgb(${randColorOne},${randColorTwo},${randColorThree})`

const body = document.querySelector('body')

function changeColor(){
    body.style.backgroundColor = randColorText
}

let h1 = document.createElement('h1')
h1.innerText = randColorText
div.appendChild(h1)

const button = document.createElement('button')
button.innerText = 'クリックしてね'
div.appendChild(button)

button.addEventListener('click', changeColor)