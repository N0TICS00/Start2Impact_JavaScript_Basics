'use strict';


//Query Selector
let counterText = document.querySelector(".counter-text")
let buttonGroup = document.querySelector(".button-group")
let section = document.querySelector("section")
let bestScoreText = document.querySelector(".best-score")







//Best Score && Counter Value
let bestScoreData = localStorage.getItem("bestScore") 
let counter = 0


//Create Element
let increaseButton = document.createElement("button")
let decreaseButton = document.createElement("button")
let resetButton = document.createElement("button")
//Add text
  if(bestScoreData === null) bestScoreText.innerHTML = `User's Best Score: 0`
else  bestScoreText.innerText = `User's Best Score: ${bestScoreData}`
  increaseButton.innerHTML = "+"
  decreaseButton.innerHTML = "-"
  resetButton.innerHTML = "Reset"
  counterText.innerHTML = `User's Score: ${counter}`
  
// Add Classes
  increaseButton.classList.add("button")
  decreaseButton.classList.add("button")
  resetButton.classList.add("button")

//Display
  buttonGroup.appendChild(decreaseButton)
  buttonGroup.appendChild(resetButton)
  buttonGroup.appendChild(increaseButton)




 // Counter Script 
// Increase the counter and display it
increaseButton.addEventListener("click" , function(){
    counter++
    counterText.innerHTML = `User's Score: ${counter}`
 
    // Set BestScore Data in localStorage and display it 
    if(bestScoreData < counter){
    localStorage.setItem("bestScore" , counter)
    bestScoreText.innerText = `User's Best Score: ${localStorage.getItem("bestScore")}`
    }
 
    this.classList.toggle("button-animation")
})
// Reset the counter and display it
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



