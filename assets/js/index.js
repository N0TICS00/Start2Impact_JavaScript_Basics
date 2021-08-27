'use strict';

// Initialization
let increaseButton = document.createElement("button")
let decreaseButton = document.createElement("button")
let resetButton = document.createElement("button")
let counterText = document.createElement("h1")
let buttonGroup = document.querySelector(".button-group")
let counter = 0
let section = document.querySelector("section")
let counterSection = document.querySelector(".counter-text")
let bestScoreText = document.querySelector(".best-score")
increaseButton.innerHTML = "+"
decreaseButton.innerHTML = "-"
resetButton.innerHTML = "Reset"
counterText.innerHTML = `User's Score: ${counter}`

increaseButton.classList.add("button")
decreaseButton.classList.add("button")
resetButton.classList.add("button")
buttonGroup.appendChild(decreaseButton)
buttonGroup.appendChild(resetButton)
buttonGroup.appendChild(increaseButton)
counterSection.prepend(counterText)


let bestScore = localStorage.getItem("bestScore")

// Counter Script

bestScoreText.innerText = `User's Best Score: ${localStorage.getItem("bestScore")}`

// Increase the counter and display it
increaseButton.addEventListener("click" , function(){
    counter++
    counterText.innerHTML = `User's Score: ${counter}`
    
 if(bestScore < counter){
    localStorage.setItem("bestScore" , counter)
    
    bestScoreText.innerText = `User's Best Score: ${localStorage.getItem("bestScore")}`
     
 }
 
    this.classList.toggle("button-animation")
})
// Reset the counter 
resetButton.addEventListener("click" , function(){
    counter = 0
    counterText.innerHTML = `User's Score: ${counter}`
    this.classList.toggle("button-animation")
})

// Decrease the counter and display it
decreaseButton.addEventListener("click" , function(){
    counter--
    counterText.innerHTML = `User's Score: ${counter}`
    this.classList.toggle("button-animation")
})

//Onclick start the animation

