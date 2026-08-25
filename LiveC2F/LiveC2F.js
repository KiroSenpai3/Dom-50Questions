const input = document.querySelector("#input")
const result = document.querySelector("#result")
let a 

input.addEventListener("input", () => {
    a = (input.value * 9 / 5  )  + 32
    result.textContent = a

    if(input.value === "")result.textContent = ""
})