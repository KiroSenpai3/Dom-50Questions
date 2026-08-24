const text = document.querySelector('#text')
const counter = document.querySelector('#counter')

text.addEventListener("input", () => {
    counter.textContent = text.value.length
})