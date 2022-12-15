const dodger = document.getElementById("dodger");
const dodgerWidth = parseInt(getComputedStyle(dodger).width.replace("px", ""));
const game = document.getElementById("game");
const gameWidth = parseInt(getComputedStyle(game).width.replace("px", ""));



function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

//   if (left < gameWidth - dodgerWidth) {
//     dodger.style.left = `${left + 1}px`;
//   }
    dodger.style.left = `${left + 1}px`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});