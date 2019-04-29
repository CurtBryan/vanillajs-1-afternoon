console.log("hello");
let board = [];
function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);
  if (clickedElement.innerText) {
    return;
  }
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
  checkForWinner();
}

function checkForWinner() {
  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];
  console.log(board);
  console.log(topLeft, topCenter, topRight);
  for (var i = 0, l = board.length; i < l; i++) {
    if (
      topLeft !== undefined &&
      topLeft === topCenter &&
      topLeft === topRight
    ) {
      alert(`${topLeft} is the winner`);
      reset();
      return;
    }
    if (
      middleLeft !== undefined &&
      middleLeft === middleCenter &&
      middleLeft === middleRight
    ) {
      alert(`${middleLeft} is the winner`);
      reset();
      return;
    }
    if (
      bottomLeft !== undefined &&
      bottomLeft === bottomCenter &&
      bottomLeft === bottomRight
    ) {
      alert(`${bottomLeft} is the winner`);
      reset();
      return;
    }
    if (
      topLeft !== undefined &&
      topLeft === middleLeft &&
      topLeft === bottomLeft
    ) {
      alert(`${topLeft} is the winner`);
      reset();
      return;
    }
    if (
      topCenter !== undefined &&
      topCenter === middleCenter &&
      topCenter === bottomCenter
    ) {
      alert(`${topCenter} is the winner`);
      reset();
      return;
    }
    if (
      topRight !== undefined &&
      topRight === middleRight &&
      topRight === bottomRight
    ) {
      alert(`${topRight} is the winner`);
      reset();
      return;
    }
    if (
      topLeft !== undefined &&
      topLeft === middleCenter &&
      topLeft === bottomRight
    ) {
      alert(`${topLeft} is the winner`);
      reset();
      return;
    }
    if (
      bottomLeft !== undefined &&
      bottomLeft === middleCenter &&
      bottomLeft === topRight
    ) {
      alert(`${bottomLeft} is the winner`);
      reset();
      return;
    } else {
      fullBoard(board);
    }
  }
}
function fullBoard(board) {
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}

function reset() {
  board = [];
  console.log(board);
  const resetTags = document.getElementsByTagName("td");
  for (let i = 0; i < resetTags.length; i++) {
    resetTags[i].innerText = "";
  }
}
// console.log(fullBoard);
console.log(play);
