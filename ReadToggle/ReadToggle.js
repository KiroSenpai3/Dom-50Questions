const para = document.querySelector("#para")
const button = document.querySelector("#toggle")

button.addEventListener("click", () => {
    para.classList.toggle("short")
    if(para.classList.contains('short')){
        button.textContent = 'Read More'
    }
    else{
        button.textContent = 'Read Less'
    }
})