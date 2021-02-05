// initialize variables
const maxPoints = parseInt(document.querySelector('#maxPoints'));
const scoreP1 = document.querySelector('#scoreP1');
const scoreP2 = document.querySelector('#scoreP2');

const btnPlayerOne = document.querySelector('#playerOne');
const btnPlayerTwo = document.querySelector('#playerTwo');
const btnReset = document.querySelector('#reset');

const score  =   {
    p1: 0,
    p2: 0
}

// Event listeners

// Increases player one's score
btnPlayerOne.addEventListener('click', function ()  {
    score.p1++;
    scoreP1.innerText = `${score.p1}`;
    if (score.p1 === maxPoints) {
        scoreP1.classList.toggle('green');
        scoreP2.classList.toggle('red');        
    }
}); 

// Increases player two's score
btnPlayerTwo.addEventListener('click', function ()  {
    score.p2++;
    scoreP2.innerText = `${score.p2}`;
    if (score.p2 === maxPoints) {
        scoreP2.classList.toggle('green');
        scoreP1.classList.toggle('red');        
    }
});


// Reset the game
btnReset.addEventListener('click', ()   =>  {
    btnPlayerOne.disabled = false;
    btnPlayerTwo.disable = false;
    score.innerText = "0 to 0";
});


