let colors = ['red', 'yellow', 'blue']
let count = 0
const btn = document.querySelector('#colorchange')
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[count % colors.length]
    count++
})
console.log('hello')