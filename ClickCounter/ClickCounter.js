const count = document.querySelector("#count")
const btn = document.querySelector("#button")

let a = 0

btn.addEventListener('click', () => {
    a++
    count.textContent = a
})