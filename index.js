// declaring Bingo Board cell
let bingoBoardCell

// executing java script
window.onload = function() {
    createHeadingh1()
    createBingoBoard()
    createButtonAndBingoCell()
}

// create heading h1
const createHeadingh1 = function () {
    let headingh1 = document.createElement("h1")
    headingh1.innerHTML = "BINGO CHALLENGE!!!"
    document.body.appendChild(headingh1)
    return headingh1
}

// create BINGO board with 76 cells
const createBingoBoard = function () {
    for (i = 1; i < 77; i++) {
        bingoBoardCell = document.createElement("div")
        bingoBoardCell.innerHTML = i
        bingoBoardCell.classList.add("bingoboardcell")
        document.body.appendChild(bingoBoardCell)
    } 
}

// Create a button and bingo cell
const createButtonAndBingoCell = function () {
    let randomBingoCellButton = document.createElement("button")
    randomBingoCellButton.innerHTML = "Click the button"
    document.body.appendChild(randomBingoCellButton)  

    let randomBingoCell = document.createElement("div")
    randomBingoCell.innerHTML = ""
    randomBingoCell.classList.add("randombingocell")
    document.body.appendChild(randomBingoCell)

// onclick random number
    randomBingoCellButton.onclick = function () {
        randomBingoCell.innerHTML = Math.floor(Math.random()*76)+1  // declaring random bingo cell
        let bingoBoardCellNumber = document.querySelectorAll(".bingoboardcell")
        bingoBoardCellNumber.forEach((bingoBoardCell) => {
            if (parseInt(bingoBoardCell.innerHTML) === parseInt(randomBingoCell.innerHTML)) {
                bingoBoardCell.style.color = "blue"
            }
        })    

    }
}


