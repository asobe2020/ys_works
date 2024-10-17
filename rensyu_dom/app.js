const button = document.createElement('button')
button.innerText = 'クリックして'
document.body.appendChild(button)

button.addEventListener('click', function(){
    this.innerHTML = 'クリック済'
    this.setAttribute('disabled', true)
})

const ul = document.createElement('ul')
document.body.appendChild(ul)
const addButton = document.querySelector('#addButton')

addButton.addEventListener('click', function(){
    const li = document.createElement('li')
    li.innerHTML = 'https://www.youtube.com/watch?v=Axy55VP3DSY'
    ul.appendChild(li)
})


