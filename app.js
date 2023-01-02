// const variables
const messageBtn = document.querySelector(".message-box")
const messageBox = document.querySelector(".cont-form")
const dark = document.querySelector(".dark")
const body = document.querySelector(".body")

// Message box click
messageBtn.addEventListener("click", () =>{
    
    // Lock scroll function
    body.style.overflow = "hidden"

    // Pull up message box and dark background
    dark.style.display = "inline"
    messageBox.style.display = "inline"
})

// Dark box click
dark.addEventListener("click", () =>{
        
    // Unlockock scroll function
    body.style.overflow = "visible"

    // Pull up message box and dark background
    dark.style.display = "none"
    messageBox.style.display = "none"
})


// Navigation
const scrollTO = document.querySelectorAll(".scrollTO")

scrollTO.forEach((opt) =>{
    
    opt.addEventListener("click", () => {

        const el = document.getElementById(opt.getAttribute("data-link"))
        el.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    })
})

let sum = 0
let numIterations = 0

for(let i = 1; i < 20; i++){
    sum = sum + i * (i + 1)
    numIterations++
}

console.log("Num iterations " + numIterations)
numIterations = 0

for(let i = 5; i < 2 * 8; i++){
    numIterations++
}

console.log(sum)
console.log("Num iterations " + numIterations)
