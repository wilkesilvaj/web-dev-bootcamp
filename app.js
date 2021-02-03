const btn = document.querySelector('#v2');

btn.onclick = () => {
    console.log('This buttons makes use of external scripts!');
}

function scream() {
    console.log("AAAAAAAAAA! You have hover over the button!");
}

btn.onmouseover =   scream;

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', () =>    {
    alert("You have clicked on button #3!")
})

// Code to randomize bgcolor
const colorBtn = document.querySelector('#color');

const randomizeColor = () =>    {
    let r = Math.floor(Math.random()*255 + 1);
    let g = Math.floor(Math.random()*255 + 1);
    let b = Math.floor(Math.random()*255 + 1);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// Event handler that changes the background color
colorBtn.addEventListener('click', randomizeColor);


// Creates the event that return a random color
const randomizeButtonColor =  ()  =>    {
    let r = Math.floor(Math.random()*255 + 1);
    let g = Math.floor(Math.random()*255 + 1);
    let b = Math.floor(Math.random()*255 + 1);
    return `rgb(${r},${g},${b})`;
}

// Get all the buttons with the class of colors
const colorChangingButtons = document.querySelectorAll(".colors");

// Iterates through the list of buttons and add the event listener to each button
for (let button of colorChangingButtons)    {
    button.addEventListener('click', colorize);
}

function colorize() {
    this.style.backgroundColor = randomizeButtonColor();
    this.style.color = randomizeButtonColor();
    
}
