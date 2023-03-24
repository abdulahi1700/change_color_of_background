const button = document.querySelector('button')
const body = document.querySelector('body')
const color = ['red', 'green', 'blue', 'grey', 'yellow', 'brown', 'pink ']

button.addEventListener('click', changeB)

body.style.backgroundColor = '#F5EBEB'

function changeB(){
    const colorIntex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIntex]
}