// CONSTANTS
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const startingLives = 3;
const heartsP1 = document.querySelectorAll('.lives__container--one .lives__heart');
const heartsP2 = document.querySelectorAll('.lives__container--two .lives__heart');

// VARIABLES
let livesP1 = startingLives;
let livesP2 = startingLives;

function drawHearts(playerHearts, livesLeft) {
    for (let i = 0; i < startingLives; i++) {
        if (i <= livesLeft -1 ) {
            playerHearts[i].classList.add('lives__heart--show');
        } else {
            playerHearts[i].classList.remove('lives__heart--show');
        }
    }
}

function gameInit() {
    drawHearts(heartsP1, livesP1);
    drawHearts(heartsP2, livesP2);
}

gameInit();