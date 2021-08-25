'use strict';

// Initialization
let increaseButton = document.createElement("button")
let decreaseButton = document.createElement("button")
let resetButton = document.createElement("button")
let counterText = document.createElement("h1")
let buttonGroup = document.querySelector(".button-group")
let counter = 0
let section = document.querySelector("section")
increaseButton.innerHTML = "+"
decreaseButton.innerHTML = "-"
resetButton.innerHTML = "Reset"
counterText.innerHTML = String(counter)

increaseButton.classList.add("button")
decreaseButton.classList.add("button")
resetButton.classList.add("button")
buttonGroup.appendChild(decreaseButton)
buttonGroup.appendChild(resetButton)
buttonGroup.appendChild(increaseButton)
section.prepend(counterText)




// Counter Script



// Increase the counter and display it
increaseButton.addEventListener("click" , function(){
    counter++
    counterText.innerHTML = counter
    if(counter % 50 === 0){
        console.log("OOOO")
    }
    if(counter % 100 === 0){
        console.log("YEAAA")
    }
})
// Reset the counter 
resetButton.addEventListener("click" , function(){
    counter = 0
    counterText.innerHTML = counter
})

// Decrease the counter and display it
decreaseButton.addEventListener("click" , function(){
    counter--
    counterText.innerHTML = counter
})

