"use strict";

const btn = document.querySelector("#btnRandom")
const bod = document.querySelector("#bod")
const bgName = document.querySelector("#bgName")
const colors = ["aqua","plum", "rebeccapurple", "cadetblue", "burlywood", "indianred", "dodgerblue", "coral", "chocolate", "navajowhite","cornflowerblue", "red","blue", "white", "crimson","gold","forestgreen","purple","cyan","lemonchiffon","yellow"]
const letters = document.querySelectorAll("#letter")

var visited;

const randomLetterColors = () => {
    let colored;
    
    letters.forEach(letter => {
        let randomColor = Math.floor(Math.random() * colors.length)
        while (randomColor === colored) {
            randomColor = Math.floor(Math.random() * colors.length)
        }
        let color = colors[randomColor]
        letter.style.color = color
    })
}
const randomBackgroundColor = () => {
    let randomColor = Math.floor(Math.random() * colors.length)
    while (randomColor === visited) {
        randomColor = Math.floor(Math.random() * colors.length)
    }
    visited = randomColor
    let color = colors[randomColor]
    bod.style.background = color
    bgName.innerHTML = `${color}`.replace(/^\w/, e => e.toUpperCase())
}

btn.addEventListener("click", () => {
    randomLetterColors()
    randomBackgroundColor()
})