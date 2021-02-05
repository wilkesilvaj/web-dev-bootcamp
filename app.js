// initialize variables
const pointsSelect = document.querySelector('#maxPoints');
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
  
     const maxPoints = pointsSelect[pointsSelect.selectedIndex].value;      
    score.p1++;
    scoreP1.innerText = `${score.p1}`;
    if (score.p1 == maxPoints) {
        
        scoreP1.classList.toggle('green');
        scoreP2.classList.toggle('red');  
        
        // Disable the buttons
        btnPlayerOne.disabled = true;     
        btnPlayerTwo.disabled = true;  
    }
}); 

// Increases player two's score
btnPlayerTwo.addEventListener('click', function ()  {
    const maxPoints = pointsSelect[pointsSelect.selectedIndex].value;  
    score.p2++;
    scoreP2.innerText = `${score.p2}`;
    if (score.p2 === maxPoints) {
        scoreP2.classList.toggle('green');
        scoreP1.classList.toggle('red');   
        
        // Disable the buttons
        btnPlayerOne.disabled = true;     
        btnPlayerTwo.disabled = true;     
    }
});


// Reset the game
btnReset.addEventListener('click', ()   =>  {
    
    score.p1 = 0;
    score.p2 = 0;
    
    btnPlayerOne.disabled = false;
    btnPlayerTwo.disabled = false;

    // Resets score
    scoreP1.innerText = "0";
    scoreP2.innerText = "0";
    
    // Removes the styling from the test
    scoreP1.classList.remove('green');
    scoreP1.classList.remove('red');
    scoreP2.classList.remove('green');
    scoreP2.classList.remove('red');
});


