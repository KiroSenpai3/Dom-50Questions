const clock = document.querySelector("#clock")

setInterval(() => {
    clock.textContent = new Date().toLocaleTimeString()
}, 1000)