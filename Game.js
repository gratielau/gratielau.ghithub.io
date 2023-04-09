const squares = document.querySelectorAll(".square");
const jerry = document.querySelector(".jerry");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result;
let hitPosition;
let currentTime;
let timerRunJerry;
let countDownTimer;

function Start() {
  result = 0;
  hitPosition;
  currentTime = 30;
  timerFastRunJerry = null;
  score.textContent = result;
  timeLeft.textContent = currentTime;

  countDownTimer = setInterval(countDown, 1000);

  timerRunJerry = setInterval(randomSquare, 500);
}

clickHit();
function clickHit() {
  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id == hitPosition) {
        result++;
        score.textContent = result;
        hitPosition = null;
      }
    });
  });
}

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("jerry");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("jerry");

  hitPosition = randomSquare.id;
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimer);
    clearInterval(timerRunJerry);
    hitPosition = null;
    alert("GAME OVER! Your final score is " + result);
  }
}
