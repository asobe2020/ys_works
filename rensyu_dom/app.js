const button = document.createElement('button')
button.innerText = 'クリックして'
document.body.appendChild(button)

button.addEventListener('click', function(){
    this.innerHTML = 'クリック済'
    this.setAttribute('disabled', true)
})

const ul = document.createElement('ul')
document.body.appendChild(ul)
const addButton = document.querySelector('#add-button')
const clearButton = document.querySelector('#clear-button')
const clearAllButton = document.querySelector('#clear-button_all')

addButton.addEventListener('click', function(){
    const li = document.createElement('li')
    li.innerHTML = 'https://www.youtube.com/watch?v=Axy55VP3DSY'
    ul.appendChild(li)
})

clearButton.addEventListener('click', function(){
    ul.removeChild(ul.lastChild)  
})

clearAllButton.addEventListener('click', function(){
    while(ul.lastChild){
        ul.removeChild(ul.lastChild)
    }
})

const buttonColor = document.querySelectorAll('.color .button')
const listColor = document.getElementById('list-color')

const buttonColorClick = function(){
    let element = document.createElement('li')
    element.innerHTML = this.innerHTML
    listColor.appendChild(element)
}

for(let i = 0; i < buttonColor.length; i++){
    buttonColor[i].addEventListener('click', buttonColorClick)
}