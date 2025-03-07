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
    
    todoContainer.innerHTML = ""

    for (let i = currentList.length - 1; i >= 0; i--) {
        let listElement = document.createElement("li")

        listElement.innerHTML = `
            <p>${currentList[i]}</p>
            <button onclick="todoRemove(${i})">Remove</button>
        `

        todoContainer.appendChild(listElement)
    }
}

function todoAdd() {
    let newItem = prompt("New Todo Item:")

    if (newItem !== "") {
        let currentList = JSON.parse(localStorage.getItem("todo-list"))

        localStorage.setItem("todo-list", JSON.stringify([newItem, ...currentList]))

        todoRender()
    }
}

function todoRemove(index) {
    let currentList = JSON.parse(localStorage.getItem("todo-list"))

    if (index >= 0 && index < currentList.length) {
        currentList.splice(index, 1)

        localStorage.setItem("todo-list", JSON.stringify(currentList))

        todoRender()
    } else {
        console.error("Invalid index! 🚫")
    }
}

/* ----------------------------- event listeners ---------------------------- */

addItemButton.addEventListener("click", todoAdd)