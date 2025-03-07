/* -------------------------- element declarations -------------------------- */

let todoContainer = document.querySelector("#todo-container")
let addItemButton = document.querySelector("#add-item")

/* ---------------------------------- init ---------------------------------- */

if (localStorage.getItem("todo-list") === null) {
    localStorage.setItem("todo-list", JSON.stringify([]))
} else {
    todoRender()
}

/* -------------------------------- functions ------------------------------- */

function todoRender() {
    let currentList = JSON.parse(localStorage.getItem("todo-list"))
    
    // reset #todo-container before populating it
    todoContainer.innerHTML = ""

    for (let i = currentList.length - 1; i >= 0; i--) {
        let listElement = document.createElement("li")
        listElement.innerHTML = currentList[i]

        todoContainer.appendChild(listElement)
    }
}

function todoAdd() {
    let newItem = prompt("New Todo Item:")

    if (item !== "") {
        let currentList = JSON.parse(localStorage.getItem("todo-list"))

        localStorage.setItem("todo-list", JSON.stringify([newItem, ...currentList]))

        todoRender()
    }
}

/* ----------------------------- event listeners ---------------------------- */

addItemButton.addEventListener("click", todoAdd)