// CONSTANTS
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const startingLives = 3;
const startingScore = 0;
const heartsP1 = document.querySelectorAll('.lives__container--one .lives__heart');
const heartsP2 = document.querySelectorAll('.lives__container--two .lives__heart');
const scoreP1 = document.querySelector('.score__p1');
const scoreP2 = document.querySelector('.score__p2');


// VARIABLES
let p1, p2;

function drawHearts(playerHearts, livesLeft) {
    for (let i = 0; i < startingLives; i++) {
        if (i <= livesLeft -1 ) {
            playerHearts[i].classList.add('lives__heart--show');
        } else {
            playerHearts[i].classList.remove('lives__heart--show');
        }
    }
}

function updateScores() {
    console.log("UPDATE");
    scoreP1.textContent = p1.score;
    scoreP2.textContent = p2.score;
}

function gameInit() {
    p1 = new Player(startingLives, startingScore);
    p2 = new Player(startingLives, startingScore);


    drawHearts(heartsP1, p1.lives);
    drawHearts(heartsP2, p2.lives);
    updateScores();
}

gameInit();

