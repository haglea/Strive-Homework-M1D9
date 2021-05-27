// declaring and assigning bingo cell
let randomBingoCell = 0


// executing java script
window.onload = function() {
    createHeadingh1()
    createButton()
}

// create heading h1
const createHeadingh1 = function () {
    let headingh1 = document.createElement("h1")
    headingh1.innerHTML = "BINGO CHALLENGE!!!"
    document.body.appendChild(headingh1)
    return headingh1
}

// function that chooses random bingo cell
const chooseRandomBingoCell = function (randomBingoCell) {
    randomBingoCell = Math.floor(Math.random()*76)+1 //returns random integer from 1 to 76
    console.log(randomBingoCell)
    return randomBingoCell
}

// button with random bingo cell
const createButton = function () {

    let randomBingoCellButton = document.createElement("button")
    randomBingoCellButton.innerHTML = "Click the button"
    randomBingoCellButton.onclick = chooseRandomBingoCell
    //cell number is not changing?
    document.body.appendChild(randomBingoCellButton)
}

/*
//create bingo board from 1 to 76
const createBingoBoard = function () {
    let bingoBoard = document.createElement("table") 
    let tableHead = table.createTHead
    /*for (i=1; i <= 76; i++) {
        let bingoBoardCell = document.createElement
    }
    let bingoBoardCell = */
}*/

