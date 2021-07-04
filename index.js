// add text to heading h1
const addTextToh1 = function () {
  let headingh1 = document.querySelector("h1");
  headingh1.innerText = "BINGO CHALLENGE!!!"
};

// create BINGO board with 76 cells
let container = document.getElementById("container");
const createBingoBoard = function () {
  let bingoBoard = document.querySelector(".bingoboard")
  for (i = 0; i < 76; i++) {
    let bingoBoardCell = document.createElement("div");
    bingoBoardCell.innerHTML = i + 1;
    bingoBoardCell.classList.add("bingoboardcell");
    bingoBoard.appendChild(bingoBoardCell);
  } 
};

// Create a button and bingo cell
let randomBingoCellButton = document.querySelectorAll("button")[0];
let randomBingoCell = document.getElementById("randombingocellid");
const createButtonAndBingoCell = function () {  
  randomBingoCellButton.innerHTML = "Click the button";
  randomBingoCellButton.classList.add("randombingocellbutton")  
  randomBingoCell.innerText = 0
  randomBingoCell.classList.add("randombingocell");  
};


//create User Boards
const createUserBoards = function () {
  const numberOfUB = document.getElementById("numberofub").value;
  /*  if (parseInt(numberOfUB) === null) { parseInt(numberOfUB) = 0 }   */
  for (i = 0; i < parseInt(numberOfUB); i++) {
    const bingoBoard24 = document.createElement("div");
    bingoBoard24.className = "bingoboard24";
    for (j = 0; j < 24; j++) {
      let bingoBoard24Cell = document.createElement("div");
      bingoBoard24Cell.classList.add("bingoboardcell24");
      let random = Math.floor(Math.random() * 76) + 1;
      bingoBoard24Cell.innerHTML = `${random}`;
      bingoBoard24.appendChild(bingoBoard24Cell);
    }
    container.appendChild(bingoBoard24);
  }   
};

// onclick random number
randomBingoCellButton.onclick = function () {
  randomBingoCell.innerHTML = Math.floor(Math.random() * 76) + 1; // declaring random bingo cell
   randomBingoCell.classList.toggle("randombingocell2") 
  let bingoBoardCellNumber = document.querySelectorAll(".bingoboardcell");  
  bingoBoardCellNumber.forEach((bingoBoardCell) => {
    if (
      parseInt(bingoBoardCell.innerHTML) ===
      parseInt(randomBingoCell.innerHTML)
    ) {
      bingoBoardCell.style.background = "green";
    }
  });

  let bingoBoard24CellNumber = document.querySelectorAll(".bingoboardcell24")
  bingoBoard24CellNumber.forEach((bingoBoard24Cell) => {
    if (
      parseInt(bingoBoard24Cell.innerHTML) ===
      parseInt(randomBingoCell.innerHTML)
    ) {
      bingoBoard24Cell.style.background = "green";
    }
  })
};



// executing java script
window.onload = function () {
  addTextToh1()
  createBingoBoard();
  createButtonAndBingoCell();  
  let submitNumberOfUB = document.getElementById("submitnumberofub");
  submitNumberOfUB.onclick = createUserBoards;   
};