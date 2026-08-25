const list = document.querySelector("#list")
const textarea = document.querySelector("#textarea")
const btn = document.querySelector("#button")


btn.addEventListener("click", () => {
    const li = document.createElement("li")
    li.textContent = textarea.value

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    li.append(deleteBtn)

    deleteBtn.addEventListener("click", () => {
        li.remove()
    })

    li.addEventListener("click", () => {
        li.classList.toggle("completed")
    })

    textarea.value = ""
    list.append(li)
    
})
